export const uploadImageToCloudinary = async (file) => {
    // These need to be configured in your .env file
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    if (!cloudName || !uploadPreset) {
        throw new Error("Cloudinary configuration missing in .env");
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    try {
        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
            {
                method: "POST",
                body: formData,
            }
        );

        const data = await response.json();

        if (response.ok) {
            return data.secure_url;
        } else {
            throw new Error(data.error?.message || "Cloudinary upload failed");
        }
    } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        throw error;
    }
};
