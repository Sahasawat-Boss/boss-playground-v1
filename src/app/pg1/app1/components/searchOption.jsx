import React, { useState } from 'react';

const SearchOptions = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-base-200 mx-8 mb-6 text-black rounded-sm shadow-md overflow-hidden">
            {/* Search Options Top Section */}
            <button
                onClick={toggleCollapse}
                className="w-full flex items-center justify-between p-4 bg-[#e2e2e2] hover:bg-[#cfcfcf] font-semibold focus:outline-none"
                aria-expanded={isOpen}
            >
                {/* Add Transition to Arrow */}
                <span className="flex items-center">
                    <span
                        className={`transform transition-transform duration-[0.4s] ${isOpen ? 'rotate-180' : '0'}`}
                    >▼</span><span className="ml-3 ">Search Options</span>
                </span>
            </button>

            {/* Search Option Expanded Section */}
            <div
                className={`transition-all duration-[0.38s] ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    } flex justify-center overflow-hidden bg-white`}
            >
                <div className="pb-5 flex justify-center items-center text-center bg-gray-100 w-full">
                    <div className="mt-3 flex flex-col space-y-6 w-[60%] ">
                        {/* Label and Input Section */}
                        <div className="flex justify-between">
                            <div className="flex flex-col font-medium items-start text-gray-700">
                                <label className="mb-1">Search Option 1:</label>
                                <input
                                    type="text"
                                    className="p-2 rounded-sm border border-gray-400 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                                    placeholder="Enter value"
                                />
                            </div>
                            <div className="flex flex-col font-medium items-start text-gray-700">
                                <label className="mb-1">Search Option 2:</label>
                                <input
                                    type="text"
                                    className="p-2 rounded-sm border border-gray-400 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                                    placeholder="Enter value"
                                />
                            </div>
                        </div>

                        {/* Clear and Confirm Section */}
                        <div>
                            <button className="w-fit px-6 py-2 mr-2 bg-slate-400 text-white rounded-sm hover:bg-slate-500 shadow-md">
                                Clear
                            </button>
                            <button className="w-fit px-4 py-2 bg-blue-700 text-white rounded-sm hover:bg-blue-500 shadow-md">
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchOptions;
