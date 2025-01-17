import React, { useState } from 'react';

const SearchOptions = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-base-200 text-black rounded-sm shadow-md overflow-hidden">
            <button
                onClick={toggleCollapse}
                className="w-full flex items-center justify-between px-5 py-3 bg-gray-300 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-expanded={isOpen}
            >
                <span>{isOpen ? '▲' : '▼'}<span className='ml-3'>Search Options</span></span>
                
            </button>

            <div
                className={`transition-all duration-[0.65s] ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
            >
                <div className="p-5 bg-white border-t border-gray-300">
                    <div className="text-center">This is a better test content area!</div>
                    <div className="mt-4 flex flex-col space-y-3">
                        <label className="block text-sm font-medium text-gray-700">
                            Search Option 1:
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                                placeholder="Enter value"
                            />
                        </label>
                        <label className="block text-sm font-medium text-gray-700">
                            Search Option 2:
                            <select
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                            >
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </label>
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Apply Filters
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchOptions;
