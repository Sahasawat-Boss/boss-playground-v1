import React, { useState } from 'react';

const SearchOptions = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    const handleClear = () => {
        setName('');
        setStatus('');
    };

    return (
        <div className="bg-gray-200 mx-8 mb-6 text-gray-600 rounded-md shadow-md overflow-hidden">
            {/* Search Options Top Section */}
            <button
                onClick={toggleCollapse}
                className="w-full flex items-center justify-between py-3 px-4 bg-[#e6e6e6] hover:bg-[#dbdbdb] font-semibold focus:outline-none border border-gray-300"
                aria-expanded={isOpen}
            >
                {/* Add Transition to Arrow */}
                <span className="flex items-center">
                    <span
                        className={`transform text-sm transition-transform duration-[0.4s] ${isOpen ? 'rotate-180' : '0'}`}
                    >
                        ▼
                    </span>
                    <span className="ml-2 ">Search Options</span>
                </span>
            </button>

            {/* Search Option Expanded Section */}
            <div
                className={`transition-all duration-[0.38s] ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    } flex justify-center overflow-hidden bg-white`}
            >
                <div className="pb-5 flex justify-center items-center text-center bg-gray-100 w-full">
                    <div className="mt-3 flex flex-col space-y-8 w-full ">
                        {/* Label and Input Section */}
                        <div className="grid grid-cols-2 gap-16 px-20">
                            {/* Name Input */}
                            <div className="flex flex-col">
                                <label htmlFor="name" className="mb-1 text-left font-semibold text-gray-700">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="py-2 px-4 border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                                    placeholder="Enter name"
                                />
                            </div>

                            {/* Status Dropdown */}
                            <div className="flex flex-col">
                                <label htmlFor="status" className="mb-1 text-left font-semibold text-gray-700">
                                    Status
                                </label>
                                <select
                                    id="status"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    className={`py-2 px-4 border bg-white border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition
                                        ${status === '' ? 'text-gray-400' : 'text-black'
                                        }`}
                                >
                                    <option value="" disabled hidden>
                                        Select status
                                    </option>
                                    <option value="Active" className='text-black'>Active</option>
                                    <option value="Inactive" className='text-black'> Inactive</option>
                                </select>
                            </div>
                        </div>

                        {/* Clear and Confirm Section */}
                        <div>
                            <button
                                onClick={handleClear}
                                className="w-fit px-6 py-2 mr-2 bg-slate-400 text-white rounded-sm hover:bg-slate-500 shadow-md"
                            >
                                Clear
                            </button>
                            <button className="w-fit px-4 py-2 bg-blue-700 text-white rounded-sm hover:bg-blue-500 shadow-md">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchOptions;
