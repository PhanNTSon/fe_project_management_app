import axios from "axios";
import { refreshToken } from "./authService";

const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`,
    withCredentials: true
});

export const setAuthToken = (token) => {
    if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common["Authorization"];
    }
};

export default api;

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
    failedQueue.forEach((prom) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
};

api.interceptors.response.use(

    (response) => response,

    async (error) => {

        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {

            console.log("[Interceptor] 401 Unauthorized, attempting to refresh token...");

            // Nếu đang có một lần refresh đang chạy, queue request hiện tại lại
            // và chờ kết quả của lần refresh đó thay vì gọi refreshToken() lần nữa.
            if (isRefreshing) {
                console.log("[Interceptor] Already refreshing, queuing request...");
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                })
                    .then((token) => {
                        console.log("[Interceptor] Queue resolved, retrying with new token");
                        originalRequest.headers["Authorization"] = `Bearer ${token}`;
                        return api(originalRequest);
                    })
                    .catch((err) => {
                        console.error("[Interceptor] Queue rejected:", err.message);
                        return Promise.reject(err);
                    });
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                console.log("[Interceptor] Calling refreshToken()...");
                const data = await refreshToken();
                const newToken = data.accessToken;

                console.log("[Interceptor] Got new token:", newToken.substring(0, 20) + "...");

                setAuthToken(newToken);
                originalRequest.headers["Authorization"] = `Bearer ${newToken}`;

                // Flush tất cả các request đang chờ với token mới
                processQueue(null, newToken);

                // NOTE: User data refresh is handled at:
                // 1. Login flow (explicit call to getProfile)
                // 2. App bootstrap on page load (F5 page refresh)
                // 3. Not here during auto token refresh, to keep interceptor lightweight
                // If needed, user data can be refreshed via explicit action or next page load

                return api(originalRequest);

            } catch (err) {

                console.error("[Interceptor] Refresh token failed:", err.response?.status, err.response?.data);

                // Refresh thất bại → reject toàn bộ queue
                processQueue(err, null);
                return Promise.reject(err);

            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }

);