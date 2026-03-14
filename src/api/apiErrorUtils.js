/**
 * Centralized API error parsing utilities.
 *
 * parseApiError(err, fallback?)  - Trả về string message phù hợp hiển thị cho user.
 * logApiError(err, context?)     - Ghi log chi tiết vào console cho debugging.
 */

/**
 * Ánh xạ HTTP status code → message mặc định thân thiện với người dùng.
 */
const STATUS_MESSAGES = {
    400: "Dữ liệu gửi lên không hợp lệ.",
    401: "Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.",
    403: "Bạn không có quyền thực hiện thao tác này.",
    404: "Không tìm thấy tài nguyên yêu cầu.",
    409: "Dữ liệu bị xung đột. Vui lòng thử lại.",
    422: "Dữ liệu không thể xử lý được.",
    429: "Quá nhiều yêu cầu. Vui lòng thử lại sau.",
    500: "Lỗi máy chủ nội bộ. Vui lòng thử lại sau.",
    502: "Máy chủ tạm thời không khả dụng.",
    503: "Dịch vụ đang bảo trì. Vui lòng thử lại sau.",
};

/**
 * Trả về message phù hợp để hiển thị cho người dùng từ một axios error.
 *
 * Thứ tự ưu tiên:
 *   1. `err.response.data.message`  — message do BE trả về (ErrorResponse)
 *   2. Message mặc định theo status code
 *   3. `fallback` do caller cung cấp
 *   4. "Đã xảy ra lỗi không xác định."
 *
 * @param {Error} err         Axios error object
 * @param {string} [fallback] Fallback message nếu không xác định được
 * @returns {string}
 */
export function parseApiError(err, fallback) {
    // Có response từ server
    if (err?.response) {
        const serverMessage = err.response.data?.message;
        if (serverMessage && typeof serverMessage === "string" && serverMessage.trim()) {
            return serverMessage.trim();
        }
        const statusMsg = STATUS_MESSAGES[err.response.status];
        if (statusMsg) return statusMsg;
    }

    // Không có response (mạng bị ngắt, timeout, v.v.)
    if (err?.request) {
        return "Không thể kết nối đến máy chủ. Vui lòng kiểm tra kết nối mạng.";
    }

    return fallback || "Đã xảy ra lỗi không xác định.";
}

/**
 * Ghi log chi tiết lỗi axios vào console (chỉ dùng cho debugging, không hiển thị cho user).
 *
 * @param {Error} err           Axios error object
 * @param {string} [context]    Tên trang/component để dễ tìm trong console
 */
export function logApiError(err, context = "App") {
    const status = err?.response?.status ?? "no-response";
    const url = err?.config?.url ?? "unknown-url";
    const method = (err?.config?.method ?? "?").toUpperCase();
    const data = err?.response?.data ?? null;

    console.error(
        `[API Error] [${context}] ${method} ${url} → ${status}`,
        "\nResponse data:", data,
        "\nError:", err
    );
}
