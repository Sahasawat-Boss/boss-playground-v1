import React, { useState } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5"; // Icons for toggle

const ReportInfoPanel = () => {
    const [isOpen, setIsOpen] = useState(true);

    const togglePanel = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-white dark:bg-[#1e1e1e] text-gray-600 dark:text-gray-300 rounded-sm shadow-md dark:shadow-none overflow-hidden animate-fade-in-right-left-fast">
            {/* Header Section with Toggle Button */}
            <button
                onClick={togglePanel}
                className="w-full flex items-center justify-between py-3 px-4 bg-slate-50 dark:bg-[#2b2b2b] border border-gray-200 dark:border-gray-700 hover:bg-slate-100 dark:hover:bg-[#3a3a3a] focus:outline-none transition"
                aria-expanded={isOpen}
            >
                <span className="flex items-center text-sm font-semibold ">
                    📊 Report Information
                </span>
                {/* Toggle Icon */}
                {isOpen ? (
                    <IoChevronUpOutline className="text-xl text-gray-500 dark:text-gray-300 transition-transform" />
                ) : (
                    <IoChevronDownOutline className="text-xl text-gray-500 dark:text-gray-300 transition-transform" />
                )}
            </button>

            {/* Collapsible Content */}
            <div
                className={`transition-all duration-[0.4s] ease-in-out ${isOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0 overflow-hidden"
                    }`}
            >
                <div className="flex justify-center item-center ">
                    <div className="px-6 text-sm w-full max-w-4xl">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                            Overview of PI Task Report
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            This page displays a report table summarizing the overall status of PI Tasks and their completion within the system. The report provides insights into task progress and pending deadlines.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">
                            Calculation: Pending (Day)
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            The **Pending (Day)** column calculates the remaining days before a task is due. It is computed as:
                        </p>

                        <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 p-3 rounded-md mt-3 text-sm">
                            **Pending (Day) = Due Date - Current Date**
                        </div>

                        <p className="text-gray-700 dark:text-gray-300 mt-3">
                            If the **Pending (Day)** value is negative, it indicates that the task is **overdue**.
                        </p>

                        <p className="text-green-700 dark:text-green-700 mt-3 font-medium">
                            ✅ If the task is **completed**, the "Pending (Day)" column will display **"(Completed)"** instead of a number.
                        </p>


                        {/* Additional Notes */}
                        <div className="mt-4 p-3 border-l-4 border-blue-500 bg-blue-50 dark:bg-[#2b2b2b] text-gray-700 dark:text-gray-300">
                            ⚠️ Ensure that due dates are correctly updated in the system to maintain accurate calculations.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ReportInfoPanel;
