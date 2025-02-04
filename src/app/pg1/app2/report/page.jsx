"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Container from "@/app/components/container";
import NavBar from "@/app/components/nav";
import Footer from "@/app/components/footer";
import SideMenu from "../components/sideMenu";
import ScrollUpButton from "@/app/components/scrollUp";
import ExportExcelReport from "./components/exportExcelReport";
import ReportInfoPanel from "./components/ReportInfoPanel ";


function ReportPage() {
    const { data: session } = useSession();
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch("/api/getTasks");
                if (!response.ok) {
                    throw new Error(`Failed to fetch tasks: ${response.status}`);
                }
                const data = await response.json();

                // Sort: Move "In Progress" tasks to the top
                const sortedTasks = data.sort((a, b) => {
                    if (a.status === "In Progress" && b.status !== "In Progress") return -1;
                    if (a.status !== "In Progress" && b.status === "In Progress") return 1;
                    return 0; // Keep original order for other statuses
                });

                setTasks(sortedTasks);
            } catch (err) {
                console.error("Error fetching tasks:", err);
                setError("Failed to load tasks. Please try again later.");
            } finally {
                setLoading(false);
            }
        };


        fetchTasks();
    }, []);

    return (
        <main className="bg-white dark:bg-[#222224] transition-all duration-500 flex flex-col min-h-screen">
            <Container>
                {/* Fixed Navbar */}
                <NavBar session={session} className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-[#222224] shadow-md" />

                <div className="flex">
                    <div className="bg-gray-600">
                        <SideMenu />
                    </div>

                    {/* Main Content */}
                    <div className="flex w-full flex-col p-5 overflow-x-hidden animate-fade-in-fast">
                        <div className="min-h-[92vh] flex flex-col p-8 border-2 dark:border-neutral-700 shadow-lg shadow-[#d6d6d6] dark:shadow-[#464646]">
                            <div className="mb-3">
                                <h1 className="text-2xl text-black dark:text-white font-semibold">
                                    Report Overview
                                </h1>
                            </div>

                            <div>
                                <div className="flex mt-1 mb-5 animate-fade-in-right-left">
                                    <ExportExcelReport tasks={tasks} />
                                </div>
                            </div>

                            {/* Responsive Table Wrapper */}
                            <div className="overflow-x-auto border">
                                <table className="table-auto w-full text-md border-collapse border border-gray-300 dark:border-gray-700">
                                    <thead>
                                        <tr className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-left">
                                            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 whitespace-nowrap max-w-[40px]">No.</th>
                                            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 whitespace-nowrap min-w-[110px]">Project</th>
                                            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 whitespace-nowrap min-w-[110px]">Severity Level</th>
                                            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 whitespace-nowrap min-w-[110px]">Detected By</th>
                                            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 whitespace-nowrap min-w-[110px]">Detected Process</th>
                                            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 whitespace-nowrap min-w-[110px]">Inspector</th>

                                            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 whitespace-nowrap min-w-[110px]">Create Date</th>
                                            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 whitespace-nowrap min-w-[110px]">Detected Date</th>
                                            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 whitespace-nowrap min-w-[110px]">Due Date</th>

                                            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 whitespace-nowrap min-w-[110px]">Status</th>
                                            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 whitespace-nowrap min-w-[110px]">Pending (day)</th>
                                            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 whitespace-nowrap min-w-[110px]">Finished Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {loading ? (
                                            // Show 5 Placeholder Rows While Loading
                                            [...Array(5)].map((_, index) => (
                                                <tr key={index} className="animate-pulse">
                                                    {Array(12)
                                                        .fill("")
                                                        .map((_, i) => (
                                                            <td
                                                                key={i}
                                                                className="border border-gray-300 dark:border-gray-700 px-4 py-2 min-w-[85px]"
                                                            >
                                                                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-xl"></div>
                                                            </td>
                                                        ))}
                                                </tr>
                                            ))
                                        ) : error ? (
                                            <tr>
                                                <td colSpan="12" className="text-red-600 dark:text-red-400 py-4 text-center">
                                                    {error}
                                                </td>
                                            </tr>
                                        ) : tasks.length > 0 ? (
                                            tasks.map((task, index) => {
                                                const dueDate = task.dueDate ? new Date(task.dueDate) : null;
                                                const today = new Date();
                                                let pendingDays = null;

                                                if (task.status === "Completed") {
                                                    pendingDays = "(Completed)";
                                                } else if (dueDate) {
                                                    pendingDays = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));
                                                }

                                                // Function to format date to DD-MM-YY
                                                const formatDate = (date) => {
                                                    return date
                                                        ? new Date(date).toLocaleDateString("en-GB", {
                                                            day: "2-digit",
                                                            month: "2-digit",
                                                            year: "2-digit"
                                                        })
                                                        : "N/A";
                                                };

                                                return (
                                                    <tr key={task._id} className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center min-w-[50px]">
                                                            {index + 1}
                                                        </td>
                                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 truncate min-w-[120px]">
                                                            {task.project || "N/A"}
                                                        </td>
                                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 min-w-[120px]">
                                                            <span className={`px-2 py-1 rounded-md text-xs font-semibold ${task.severity === "Low"
                                                                ? "bg-yellow-200 text-yellow-800"
                                                                : task.severity === "Medium"
                                                                    ? "bg-orange-200 text-orange-800"
                                                                    : "bg-red-200 text-red-800"
                                                                }`}>
                                                                {task.severity || "N/A"}
                                                            </span>
                                                        </td>
                                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 truncate min-w-[120px]">
                                                            {task.detectedBy || "N/A"}
                                                        </td>
                                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 truncate min-w-[120px]">
                                                            {task.detectedProcess || "N/A"}
                                                        </td>
                                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 truncate min-w-[120px]">
                                                            {task.inspectorName || "N/A"}
                                                        </td>

                                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 truncate min-w-[120px]">
                                                            {formatDate(task.createdAt)}
                                                        </td>

                                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 truncate min-w-[120px]">
                                                            {formatDate(task.detectedDate)}
                                                        </td>
                                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 truncate min-w-[120px]">
                                                            {formatDate(task.dueDate)}
                                                        </td>
                                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 min-w-[120px]">
                                                            <span className={`${task.status === "In Progress"
                                                                ? "text-blue-500"
                                                                : "text-green-500 dark:text-green-500"
                                                                } font-semibold`}>
                                                                {task.status || "N/A"}
                                                            </span>
                                                        </td>

                                                        {/* Pending Days Column - Shows "No Pending" if Completed */}
                                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 min-w-[100px] text-center">
                                                            <span className={`px-2 py-1 rounded-md font-bold    
                                                                ${pendingDays === "(Completed)" ? "text-gray-500 text-sm"
                                                                    : pendingDays >= 0 ? "text-green-600" : "text-red-600"}`}>
                                                                {pendingDays}
                                                            </span>
                                                        </td>

                                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 truncate min-w-[120px]">
                                                            {task.finishedDate ? formatDate(task.finishedDate) : "-"}
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        ) : (
                                            <tr>
                                                <td colSpan="12" className="text-gray-700 dark:text-gray-300 font-semibold text-lg py-4 text-center">
                                                    No tasks available for the report.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-6">
                                <ReportInfoPanel />
                            </div>
                        </div>

                    </div>
                    {/* Main Content */}
                </div>

                <Footer />
                <ScrollUpButton />
            </Container>
        </main>
    );
}

export default ReportPage;
