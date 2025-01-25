"use client"

import React, { useState } from 'react';
import InfoPIR from './info';
import { IoCloudUploadOutline } from "react-icons/io5";

const RequestForm = () => {
    const [formData, setFormData] = useState({
        project: '',
        detectedDate: new Date().toISOString().split('T')[0], // Default to current date
        detectedBy: '',
        detectedProcess: '', // Default to a valid option
        severity: 'Low',
        evidenceFile: '',
        previewUrl: '', // For displaying the image preview
        details: '',
        inspectorName: '',
        dueDate: new Date().toISOString().split('T')[0], // Default to current date
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, evidenceFile: e.target.files[0] || '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Data:', formData); // Debugging to ensure dropdown value is included
    };

    const handleClear = () => {
        setFormData({
            project: '',
            detectedDate: new Date().toISOString().split('T')[0], // Default to current date
            detectedBy: '',
            detectedProcess: '',
            severity: 'Low',
            evidenceFile: '',
            previewUrl: '',
            details: '',
            inspectorName: '',
            dueDate: new Date().toISOString().split('T')[0], // Default to current date
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-7xl xl:border-x-2 mx-auto bg-white dark:bg-transparent pt-2 pb-4 px-6 animate-fade-in-fast"
        >
            <div className='flex item-center justify-between'>
                <h1 className="text-3xl text-black dark:text-white font-semibold">
                    Process Inspection Request (PIR)
                </h1>
                <InfoPIR />

            </div>

            <hr className='border mt-2' />
            <h2 className="text-lg font-bold mt-4">Requestor</h2>

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

            {/* Upload Section*/}
            <div className="mb-4">
                <label
                    htmlFor="multiple_files" // Link the div to the file input
                    className="flex flex-col items-center justify-center w-full h-fit border-2 border-dashed border-gray-300 hover:bg-gray-100 rounded-md dark:hover:bg-opacity-10 dark:border-gray-500 cursor-pointer"
                >
                    {!formData.evidenceFile ? (
                        <>
                            <IoCloudUploadOutline className="text-5xl text-gray-400 mt-4 mb-1" />

                            <p className="text-gray-500 mb-2">Select Files</p>
                            <p className="text-xs text-gray-500">
                                Files Supported: pdf, png, jpg, jpeg, webp
                            </p>
                            <div className="text-sm px-6 py-1 my-4 bg-blue-700 text-white rounded-md hover:bg-blue-400 focus:outline-none opacity-70">
                                Choose Files
                            </div>
                            <input
                                id="multiple_files"
                                type="file"
                                name="evidenceFile"
                                onChange={(e) => {
                                    handleFileChange(e);
                                    if (e.target.files && e.target.files.length > 0) {
                                        setFormData({ ...formData, evidenceFile: Array.from(e.target.files) });
                                    }
                                }}
                                multiple
                                className="hidden"
                            />
                        </>
                    ) : (
                        <ul className="w-full h-full overflow-y-auto py-2 px-6 mt-2">
                            {Array.from(formData.evidenceFile).map((file, index) => (
                                <li key={index} className="flex items-center justify-left mb-3 bg-white border">
                                    {file.type.startsWith("image/") && (
                                        <img
                                            src={URL.createObjectURL(file)}
                                            alt={`Preview ${index + 1}`}
                                            className="w-20 h-20 object-cover rounded-md border"
                                        />
                                    )}
                                    <div className="ml-4">
                                        <p className="text-sm text-black">
                                            File {index + 1}: {file.name}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            Size: {(file.size / (1024 * 1024)).toFixed(2)} MB
                                        </p>
                                    </div>
                                </li>
                            ))}
                            <button
                                onClick={() => setFormData({ ...formData, evidenceFile: '' })}
                                className="w-fit mb-2 px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-400"
                            >
                                Remove All
                            </button>
                        </ul>
                    )}
                </label>
            </div>
            {/* Upload Section*/}

            <hr className='border' />

            <h2 className="text-lg font-bold mt-3 mb-4">Inspector (Optional)</h2>
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
