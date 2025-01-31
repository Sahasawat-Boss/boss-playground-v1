import React, { useState } from "react";

const SearchOptionTask = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    const handleClear = () => {
        setName("");
        setStatus("");
    };

    return (
        <div className="bg-white dark:bg-[#1e1e1e] text-gray-600 dark:text-gray-300 rounded-sm shadow-md dark:shadow-none overflow-hidden">
            {/* Search Options Top Section */}
            <button
                onClick={toggleCollapse}
                className="w-full flex items-center justify-between py-3 px-4 bg-slate-50 dark:bg-[#2b2b2b] hover:bg-slate-100 dark:hover:bg-[#3a3a3a] focus:outline-none border border-gray-200 dark:border-gray-700"
                aria-expanded={isOpen}
            >
                {/* Add Transition to Arrow */}
                <span className="flex items-center text-sm">
                    <span
                        className={`transform text-sm transition-transform duration-[0.4s] ${isOpen ? "rotate-180" : "0"
                            }`}
                    >
                        ▼
                    </span>
                    <span className="ml-2">Search Options</span>
                </span>
            </button>

            {/* Search Option Expanded Section */}
            <div
                className={`transition-all duration-[0.38s] ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                    } flex justify-center overflow-hidden bg-white dark:bg-[#1e1e1e]`}
            >
                <div className="pb-8 flex justify-center items-center text-center text-sm w-full">
                    <div className="mt-1.5 flex flex-col space-y-4 w-full">
                        {/* Label and Input Section */}
                        <div className="grid grid-cols-2 gap-8 xl:gap-28 px-20">
                            {/* Name Input */}
                            <div className="flex flex-col">
                                <label
                                    htmlFor="name"
                                    className="mb-1 text-left text-gray-700 dark:text-gray-300"
                                >
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="py-1.5 px-4 border border-gray-300 dark:border-gray-600 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-[#2b2b2b] dark:focus:ring-blue-500 transition"
                                    placeholder="Enter name"
                                />
                            </div>

                            {/* Status Dropdown */}
                            <div className="flex flex-col">
                                <label
                                    htmlFor="status"
                                    className="mb-1 text-left text-gray-700 dark:text-gray-300"
                                >
                                    Status
                                </label>
                                <select
                                    id="status"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    className={`py-1.5 px-4 border border-gray-300 dark:border-gray-600 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-[#2b2b2b] dark:focus:ring-blue-500 transition ${status === "" ? "text-gray-400 dark:text-gray-400" : "text-black dark:text-white"
                                        }`}
                                >
                                    <option value="" disabled hidden>
                                        Select status
                                    </option>
                                    <option value="Active" className="text-black dark:text-white">
                                        Active
                                    </option>
                                    <option value="Inactive" className="text-black dark:text-white">
                                        Inactive
                                    </option>
                                </select>
                            </div>
                        </div>

                        {/* Clear and Confirm Section */}
                        <div>
                            <button
                                onClick={handleClear}
                                className="w-fit px-5 py-1.5 mr-6 border dark:border-gray-600 bg-white dark:bg-[#2b2b2b] text-black dark:text-white rounded-sm hover:bg-slate-100 dark:hover:bg-gray-700 shadow-md"
                            >
                                Clear
                            </button>
                            <button className="w-fit px-4 py-1.5 bg-blue-700 text-white rounded-sm hover:bg-blue-500 shadow-md">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchOptionTask;
