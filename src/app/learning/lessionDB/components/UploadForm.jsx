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

        if (!file) return;

        const base64File = await toBase64(file);

        const response = await fetch('/api/uploadCl', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ file: base64File }),
        });

        const data = await response.json();
        setUploadResult(data);
        setLoading(false);
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
            <div className="w-full">
                <label
                    htmlFor="fileInput"
                    className="block text-sm font-medium text-gray-700 mb-4"
                >
                    Choose a file to upload
                </label>
                <input
                    id="fileInput"
                    type="file"
                    className="block mb-4 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                    onChange={handleFileChange}
                />
            </div>

            <button
                type="submit"
                disabled={!file || loading}
                className={`w-full py-2 px-4 text-white font-semibold rounded-lg ${loading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-700 hover:bg-blue-500 focus:ring focus:ring-blue-300'
                    }`}
            >
                {loading ? 'Uploading...' : 'Upload'}
            </button>

            {uploadResult && (
                <div className="w-full mt-6 bg-green-100 border border-green-400 text-green-700 p-4 rounded-lg">
                    <p className="font-semibold">Upload Successful!</p>
                    <a
                        href={uploadResult.data.secure_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline mt-2 block"
                    >
                        View Uploaded Image
                    </a>
                    <img
                        src={uploadResult.data.secure_url}
                        alt="Uploaded"
                        className="mt-4 w-full max-h-60 object-cover rounded-lg shadow-lg"
                    />
                </div>
            )}
        </form>
    );
}
