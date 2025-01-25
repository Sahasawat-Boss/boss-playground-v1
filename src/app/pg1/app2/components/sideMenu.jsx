import React, { useState } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdContentPasteSearch,MdAddTask,MdOutlineDashboard } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { FaChartBar } from "react-icons/fa6";

function SideMenu() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleMenu = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="relative bg-white dark:bg-black h-full shadow-lg shadow-[#b9b9b9]">
            {/* Hamburger Icon */}
            {isCollapsed && (
                <button
                    onClick={toggleMenu}
                    className="absolute top-4 left-3 z-50 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-sm p-2.5 hover:bg-gray-300 dark:hover:bg-gray-500 shadow-md transition-all duration-[0.5s]  animate-fade-in-left-right"
                >
                    <GiHamburgerMenu className="text-xl font-bold" />
                </button>
            )}

            {/* Side Menu */}
            <div
                className={`transition-all duration-[0.5s] ${isCollapsed ? 'w-0 overflow-hidden' : 'w-48'
                    } bg-gray-100 dark:bg-[#1a1a1a] h-full`}
            >
                <div
                    className={`transition-all duration-1000 ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 w-48'
                        } bg-gray-100 dark:bg-[#1a1a1a] h-full`}
                >
                    <div className="w-48 text-black dark:text-white flex flex-col gap-4 p-4 transition-all duration-1000">
                        {!isCollapsed && (
                            <div className="flex text-gray-700 dark:text-gray-200 font-bold justify-between">
                                <Link
                                    href="/pg1/app2"
                                    className="flex text-sm opacity-45 relative z-10 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-1"
                                >
                                    PIS
                                </Link>
                                {/* Inline Hamburger Icon */}
                                <button onClick={toggleMenu} className="">
                                    <GiHamburgerMenu className="text-xl opacity-50 font-bold hover:text-blue-600 dark:hover:text-blue-400" />
                                </button>
                            </div>
                        )}
                        {!isCollapsed && (
                            <div className="flex flex-col gap-4 ml-5">
                                <Link
                                    href="/pg1/app2"
                                    className="flex gap-2 hover:translate-x-1 hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    <MdOutlineDashboard className="mt-1 opacity-75" />Dashboard
                                </Link>
                                <Link
                                    href="/pg1/app2/piresquest"
                                    className="flex gap-2 hover:translate-x-1 hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    <MdContentPasteSearch className="mt-1 opacity-75" />PI Request
                                </Link>
                                <Link
                                    href="/pg1/app2/task"
                                    className="flex gap-2 hover:translate-x-1 hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    <BsListTask className="mt-1 opacity-75" />Task
                                </Link>
                                <Link
                                    href="/pg1/app2/completed"
                                    className="flex gap-2 hover:translate-x-1 hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    <MdAddTask className="mt-1 opacity-75" />Completed
                                </Link>
                                <Link
                                    href="#"
                                    className="flex gap-2 hover:translate-x-1 hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    <FaChartBar className="mt-1 opacity-75" />Report
                                </Link>
                                <Link
                                    href="#"
                                    className="flex gap-2 hover:translate-x-1 hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    <FaRegQuestionCircle className="mt-1 opacity-75" />About
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideMenu;
