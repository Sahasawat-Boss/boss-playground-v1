"use client"

import React, { useState } from 'react';
import { FaRegQuestionCircle } from "react-icons/fa";

const RequestForm = () => {
    const [formData, setFormData] = useState({
        project: '',
        detectedDate: '2025-01-24',
        detectedBy: '',
        detectedProcess: '',
        severity: 'Low',
        evidence: '',
        details: '',
        inspectorName: '',
        dueDate: '2025-01-24',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, evidence: e.target.files[0] || '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleClear = () => {
        setFormData({
            project: '',
            detectedDate: '2025-01-24',
            detectedBy: '',
            detectedProcess: '',
            severity: 'Low',
            evidence: '',
            details: '',
            inspectorName: '',
            dueDate: '2025-01-24',
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-7xl xl:border-x-2 mx-auto bg-white dark:bg-transparent pt-2 pb-4 px-6 animate-fade-in"
        >
            <div className='flex item-center justify-between'>
                <h1 className="text-3xl text-black dark:text-white font-semibold animate-fade-in-right-left">
                    Process Inspection Request (PIR)
                </h1>
                <div className="mt-2 text-xl text-black dark:text-white hover:text-yellow-500 dark:hover:text-yellow-400 hover:scale-150 drop-shadow-lg animate-fade-in">
                    <FaRegQuestionCircle />
                </div>
            </div>

            <hr className='border mt-2' />
            <h2 className="text-lg font-bold mt-4">Requestor</h2>

            <div className="grid grid-cols-2 py-4 gap-x-10 xl:gap-x-28 gap-y-3">
                <div>
                    <label className="block mb-1">
                        Project:
                        <select
                            type="text"
                            name="project"
                            value={formData.project}
                            onChange={handleChange}
                            className="text-black w-full border border-gray-300 rounded px-3 py-2 mt-1"
                        >
                            <option value="Project A">Project A</option>
                            <option value="Project B">Project B</option>
                            <option value="Project C">Project C</option>
                            <option value="Project D">Project D</option>
                        </select>

                    </label>
                </div>
                <div>
                    <label className="block mb-1">
                        Detected Date:
                        <input
                            type="date"
                            name="detectedDate"
                            value={formData.detectedDate}
                            onChange={handleChange}
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
                            value={formData.detectedProcess}
                            onChange={handleChange}
                            className="text-black w-full border border-gray-300 rounded px-3 py-2 mt-1"
                        >
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

            <label className="block mb-2">
                Upload evidence or attachment:
            </label>

            <div className="mb-4">
                <div className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    {!formData.evidence ? (
                        <>
                            <p className=" text-gray-500 dark:text-gray-400 mb-2">Select Files Here</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">Files Supported: PDF, PNG, JPG, JPEG</p>
                            <label
                                htmlFor="multiple_files"
                                className="text-sm px-6 py-1.5 bg-blue-700 text-white rounded-md cursor-pointer hover:bg-blue-400 focus:outline-none"
                            >
                                Choose Files
                            </label>
                            <input
                                id="multiple_files"
                                type="file"
                                name="evidence"
                                onChange={(e) => {
                                    handleFileChange(e);
                                    if (e.target.files && e.target.files.length > 0) {
                                        setFormData({ ...formData, evidence: Array.from(e.target.files) });
                                    }
                                }}
                                multiple
                                className="hidden"
                            />
                        </>
                    ) : (
                        <ul className="flex flex-col items-center text-sm text-gray-500 dark:text-gray-400">
                            {Array.from(formData.evidence).map((file, index) => (
                                <li key={index} className="w-full items-start mb-1 text-sm text-black">
                                    File {index + 1}: ({file.name}) 
                                    <span className='text-xs text-gray-500'> | size: {(file.size / (1024 * 1024)).toFixed(2)} MB</span>
                                </li>
                            ))}
                            <button
                                onClick={() => setFormData({ ...formData, evidence: '' })}
                                className=" w-fit px-4 py-1.5 bg-red-500 text-white rounded hover:bg-red-400"
                            >
                                Remove All
                            </button>
                        </ul>

                    )}
                </div>
            </div>




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
                            value={formData.dueDate}
                            onChange={handleChange}
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
