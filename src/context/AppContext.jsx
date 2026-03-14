import { createContext, useState, useEffect } from "react";
import { refreshToken, getProfile } from "../api/authService";
import { setAuthToken } from "../api/axiosClient";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [jwt, setJwt] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);

    useEffect(() => {

        let isMounted = true; // Track nếu component còn mounted

        const bootstrapAuth = async () => {
            try {
                // Step 1: Try to refresh token using httpOnly cookie
                const tokenData = await refreshToken();

                // ✅ Chỉ update state nếu component còn mounted (prevent memory leak)
                if (!isMounted) {
                    console.log("[AppContext] Component unmounted, skipping state update");
                    return;
                }

                console.log("[AppContext] Bootstrap auth success, token:", tokenData.accessToken.substring(0, 20) + "...");
                setAuthToken(tokenData.accessToken); // ✅ inject Bearer token vào axios headers
                setJwt(tokenData.accessToken);

                // Step 2: Fetch user profile data
                try {
                    const userProfileData = await getProfile();

                    if (isMounted) {
                        setUser({
                            userId: userProfileData.userId,
                            username: userProfileData.username,
                            fullName: userProfileData.fullName,
                            email: userProfileData.email,
                            isActive: userProfileData.isActive
                        });
                        console.log("[AppContext] User profile loaded:", userProfileData.username);
                    }
                } catch (profileErr) {
                    if (isMounted) {
                        console.error("[AppContext] Failed to load user profile:", profileErr);
                        // Keep jwt but leave user as null if profile fetch fails
                    }
                }

            } catch (err) {

                if (!isMounted) {
                    console.log("[AppContext] Component unmounted, skipping error handling");
                    return;
                }

                setJwt(null)
                setUser(null)
                console.error("[AppContext] Bootstrap auth failed:", err.response?.status, err.response?.data)

            } finally {

                if (isMounted) {
                    setAuthLoading(false)
                }

            }
        };

        bootstrapAuth();

        // ✅ Cleanup: Mark component as unmounted (React Strict Mode)
        return () => {
            isMounted = false;
            console.log("[AppContext] Component cleanup (Strict Mode unmount)");
        };

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