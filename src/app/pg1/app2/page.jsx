"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "@/app/components/container";
import NavBar from "@/app/components/nav";
import Footer from "@/app/components/footer";
import SideMenu from "./components/sideMenu";
import NotificationBadge from "./components/NotificationBadge ";
import ScrollUpButton from "@/app/components/scrollUp";

function PIR() {
    const { data: session } = useSession();
    const [taskCount, setTaskCount] = useState(0); // Holds count of tasks "In Progress"
    const [completeCount, setCompleteCount] = useState(0); // Holds count of "Completed" tasks

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch("/api/getTasks"); // API to fetch tasks
                if (!response.ok) {
                    throw new Error("Failed to fetch tasks");
                }
                const data = await response.json();

                // Count "In Progress" & "Completed" tasks
                const inProgressCount = data.filter(task => task.status === "In Progress").length;
                const completedCount = data.filter(task => task.status === "Completed").length;

                setTaskCount(inProgressCount);
                setCompleteCount(completedCount);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };

        fetchTasks();
    }, []); // Runs once on mount

    return (
        <main className="bg-white dark:bg-[#222224] transition-all duration-[0.5s] flex flex-col min-h-screen">
            <Container>

                <NavBar session={session} />
                <NotificationBadge />

                <main className="flex">

                    {/* Sidebar */}
                    <div className="bg-gray-600">
                        <SideMenu />
                    </div>

                    <div className="flex w-full flex-col p-5">
                        <div className="min-h-[90vh] flex flex-col p-5 border-2 dark:border-neutral-700 shadow-lg shadow-[#d6d6d6] dark:shadow-[#464646]">
                            <div className="h-full bg-white dark:bg-transparent pt-2 pb-4 px-6 animate-fade-in-fast">

                                {/* Welcome Section */}
                                <h1 className="mb-3 text-[24px] text-black dark:text-white font-semibold">
                                    Dashboard
                                </h1>
                                <p className="indent-6">
                                    The Process Inspection Request System (PIR) streamlines the creation, tracking, and management of process inspection requests. Users can submit detailed requests, monitor progress through the Task and Completed menus, and generate reports in the Report menu.
                                </p>

                                <hr className="border-gray-400 dark:border-gray-600 mt-2 mb-5" />

                                {/* Box Section */}
                                <div className="mt-8 w-full flex flex-col items-center gap-8 animate-fade-in-down-fast">

                                    <div className="flex gap-8">
                                        {/* Task Box */}
                                        <Link href="/pg1/app2/task">
                                            <div className="relative w-64 border border-gray-400 dark:border-gray-600 bg-blue-50 dark:bg-blue-900 hover:bg-blue-100 dark:hover:bg-blue-800 h-full flex flex-col items-center justify-center p-6 rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-105">
                                                <h2 className="absolute top-3 text-lg font-semibold text-blue-700 dark:text-blue-300">
                                                    Tasks
                                                </h2>
                                                <span className="text-4xl font-bold text-blue-700 dark:text-blue-300 mt-6 animate-bounce">{taskCount}</span>
                                                <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">Click to view tasks</p>
                                            </div>
                                        </Link>

                                        {/* Completed Box */}
                                        <Link href="/pg1/app2/completed">
                                            <div className="relative w-64 border border-gray-400 dark:border-gray-600 bg-green-50 dark:bg-green-900 hover:bg-green-100 dark:hover:bg-green-800 h-full flex flex-col items-center justify-center p-6 rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-105">
                                                <h2 className="absolute top-3 text-lg font-semibold text-green-700 dark:text-green-300">
                                                    Completed
                                                </h2>
                                                <span className="text-4xl font-bold text-green-700 dark:text-green-300 mt-6">{completeCount}</span>
                                                <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">Click to view completed tasks</p>
                                            </div>
                                        </Link>
                                    </div>

                                    {/* Report Box */}
                                    <Link href="/pg1/app2/report">
                                        <div className="relative w-[520px] border border-gray-400 dark:border-gray-600 bg-yellow-50 dark:bg-yellow-700 hover:bg-yellow-100 dark:hover:bg-yellow-800 h-full flex flex-col items-center justify-center p-6 rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-105">
                                            <h2 className="absolute top-3 text-lg font-semibold text-yellow-600 dark:text-yellow-300">
                                                Reports
                                            </h2>
                                            <span className="text-4xl font-bold text-yellow-700 dark:text-yellow-300 mt-6">📊</span>
                                            <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">Click to view reports</p>
                                        </div>
                                    </Link>

                                </div>

                            </div>
                        </div>
                    </div>

                </main>

                {/* Footer */}
                <Footer />
                <ScrollUpButton />
            </Container>
        </main>
    );
}

export default PIR;
