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
                className="w-full flex items-center justify-between px-5 py-3 bg-gray-300 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-expanded={isOpen}
            >
                <span>{isOpen ? '▲' : '▼'}<span className='ml-3'>Search Options</span></span>

            </button>

            <div
                className={`transition-all duration-[0.5s] ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} flex justify-center overflow-hidden bg-white`}
            >
                <div className="p-5 flex justify-center items-center text-center bg-gray-200 border-t border-gray-300 w-[65%]">
                    <div className="mt-4 flex flex-col space-y-3 w-[65%] ">
                        <label className="block text-sm font-medium text-gray-700">
                            Search Option 1:
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                                placeholder="Enter value"
                            />
                        </label>
                        <label className="block text-sm font-medium text-gray-700">
                            Search Option 2:
                            <select
                                className="mt-1 block w-full rounded-md border-gray-600 shadow-sm "
                            >
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </label>
                        <div>
                            <button
                                className="w-fit px-4 py-2 mr-2 bg-gray-500 text-white rounded-sm hover:bg-gray-400"
                            >
                                cancel
                            </button>
                            <button
                                className="w-fit px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-500"
                            >
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
