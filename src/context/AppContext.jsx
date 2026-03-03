import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [jwt, setJwt] = useState(null);

    return (
        <AppContext.Provider
            value={{}}
        >
            {children}
        </AppContext.Provider>
    )
};