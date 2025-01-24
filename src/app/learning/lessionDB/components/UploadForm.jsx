"use client"

import { useState } from 'react';

export default function UploadForm() {
    const [file, setFile] = useState(null);
    const [uploadResult, setUploadResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!file) {
            console.log("No file selected for upload.");
            setLoading(false);
            return;
        }

        console.log("Uploading file:", file.name);
        console.log("File type:", file.type);
        console.log("File size:", file.size);

        try {
            const base64File = await toBase64(file);
            console.log("File converted to Base64:", base64File.slice(0, 50) + "..."); // Log first 50 characters for brevity

            const response = await fetch('/api/uploadCl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ file: base64File }),
            });

            const data = await response.json();
            console.log("Server response:", data);

            setUploadResult(data);
        } catch (error) {
            console.error("Error during upload:", error);
        } finally {
            setLoading(false);
        }
    };


    const toBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    return (
        <form
            onSubmit={handleUpload}
            className="flex flex-col gap-4 items-center justify-center"
        >
            <div className="w-full flex flex-col items-center">
                <label
                    htmlFor="fileInput"
                    className="block font-medium text-gray-700 mb-2"
                >
                    Choose a file to upload
                </label>
                <div className="flex justify-center items-center w-full  cursor-pointer border border-gray-300 bg-gray-50 ">
                    <input
                        id="fileInput"
                        type="file"
                        className="w-full h-full text-gray-900 rounded-lg cursor-pointer focus:outline-none"
                        onChange={handleFileChange}
                    />
                </div>

            </div>

            <button
                type="submit"
                disabled={!file || loading}
                className={`w-full max-w-md mt-6 py-2 px-4 text-white font-semibold rounded-lg ${loading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-700 hover:bg-blue-500 focus:ring focus:ring-blue-300'
                    }`}
            >
                {loading ? 'Uploading...' : 'Upload'}
            </button>

            {uploadResult && (
                <div className="w-full text-center max-w-md mt-6 bg-green-100 border border-green-400 text-green-700 p-4 rounded-lg">
                    
                    <p className="font-semibold text-lg">Upload to database Successful!</p>

                    <img
                        src={uploadResult.data.secure_url}
                        alt="Uploaded"
                        className="my-4 w-full max-h-60 object-cover rounded-lg shadow-lg"
                    />
                    <a
                        href={uploadResult.data.secure_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline mt-2 block link"
                    >
                        Click here to view uploaded image
                    </a>
                </div>

            )}
        </form>
    );
}
