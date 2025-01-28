"use client";

import React, { useState } from "react";
import InfoPIR from "./info";
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";

const RequestForm = () => {
    const [formData, setFormData] = useState({
        project: "",
        detectedDate: new Date().toISOString().split("T")[0],
        detectedBy: "",
        detectedProcess: "",
        severity: "Low",
        public_urls: [], // Store multiple URLs
        details: "",
        inspectorName: "",
        dueDate: new Date().toISOString().split("T")[0],
    });

    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    };

    const removeFile = (index) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    const toBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    const handleUpload = async () => {
        if (files.length === 0) {
            console.log("No files selected for upload.");
            return [];
        }

        try {
            const uploadPromises = files.map(async (file) => {
                const base64File = await toBase64(file);

                const response = await fetch("/api/uploadCl", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ file: base64File }),
                });

                const result = await response.json();
                if (result.success) {
                    console.log("File uploaded successfully:", result);
                    return result.data.url; // Use the public URL from Cloudinary
                } else {
                    console.error("Failed to upload file:", result.message);
                    return null;
                }
            });

            // Wait for all files to be uploaded and return their URLs
            const urls = await Promise.all(uploadPromises);
            return urls.filter((url) => url !== null); // Remove null values
        } catch (error) {
            console.error("Error during file upload:", error);
            return [];
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Upload all files to Cloudinary and get their public URLs
            const public_urls = await handleUpload();

            if (public_urls.length === 0) {
                alert("File upload failed. Please try again.");
                return;
            }

            // Update formData with the public URLs
            const dataToSend = {
                ...formData,
                public_urls, // Include the public URLs in the form data
                detectedDate: new Date(formData.detectedDate).toISOString(),
                dueDate: new Date(formData.dueDate).toISOString(),
            };

            // Log the data being sent to MongoDB
            console.log("Data being sent to MongoDB:", dataToSend);

            // Send POST request to save data in MongoDB
            const response = await fetch("/api/pisPost", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataToSend),
            });

            const result = await response.json();

            if (result.success) {
                alert("Form submitted and data saved in MongoDB successfully!");
                handleClear(); // Clear the form after successful submission
            } else {
                alert("Failed to save data to MongoDB: " + result.message);
            }
        } catch (error) {
            console.error("Error during form submission:", error);
            alert("An error occurred while submitting the form.");
        } finally {
            setLoading(false);
        }
    };

    const handleClear = () => {
        setFormData({
            project: "",
            detectedDate: new Date().toISOString().split("T")[0],
            detectedBy: "",
            detectedProcess: "",
            severity: "Low",
            public_urls: [], // Clear the public URLs
            details: "",
            inspectorName: "",
            dueDate: new Date().toISOString().split("T")[0],
        });
        setFiles([]);
    };


    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-7xl xl:border-x-2 mx-auto bg-white dark:bg-transparent pt-2 pb-4 px-6 animate-fade-in-fast"
        >
            <div className='flex item-center justify-between'>
                <h1 className="text-[24px] text-black dark:text-white font-semibold">
                    Process Inspection Request (PIR)
                </h1>
                <InfoPIR />

            </div>

            <hr className='border mt-2' />
            <h2 className="text-lg font-semibold mt-4">Requestor Information</h2>

            <div className="grid grid-cols-2 py-4 gap-x-10 xl:gap-x-28 gap-y-3">
                <div>
                    <label className="block mb-1">
                        Project Name:
                        <select
                            name="project"
                            value={formData.project} // Controlled field
                            onChange={handleChange} // Update state on change
                            className="text-black w-full border border-gray-300 rounded px-3 py-2 mt-1"
                        >
                            <option value="" disabled>Select a project</option>
                            <option value="Main Branch (A)">Main Branch (A)</option>
                            <option value="Main Branch (A2)">Main Branch (A2)</option>
                            <option value="Sub Project B">Sub Project (B)</option>
                            <option value="Sub Project C">Sub Project (C)</option>
                        </select>
                    </label>
                </div>

                <div>
                    <label className="block mb-1">
                        Detected Date:
                        <input
                            type="date"
                            name="detectedDate"
                            value={formData.detectedDate} // Controlled field
                            onChange={handleChange} // Update state on change
                            className="text-black w-full border border-gray-300 rounded px-3 py-2 mt-1"
                        />
                    </label>
                </div>
                <div>
                    <label className="block">
                        Detected By:
                        <input
                            type="text"
                            name="detectedBy"
                            value={formData.detectedBy}
                            onChange={handleChange}
                            className="text-black w-full border border-gray-300 rounded px-3 py-2 mt-1"
                            placeholder="Enter your name..."
                        />
                    </label>
                </div>
                <div>
                    <label className="block">
                        Detected Process:
                        <select
                            name="detectedProcess"
                            value={formData.detectedProcess} // Controlled by state
                            onChange={handleChange} // Updates state on change
                            className="text-black w-full border border-gray-300 rounded px-3 py-2 mt-1"
                        >
                            <option value="" disabled>Select a process</option>
                            <option value="Main Process">Main Process</option>
                            <option value="Activity Process">Activity Process</option>
                            <option value="Sub Process A">Sub Process A</option>
                            <option value="Sub Process B">Sub Process B</option>
                            <option value="Sub Process C">Sub Process C</option>
                        </select>
                    </label>
                </div>
            </div>

            <div className='mb-4'>
                <span className="block mb-2">Severity Level:</span>
                <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="severity"
                            value="Low"
                            checked={formData.severity === 'Low'}
                            onChange={handleChange}
                            className="mr-2 w-5 h-5 "
                        />
                        Low
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="severity"
                            value="Medium"
                            checked={formData.severity === 'Medium'}
                            onChange={handleChange}
                            className="mr-2 w-5 h-5"
                        />
                        Medium
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="severity"
                            value="High"
                            checked={formData.severity === 'High'}
                            onChange={handleChange}
                            className="mr-2 w-5 h-5"
                        />
                        High
                    </label>
                </div>
            </div>

            {/* New Details Input Box Section */}
            <div className="mb-2">
                <label className="block mb-2">
                    Details to support the Request:
                    <textarea
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        className="text-black w-full mt-2 h-20 border border-gray-300 rounded px-3 py-2"
                        rows="4"
                        placeholder="Provide additional details here..."
                    />
                </label>
            </div>


            <label className="block mb-2">
                Upload evidenceFile or attachment:
            </label>

            {/* File Upload Section */}
            <div className="mb-4">
                <label
                    htmlFor="file_upload"
                    className="flex flex-col items-center justify-center w-full h-fit p-4 border-2 border-dashed border-gray-300 hover:bg-gray-100 rounded-md dark:bg-gray-100 dark:hover:bg-gray-200 dark:border-gray-500 cursor-pointer"
                >
                    <IoCloudUploadOutline className="text-4xl text-gray-400 mb-2" />
                    <p className="text-white text-xs mb-2 bg-blue-500 pt-0.5 pb-1 px-3 rounded-md">
                        Select Files
                    </p>
                    <p className="text-xs text-gray-500 mb-2">
                            Files Supported: pdf, png, jpg, jpeg, webp
                        </p>
                    <input
                        id="file_upload"
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        className="hidden"
                    />
                </label>

                {/* Display image previews */}
                {files.length > 0 && (
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                        {files.map((file, index) => (
                            <div key={index} className="relative flex rounded border border-gray-200">
                                {file.type.startsWith("image/") && (
                                    <img
                                        src={URL.createObjectURL(file)}
                                        alt={`Preview ${index}`}
                                        className="w-24 h-24 object-cover rounded-md border"
                                    />
                                )}
                                <div className="mt-2 text-sm text-gray-700 dark:text-gray-300 px-2 ">
                                    <p>File:{index+1} {file.name}</p>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                        Size: {(file.size / (1024 * 1024)).toFixed(2)} MB
                                    </p>
                                </div>
                                {/* Delete Button */}
                                <button
                                    onClick={() => removeFile(index)}
                                    className="absolute bottom-1 right-1 bg-transparent opacity-80 text-red-500 dark:text-red-500 hover:bg-red-200  dark:hover:bg-red-300 dark:border border border-red-400 dark:border-red-700  text-xs rounded-md p-1.5"
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>           
            {/* File Upload Section */}

            <hr className='border' />

            <h2 className="text-lg font-semibold mt-3 mb-4">Inspector Information (Optional)</h2>
            <div className="grid grid-cols-2 gap-x-10 xl:gap-x-28">
                <div>
                    <label className="block mb-1">
                        Inspector Name:
                        <input
                            type="text"
                            name="inspectorName"
                            value={formData.inspectorName}
                            onChange={handleChange}
                            className="text-black w-full border border-gray-300 rounded px-3 py-2 mt-1"
                            placeholder="Enter name..."
                        />
                    </label>
                </div>
                <div>
                    <label className="block mb-1">
                        Due Date:
                        <input
                            type="date"
                            name="dueDate"
                            value={formData.dueDate} // Controlled field
                            onChange={handleChange} // Update state on change
                            className="text-black w-full border border-gray-300 rounded px-3 py-2 mt-1"
                        />
                    </label>
                </div>
            </div>
            <div className="flex items-center justify-center gap-6 mt-8 mb-2">
                <button
                    type="button"
                    onClick={handleClear}
                    className="border bg-white dark:bg-slate-200 text-black shadow-md rounded-sm hover:bg-slate-100 dark:hover:bg-slate-400 px-8 py-2">
                    Clear
                </button>
                <button
                    type="submit"
                    className="border-blue-800 bg-blue-700 dark:bg-blue-700 hover:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-2 rounded shadow-md"
                >
                    Confirm
                </button>
            </div>
        </form>
    );
};

export default RequestForm;
