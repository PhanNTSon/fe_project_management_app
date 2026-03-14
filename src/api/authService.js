import api, { setAuthToken } from "./axiosClient";

let refreshPromise = null; // Cache Promise cho refresh token (handle React Strict Mode 2x mount)

export const register = async (data) => {
    const resp = await api.post("/api/auth/register", data)
    return resp.data
}

export const login = async (data) => {
    const resp = await api.post("/api/auth/login", data);
    return resp.data;
};

export const logout = async () => {
    await api.post("/api/auth/logout");
    setAuthToken(null); // ✅ xóa Bearer token khỏi axios headers
}

export const refreshToken = async () => {
    // ✅ Nếu đang có request refresh-token chạy, reuse promise đó thay vì gọi lại
    // Điều này xử lý React Strict Mode (mount 2 lần trong dev mode)
    if (refreshPromise) {
        console.log("[authService] Refresh already in progress, reusing promise...");
        return refreshPromise;
    }

    // Tạo request mới và cache Promise
    refreshPromise = (async () => {
        try {
            console.log("[authService] Creating new refresh-token request...");
            const resp = await api.post("/api/auth/refresh-token");
            console.log("[authService] Refresh-token success, new token:", resp.data.accessToken.substring(0, 20) + "...");
            return resp.data;
        } finally {
            // Xóa cache sau khi request xong (thành công hoặc lỗi)
            refreshPromise = null;
        }
    })();

    return refreshPromise;
};

export const getProfile = async () => {
    try {
        console.log("[authService] Fetching user profile...");
        const resp = await api.get("/api/users/me");
        console.log("[authService] User profile retrieved:", resp.data.username);
        return resp.data;
    } catch (error) {
        console.error("[authService] Failed to fetch user profile:", error);
        throw error;
    }
};