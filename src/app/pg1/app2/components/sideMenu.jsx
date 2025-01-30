import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdContentPasteSearch, MdAddTask, MdOutlineDashboard } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { FaChartBar } from "react-icons/fa6";

function SideMenu() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [taskCount, setTaskCount] = useState(0); // State to hold task count
    const [completeCount, setCompleteCount] = useState(0); // Count "Completed" tasks
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsCollapsed(!isCollapsed);
    };

    const isActiveLink = (path) => pathname === path ? 'text-blue-700 dark:text-blue-200 bg-[#dce7fc] dark:bg-blue-900' : '';

    // Fetch task count (Only "In Progress" & "Completed" tasks)
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch('/api/getTasks');
                if (!response.ok) {
                    throw new Error('Failed to fetch tasks');
                }
                const data = await response.json();

                // Count tasks based on their status
                const inProgressCount = data.filter(task => task.status === "In Progress").length;
                const completedCount = data.filter(task => task.status === "Completed").length;

                setTaskCount(inProgressCount);
                setCompleteCount(completedCount);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks();
    }, []); // Run only once when the component mounts

    return (
        <div className="relative bg-slate-400 dark:bg-black h-full shadow-lg shadow-[#b9b9b9]">
            {/* Hamburger Icon */}
            {isCollapsed && (
                <button
                    onClick={toggleMenu}
                    className="absolute top-4 left-3 z-50 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-sm p-2.5 hover:bg-gray-300 dark:hover:bg-gray-500 shadow-md transition-all duration-[0.25s] animate-fade-in-left-right"
                >
                    <GiHamburgerMenu className="text-xl font-bold" />
                </button>
            )}

            {/* Side Menu */}
            <div
                className={`transition-all duration-${isCollapsed ? '[1s]' : '[0.8s]'} ease-in-out ${isCollapsed ? 'w-0 overflow-hidden' : 'w-[165px]'}
                    } bg-gray-100 dark:bg-[#1a1a1a] h-full`}
            >
                <div
                    className={`transition-all duration-${isCollapsed ? '[1s]' : '[0.8s]'} ease-in-out ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 w-[165px]'}
                        } bg-gray-100 dark:bg-[#1a1a1a] h-full`}
                >
                    <div className="w-48 text-black dark:text-white flex flex-col gap-4 py-4 pr-4  transition-all duration-500">
                        {!isCollapsed && (
                            <div className="flex text-gray-700 dark:text-gray-200 font-bold justify-between">
                                <Link
                                    href="/pg1/app2"
                                    className="ml-2 flex text-sm opacity-45 relative z-10 hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    PIS
                                </Link>
                                {/* Inline Hamburger Icon */}
                                <button onClick={toggleMenu}>
                                    <GiHamburgerMenu className="mr-2 text-xl opacity-50 font-bold hover:text-blue-600 dark:hover:text-blue-400" />
                                </button>
                            </div>
                        )}
                        {!isCollapsed && (
                            <div className="flex flex-col gap-1">
                                <Link
                                    href="/pg1/app2"
                                    className={`flex gap-2 pl-4 py-1.5 hover:text-blue-600 dark:hover:text-blue-400 ${isActiveLink('/pg1/app2')}`}
                                >
                                    <MdOutlineDashboard className="mt-1 opacity-75" />Dashboard
                                </Link>
                                <Link
                                    href="/pg1/app2/piresquest"
                                    className={`flex gap-2 pl-4 py-1.5  hover:text-blue-600 dark:hover:text-blue-400 ${isActiveLink('/pg1/app2/piresquest')}`}
                                >
                                    <MdContentPasteSearch className="mt-1 opacity-75" />PI Request
                                </Link>
                                <Link
                                    href="/pg1/app2/task"
                                    className={`relative flex gap-2 pl-4 py-1.5  hover:text-blue-600 dark:hover:text-blue-400 ${isActiveLink('/pg1/app2/task')}`}
                                >
                                    <BsListTask className="mt-1 opacity-75" />
                                    Task
                                    <span className="absolute right-2.5 px-2 pb-0.5 font-semibold text-[0.9rem] rounded-full  bg-[#5080d8] text-white dark:bg-blue-500 shadow-md">
                                        {taskCount}
                                    </span>
                                </Link>

                                <Link
                                    href="/pg1/app2/completed"
                                    className={`relative flex gap-2 pl-4 py-1.5 hover:text-blue-600 dark:hover:text-blue-400 ${isActiveLink('/pg1/app2/completed')}`}
                                >
                                    <MdAddTask className="mt-1 opacity-75" />
                                    Completed
                                    <span className="absolute right-2.5 px-2 font-bold text-[0.9rem] text-green-600">
                                        {completeCount}
                                    </span>
                                </Link>
                                <Link
                                    href="/pg1/app2/Report"
                                    className={`flex gap-2 pl-4 py-1.5  hover:text-blue-600 dark:hover:text-blue-400 ${isActiveLink('/pg1/app2/Report')}`}
                                >
                                    <FaChartBar className="mt-1 opacity-75" />Report
                                </Link>
                                <Link
                                    href="/pg1/app2/About"
                                    className={`flex gap-2 pl-4 py-1.5  hover:text-blue-600 dark:hover:text-blue-400 ${isActiveLink('/pg1/app2/About')}`}
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
