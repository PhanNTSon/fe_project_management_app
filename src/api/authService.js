import api from "./axiosClient";

export const register = async (data) => {
    const resp = await api.post("/auth/register", data)
    return resp.data
}
export const login = async (data) => {
    const resp = await api.post("/auth/login", data);
    return resp.data;
};

export const logout = () => {
    setAuthToken(null);
}

export const refreshToken = async () => {
    const resp = await api.post("/auth/refresh-token");
    return resp.data;
};