import React, { useState } from 'react';
import DrawioEmbedded from './DrawioEmbedde';

export default function DrawioModal({ mermaidSource, onClose, onUploadSuccess }) {
    const [isSaving, setIsSaving] = useState(false);

    const handleSave = async (dataUri) => {
        setIsSaving(true);
        try {
            // Convert dataURI to File object
            const base64Data = dataUri.split(',')[1];
            const mimeType = dataUri.match(/:(.*?);/)[1];
            const binaryPattern = atob(base64Data);
            const len = binaryPattern.length;
            const bytes = new Uint8Array(len);
            for (let i = 0; i < len; i++) {
                bytes[i] = binaryPattern.charCodeAt(i);
            }
            const blob = new Blob([bytes], { type: mimeType });
            const file = new File([blob], "ai-diagram.png", { type: mimeType });

            // Trigger success callback giving the File object back to the parent to handle upload (or upload directly here)
            // But structurally, since cloudinary utility is in `utils`, we could also do it here directly:
            const { uploadImageToCloudinary } = await import('../../utils/cloudinary');
            const url = await uploadImageToCloudinary(file);
            
            onUploadSuccess(url);
            onClose();
        } catch (error) {
            console.error("Failed to upload exported image:", error);
            alert("Failed to upload the diagram image. Please try again.");
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
            <div className="w-full h-full max-w-7xl max-h-[90vh] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden relative border border-slate-200">
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 bg-slate-50 shrink-0">
                    <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">polyline</span>
                        A.I Diagram Editor
                    </h2>
                    <button
                        onClick={onClose}
                        disabled={isSaving}
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-200 text-slate-500 transition-colors disabled:opacity-50"
                    >
                        <span className="material-symbols-outlined text-[20px]">close</span>
                    </button>
                </div>

                {/* Editor Content */}
                <div className="flex-1 bg-slate-100 relative">
                    {isSaving ? (
                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
                            <span className="material-symbols-outlined animate-spin text-4xl text-primary mb-3">progress_activity</span>
                            <p className="font-semibold text-slate-700">Saving and uploading diagram...</p>
                        </div>
                    ) : null}
                    
                    <DrawioEmbedded 
                        mermaidSource={mermaidSource} 
                        // Instead of capturing XML, we capture the dataURI via onExport definition
                        onExport={(dataUri) => handleSave(dataUri)}
                    />
                </div>
            </div>
        </div>
    );
}
