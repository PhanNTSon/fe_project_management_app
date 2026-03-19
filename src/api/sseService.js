/**
 * sseService.js
 * Quản lý kết nối Server-Sent Events (SSE) với backend.
 * Frontend gọi connectSSE() sau khi đăng nhập và disconnectSSE() khi logout.
 *
 * Vì EventSource không hỗ trợ custom header nên JWT được truyền qua query param `?token=`.
 * Backend JwtFilter đã được cập nhật để đọc token từ query param này.
 */

const SSE_BASE_URL = `${import.meta.env.VITE_API_URL}/api/sse/subscribe`;

let eventSource = null;

/**
 * Kết nối SSE tới backend và lắng nghe các event.
 * @param {string} token - JWT access token (cần vì EventSource không gửi header)
 * @param {Function} onEvent - callback(eventName: string, data: object) khi nhận event
 */
export const connectSSE = (token, onEvent) => {
    // Đóng kết nối cũ nếu có
    disconnectSSE();

    if (!token) {
        console.warn("[SSE] No token provided, skipping SSE connection");
        return;
    }

    const url = `${SSE_BASE_URL}?token=${encodeURIComponent(token)}`;
    console.log("[SSE] Connecting...");

    eventSource = new EventSource(url);

    eventSource.onopen = () => {
        console.log("[SSE] Connection established");
    };

    // Lắng nghe event INVITATION_RECEIVED
    eventSource.addEventListener("INVITATION_RECEIVED", (e) => {
        try {
            const data = JSON.parse(e.data);
            console.log("[SSE] INVITATION_RECEIVED:", data);
            onEvent("INVITATION_RECEIVED", data);
        } catch (err) {
            console.error("[SSE] Failed to parse INVITATION_RECEIVED data:", err);
        }
    });

    // Lắng nghe event ROLE_UPDATED
    eventSource.addEventListener("ROLE_UPDATED", (e) => {
        try {
            const data = JSON.parse(e.data);
            console.log("[SSE] ROLE_UPDATED:", data);
            onEvent("ROLE_UPDATED", data);
        } catch (err) {
            console.error("[SSE] Failed to parse ROLE_UPDATED data:", err);
        }
    });

    eventSource.onerror = (err) => {
        // SSE tự động reconnect khi mất kết nối — đây là hành vi mặc định của EventSource
        console.warn("[SSE] Connection error (will auto-reconnect):", err);
    };
};

/**
 * Đóng kết nối SSE. Gọi khi user logout hoặc unmount.
 */
export const disconnectSSE = () => {
    if (eventSource) {
        eventSource.close();
        eventSource = null;
        console.log("[SSE] Connection closed");
    }
};
