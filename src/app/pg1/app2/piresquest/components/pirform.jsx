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
            className="max-w-7xl mx-auto bg-white dark:bg-transparent pt-2 pb-4 px-6 animate-fade-in"
        >
            <div className='flex item-center justify-between'>
                <h1 className="text-3xl text-black dark:text-white font-semibold animate-fade-in-right-left">
                    Process Inspection Request (PIR)
                </h1>
                <div className="mt-2 text-xl text-black dark:text-white hover:scale-150 animate-fade-in">
                    <FaRegQuestionCircle />
                </div>
            </div>

            <hr className='border mt-2' />
            <h2 className="text-lg font-bold mt-4">Requestor</h2>

            <div className="grid grid-cols-2 py-4 gap-x-6 xl:gap-x-20 gap-y-3">
                <div>
                    <label className="block font-medium mb-1">
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
                    <label className="block font-medium mb-1">
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
                    <label className="block font-medium">
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
                    <label className="block font-medium">
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
                <span className="block font-medium mb-2">Severity Level:</span>
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
            <div className='mb-4'>
                <label className="block font-medium mb-1">
                    Evidence or Attachment:
                    <input
                        type="file"
                        name="evidence"
                        onChange={handleFileChange}
                        className="text-black dark:text-white w-full border border-gray-300 rounded px-3 py-4 mt-1"
                    />
                </label>
            </div>
            <div>
                <label className="block font-medium mb-6">
                    Details to support the evidence:
                    <textarea
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        placeholder="Write details to support the evidence..."
                        className="text-black w-full h-32 border border-gray-300 rounded px-3 py-2 mt-1"
                    />
                </label>
            </div>

            <hr className='border' />
            <h2 className="text-lg font-bold mt-3 mb-4">Inspector (Optional)</h2>
            <div className="grid grid-cols-2 gap-6 xl:gap-x-20">
                <div>
                    <label className="block font-medium mb-1">
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
                    <label className="block font-medium mb-1">
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
                    className=" border-slate-400 dark:border-slate-400 bg-slate-400 text-white shadow-md rounded-sm hover:bg-slate-500 px-8 py-2">
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
