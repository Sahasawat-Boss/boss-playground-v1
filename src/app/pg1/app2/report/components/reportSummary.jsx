"use client";

import { useState } from "react";
import { BsClipboard2Data } from "react-icons/bs";
import { IoClose, IoStatsChart } from "react-icons/io5";

function ReportSummary({ tasks }) {
    const [summary, setSummary] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const generateSummary = () => {
        const totalTasks = tasks.length;
        const inProgressTasks = tasks.filter(task => task.status === "In Progress").length;
        const completedTasks = tasks.filter(task => task.status === "Completed").length;

        // Count tasks by severity
        const lowSeverity = tasks.filter(task => task.severity === "Low").length;
        const mediumSeverity = tasks.filter(task => task.severity === "Medium").length;
        const highSeverity = tasks.filter(task => task.severity === "High").length;

        setSummary({
            totalTasks,
            inProgressTasks,
            completedTasks,
            lowSeverity,
            mediumSeverity,
            highSeverity,
        });

        setIsOpen(true); // Open modal
    };

    return (
        <div>
            <button
                onClick={generateSummary}
                className="flex w-fit text-sm items-center gap-2 px-2 h-full rounded-sm border border-blue-700 bg-blue-600 text-white shadow-md hover:bg-blue-500 transition-all"
            >
                <BsClipboard2Data className="text-xl" />
                Report Summary
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-65 z-50">
                    <div className=" relative bg-white dark:bg-gray-700 py-8 px-12 rounded-lg shadow-lg max-w-md w-full">
                        {/* Close Button */}
                        <button 
                            onClick={() => setIsOpen(false)} 
                            className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                        >
                            <IoClose className="text-2xl" />
                        </button>

                        <h2 className="mb-7 text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                            <IoStatsChart className="text-blue-600" />
                            Report Summary
                        </h2>

                        {summary && (
                            <div className="space-y-3.5">
                                <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 shadow">
                                    <p className="text-[1.15rem] font-bold text-gray-800 dark:text-gray-200">Total Tasks</p>
                                    <p className="text-xl font-semibold ">{summary.totalTasks}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 shadow">
                                        <p className="text-sm font-bold text-gray-800 dark:text-gray-200">In Progress</p>
                                        <p className="text-[1.28rem] font-semibold text-blue-600">{summary.inProgressTasks}</p>
                                    </div>

                                    <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 shadow">
                                        <p className="text-sm font-bold text-gray-800 dark:text-gray-200">Completed</p>
                                        <p className="text-[1.28rem] font-semibold text-green-600">{summary.completedTasks}</p>
                                    </div>
                                </div>

                                <p className="text-[1.05rem] font-semibold mt-4">Severity Levels</p>

                                <div className="grid grid-cols-3 gap-3">
                                    <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 shadow">
                                        <p className="text-sm font-bold text-gray-800 dark:text-gray-200">Low</p>
                                        <p className="text-[1.28rem] font-semibold text-green-600">{summary.lowSeverity}</p>
                                    </div>

                                    <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 shadow">
                                        <p className="text-sm font-bold text-gray-800 dark:text-gray-200">Medium</p>
                                        <p className="text-[1.28rem] font-semibold text-orange-600">{summary.mediumSeverity}</p>
                                    </div>

                                    <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 shadow">
                                        <p className="text-sm font-bold text-gray-800 dark:text-gray-200">High</p>
                                        <p className="text-[1.28rem] font-semibold text-red-600">{summary.highSeverity}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Close Button */}
                        <div className="mt-6 flex justify-center">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="mt-2 px-3 py-1.5 bg-white border border-gray-400 dark:text-white dark:bg-gray-600 ounded-sm hover:bg-gray-200 dark:hover:bg-gray-400 transition"
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

export default ReportSummary;
