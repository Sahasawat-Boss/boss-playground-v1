import React, { useState } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";

function InfoPIR() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [love, setLove] = useState(0); // State to track the number of likes

    const handleToggleModal = () => {
        setIsModalOpen(!isModalOpen); // Toggle the modal visibility
    };

    const handleLove = () => {
        setLove(love + 1); // Increment the like count
    };

    return (
        <div>
            {/* Icon with click event */}
            <div
                className="mt-2 text-xl text-black dark:text-white hover:text-yellow-500 dark:hover:text-yellow-400 hover:scale-150 drop-shadow-lg animate-fade-in cursor-pointer"
                onClick={handleToggleModal}
            >
                <FaRegQuestionCircle />
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-[550px]">
                        <h2 className="text-xl font-bold mb-4 text-black">
                            Process Inspection Request Information
                        </h2>
                        <div className="text-sm text-gray-700 leading-relaxed">
                            <p>
                                The <strong>Process Inspection Request (PIR)</strong> form is designed to gather detailed and structured information about a process inspection. It helps ensure that all relevant data is provided for an effective review. The form includes the following sections:
                            </p>
                            <ul className="list-disc pl-5 mt-2">
                                <li>
                                    <strong>Basic Information:</strong> Collects essential details such as the project name, detected date, detected process, and the person who identified the issue.
                                </li>
                                <li>
                                    <strong>Severity Assessment:</strong> Allows you to indicate the severity level of the issue using radio buttons (Low, Medium, or High).
                                </li>
                                <li>
                                    <strong>Supporting Evidence:</strong> Provides space for additional details in a textarea and supports file uploads for attachments such as images or documents.
                                </li>
                                <li>
                                    <strong>Inspector Details (Optional):</strong> Lets you specify the inspector's name and set a due date for the inspection process.
                                </li>
                            </ul>
                            <p className="mt-4">
                                At the bottom, you’ll find two action buttons:
                            </p>
                            <ul className="list-disc pl-5 mt-2">
                                <li>
                                    <strong>Clear:</strong> Resets all fields in the form to their default state.
                                </li>
                                <li>
                                    <strong>Confirm:</strong> Submits the form with the provided information.
                                </li>
                            </ul>
                        </div>

                        {/* Button Section */}
                        <div className="flex justify-between mt-6 my-2">
                            <div className="flex items-center">
                                <button
                                    onClick={handleLove}
                                    className="h-fit pl-4 pr-2 py-2 text-lg bg-green-500 text-white rounded-sm hover:bg-green-400"
                                >
                                    Love this Info 💖
                                </button>
                                <p className="text-gray-700 text-sm ml-3">
                                    {love} {love >= 2 ? "loves" : "love"}
                                </p>
                            </div>

                            <button
                                onClick={handleToggleModal}
                                className="px-4 py-2 h-fit bg-blue-600 text-white rounded-sm hover:bg-blue-400"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default InfoPIR;
