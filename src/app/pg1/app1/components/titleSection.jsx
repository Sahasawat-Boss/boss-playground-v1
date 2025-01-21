import React, { useState } from "react";
import { MdAppRegistration } from "react-icons/md";

function TitleSection() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center pb-6 animate-fade-in-up">
                <h1 className="flex text-3xl items-center text-center text-black dark:text-white py-3 font-semibold ">
                    <span className="mr-1 mt-1 text-3xl animate-bounce">
                        <MdAppRegistration />
                    </span>
                    CRUD v.2 Application
                </h1>
            </div>

            <div id="accordion-open" data-accordion="open" className="w-[57%] mb-10 animate-fade-in-up" >
                <h2 id="accordion-open-heading-1">
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex w-full items-center justify-between gap-3 rounded-md border border-gray-400 py-3 px-5 font-medium text-gray-500 hover:bg-gray-100 focus:ring-1 focus:ring-gray-200 rtl:text-right dark:border-gray-700 dark:text-gray-400 dark:hover:bg-[#202020] dark:focus:ring-gray-800"
                        aria-expanded={isOpen}
                        aria-controls="accordion-open-body-1"
                    >
                        <span className="flex items-center">
                            <svg
                                className="me-2 h-5 w-5 shrink-0"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            What is CRUD v.2 Application
                        </span>
                        <svg
                            data-accordion-icon
                            className={`h-3 w-3 shrink-0 ${isOpen ? "" : "rotate-180"
                                } transition-transform duration-300`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5 5 1 1 5"
                            />
                        </svg>
                    </button>
                </h2>
                {isOpen && (
                    <div
                        id="accordion-open-body-1"
                        className=" border rounded-b-md border-gray-400 p-5 dark:border-gray-700 dark:bg-black"
                    >
                        <p className="mb-3 text-black dark:text-gray-300">
                            <span className="underline font-semibold mr-2">CRUD V.2</span> is a powerful tool for managing data in a MongoDB database. It supports GET, POST, DELETE, and filter operations on a CRUD collection, allowing efficient data retrieval, creation, and deletion.
                        </p>
                        <p className=" text-black dark:text-gray-300">
                            The interface is user-friendly and includes export options for generating PDF reports or Excel files with a single click. These features make CRUD V.2 ideal for seamless data management, reporting, and analysis.
                        </p>
                    </div>
                )}
            </div>

        </div>
    )
}

export default TitleSection