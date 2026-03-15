import { useRef, useEffect, useState } from "react";

/**
 * DrawioEmbedded Component
 *
 * Nhúng Draw.io (diagrams.net) thông qua iframe.
 *
 * @param {Object} props
 * @param {string} props.mermaidSource - Source Mermaid để load vào editor.
 * @param {(result: {xml: string, meta: object}) => void} props.onSave - Callback khi người dùng ấn Save.
 *
 * - Iframe tự động chiếm 100% width và height.
 * - Không cần styling bên trong iframe, chỉ cần styling container/div bao quanh.
 */
export default function DrawioEmbedded({mermaidSource, onSave, onExport}) {
    const iframeRef = useRef(null);
    const origin = "https://embed.diagrams.net";

    useEffect(() => {
        const handler = (e) => {
            // 1. Security check: Quan trọng để tránh XSS
            if (e.origin !== origin && e.origin !== "https://app.diagrams.net") return;

            // 2. Parse data an toàn
            let msg = e.data;
            if (typeof msg === "string") {
                try {
                    msg = JSON.parse(msg);
                } catch (err) {
                    return; // Bỏ qua các message không phải JSON
                }
            }

            if (!msg || !msg.event) return;

            // 3. Xử lý Init (Giao thức JSON gửi 'init', một số trường hợp cũ gửi 'ready')
            if (msg.event === "init") {
                iframeRef.current?.contentWindow?.postMessage(
                    JSON.stringify({ // Nên stringify để đảm bảo tương thích mọi trình duyệt
                        action: "load",
                        descriptor: {
                            format: "mermaid",
                            data: mermaidSource
                        },
                        autosave: 1,
                        saveAndExit: 1,
                        title: "AI-generated diagram"
                    }),
                    "*" // Hoặc e.origin nếu muốn strict
                );
                return;
            }

            // 4. Xử lý Save
            if (msg.event === "save") {
                // msg.xml chứa XML của sơ đồ [5]
                if (onSave) onSave({ xml: msg.xml, meta: msg });

                // Nếu `onExport` được cung cấp, ta tự động yêu cầu iframe export hình ảnh
                if (onExport) {
                    iframeRef.current?.contentWindow?.postMessage(
                        JSON.stringify({
                            action: "export",
                            format: "png",
                            spin: "Updating image..."
                        }),
                        "*"
                    );
                }

                // Nếu muốn đóng sau khi lưu (giả lập hành vi Save & Exit)
                if (msg.exit && !onExport) {
                    // Xử lý đóng modal/trang tại đây
                }
            }

            // 5. Xử lý Export (nếu cần lấy ảnh)
            if (msg.event === "export") {
                // msg.data chứa data URI (base64) của ảnh [7]
                if (onExport && msg.data) {
                    onExport(msg.data);
                }
            }
        };

        window.addEventListener("message", handler);
        return () => window.removeEventListener("message", handler);
    }, [mermaidSource, onSave, onExport]);

    return (
        <iframe
            ref={iframeRef}
            // embed=1: Bật chế độ nhúng [1]
            // proto=json: Bắt buộc để dùng JSON API [2]
            src="https://embed.diagrams.net/?embed=1&spin=1&saveAndExit=1&libraries=1&proto=json"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title="Diagram Editor"
        />
    );
}