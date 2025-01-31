import React, { useState } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";

function InfoComp() {
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
                className="mt-2 text-xl text-black dark:text-white hover:text-yellow-500 dark:hover:text-yellow-400 hover:scale-150 drop-shadow-lg animate-fade-in-right-left cursor-pointer"
                onClick={handleToggleModal}
            >
                <FaRegQuestionCircle />
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
                    <div className="bg-white rounded-lg shadow-lg py-6 px-10 w-[600px]">
                        <h2 className="text-xl font-bold mb-4 text-black">
                            Completed Menu
                        </h2>
                        <div className="text-sm text-gray-700 leading-relaxed">
                            <p>
                                This menu serves as a dedicated section for tracking and reviewing process inspections that have been completed. This area is essential for ensuring that all inspections, evaluations, and assessments have been properly documented and can be referenced for future audits, process improvements, and compliance tracking.
                            </p>
                        </div>

                        {/* Button Section */}
                        <div className="flex justify-between mt-6">
                            <div className="flex items-center">
                                <div
                                    onClick={handleLove}
                                    className="h-fit pl-4 pr-2 py-2 text-lg bg-green-500 text-white rounded-sm hover:bg-green-400 hover:cursor-pointer"
                                >
                                    Love this Info 💖
                                </div>
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

export default InfoComp;
