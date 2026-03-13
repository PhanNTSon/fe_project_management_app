import { createContext, useState, useEffect } from "react";
import { refreshToken } from "../api/authService";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState({ fullName: "Demo User", username: "demo1" });
    const [jwt, setJwt] = useState("dummy_token");
    const [authLoading, setAuthLoading] = useState(false);

    useEffect(() => {
        // Mocked for demo
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