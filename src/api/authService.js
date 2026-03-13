import api, { setAuthToken } from "./axiosClient";

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
    const resp = await api.post("/api/auth/refresh-token");
    return resp.data;
};