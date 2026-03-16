import { createContext, useState, useEffect, useCallback } from "react";
import { refreshToken, getProfile, logout } from "../api/authService";
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

        return () => {
            isMounted = false;
            console.log("[AppContext] Component cleanup (Strict Mode unmount)");
        };

    }, []);

    // ✅ Centralized logout: gọi API + xóa token + xóa cookies + reset state
    const logoutUser = useCallback(async () => {
        try {
            await logout();
        } catch (err) {
            console.error('[AppContext] Logout API error (safe to ignore):', err);
        } finally {
            // Xóa Bearer token khỏi axios headers
            setAuthToken(null);
            // Xóa tất cả cookies mà frontend có thể đã set (non-httpOnly)
            document.cookie.split(';').forEach((c) => {
                const eqPos = c.indexOf('=');
                const name = eqPos > -1 ? c.substring(0, eqPos).trim() : c.trim();
                // Xóa cookie bằng cách đặt maxAge=0
                document.cookie = `${name}=;path=/;max-age=0`;
                // Đảm bảo cũng xóa trên subdomain nếu có
                document.cookie = `${name}=;path=/;domain=${window.location.hostname};max-age=0`;
            });
            setJwt(null);
            setUser(null);
        }
    }, []);

    return (
        <AppContext.Provider
            value={{
                jwt,
                setJwt,
                user,
                setUser,
                authLoading,
                logoutUser
            }}
        >
            {children}
        </AppContext.Provider>
    )
};