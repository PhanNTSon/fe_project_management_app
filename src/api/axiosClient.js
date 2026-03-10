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

api.interceptors.response.use(

    (response) => response,

    async (error) => {

        const originalRequest = error.config;

        if (
            error.response?.status === 401 &&
            !originalRequest._retry
        ) {

            originalRequest._retry = true;

            try {

                const data = await refreshToken();

                setAuthToken(data.accessToken);

                originalRequest.headers["Authorization"] =
                    `Bearer ${data.accessToken}`;

                return api(originalRequest);

            } catch (err) {

                return Promise.reject(err);

            }

        }

        return Promise.reject(error);

    }

);