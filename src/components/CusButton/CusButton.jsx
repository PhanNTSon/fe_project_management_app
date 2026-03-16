import "./CusButton.css"

/**
 * CusButton Component
 *
 * Một button tuỳ chỉnh với nhiều trạng thái và màu sắc.
 *
 * @param {Object} props - Thuộc tính của component
 * @param {string} props.label - Nhãn hiển thị trên nút
 * @param {() => void} props.onClick - Hàm callback khi người dùng click
 * @param {boolean} [props.disabled=false] - Trạng thái disabled của nút
 * @param {'red-button'|'grey-button'|'blue-button'|'green-button'|'white-button'|'white-grey-button'|'gradient-blue-button'|'gradient-green-button'|'dashed-text-button'} props.color - Class màu của nút
 * @param {'button'|'submit'|'reset'} [props.type] - Loại button (HTML type)
 * @param {boolean} [props.loading=false] - Nếu true thì hiển thị spinner thay vì label
 *
 * @returns {JSX.Element} Một button component với label, click handler, disabled state, loading state và màu sắc tuỳ chỉnh.
 *
 * Styling:
 * - Component tự động thêm class theo `color` và trạng thái disabled/loading.
 * - Không cần styling bên trong component.
 * - Chỉ cần styling container/div bao quanh để kiểm soát layout.
 */
export default function CusButton({ label, onClick, disabled, color, type, loading = false }) {
    return (
        <button
            title={label}
            onClick={onClick}
            disabled={disabled || loading || label === ""}
            className={`base-button ${color}`}
            type={type || "button"}
        >
            {loading ? (
                <span className="spinner"></span>
            ) : (
                label
            )}
        </button>
    )
}