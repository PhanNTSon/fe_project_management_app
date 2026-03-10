import { createContext, useState, useEffect } from "react";
import { refreshToken } from "../api/authService";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [jwt, setJwt] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);

    useEffect(() => {

        const bootstrapAuth = async () => {
            try {
                const data = await refreshToken();
                console.log("Bootstrap auth success:", data);
                setJwt(data.accessToken);

                // nếu BE trả user info thì set luôn
                // setUser(data.user);

            } catch (err) {

                setJwt(null)
                console.log("Bootstrap auth failed:", err)

            } finally {

                setAuthLoading(false)

            }
        };

        bootstrapAuth();

    }, []);

    return (
        <AppContext.Provider
            value={{
                jwt,
                setJwt,
                user,
                setUser,
                authLoading
            }}
        >
            {children}
        </AppContext.Provider>
    )
};