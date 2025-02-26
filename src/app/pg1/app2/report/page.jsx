"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Container from "@/app/components/container";
import NavBar from "@/app/components/nav";
import Footer from "@/app/components/footer";
import SideMenu from "../components/sideMenu";
import ScrollUpButton from "@/app/components/scrollUp";
import ExportExcelReport from "./components/exportExcelReport";
import ExportPDFReport from "./components/exportPDFreport";
import ReportInfoPanel from "./components/reportInfoPanel";
import ReportSummary from "./components/reportSummary";
import ReportChart from "./components/ReportChart";
import { IoReload } from "react-icons/io5";



function ReportPage() {
    const { data: session } = useSession();
    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState("All"); // Default tab

    const fetchTasks = async () => {
        setLoading(true);
        try {
            const response = await fetch("/api/getTasks");
            if (!response.ok) {
                throw new Error(`Failed to fetch tasks: ${response.status}`);
            }
            const data = await response.json();

            const sortedTasks = data.sort((a, b) => {
                if (a.status === "In Progress" && b.status !== "In Progress") return -1;
                if (a.status !== "In Progress" && b.status === "In Progress") return 1;
                return 0;
            });

            setTasks(sortedTasks);
            setFilteredTasks(sortedTasks);
        } catch (err) {
            console.error("Error fetching tasks:", err);
            setError("Failed to load tasks. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    // Update filtered tasks when activeTab or tasks change
    useEffect(() => {
        if (activeTab === "All") {
            setFilteredTasks(tasks);
        } else {
            setFilteredTasks(tasks.filter(task => task.status === activeTab));
        }
    }, [tasks, activeTab]); // ✅ Runs when `tasks` or `activeTab` change

    // Function to update active tab
    const handleTabClick = (status) => {
        setActiveTab(status);
    };


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
                            <div className="mb-4">
                                <h1 className="text-2xl text-black dark:text-white font-semibold">
                                    Report
                                </h1>

                            </div>

                            {/* Button Section */}
                            <div className=" flex gap-2 h-fit animate-fade-in-right-left">
                                <ReportSummary tasks={tasks} />

                                <ReportChart tasks={tasks} />

                                <ExportExcelReport tasks={tasks} />

                                <ExportPDFReport tasks={tasks} />
                            </div>

                            {/* Tabs for Filtering */}
                            <div className="relative flex mt-6">
                                {["All", "In Progress", "Completed"].map((status) => (
                                    <button
                                        key={status}
                                        onClick={() => handleTabClick(status)}
                                        className={`px-3 py-1.5 border-x border-t border-gray-300 dark:border-gray-700 text-sm font-semibold transition-all duration-150  focus:outline-none
                                            ${activeTab === status ? " bg-[#acccf5] dark:bg-[#385cbe] dark:text-white" : "bg-[#ffffff] dark:bg-gray-800 text-gray-400 dark:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700"}`}
                                    >
                                        {status}
                                    </button>
                                ))}

                                {/* Refresh Button */}
                                <button
                                    onClick={() => fetchTasks()}
                                    className="absolute right-0 top-0.5 border text-gray-500 bg-none border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-400 p-1.5 rounded-sm text-sm flex items-center gap-1 transition-all"
                                >
                                    <IoReload className="w-[17px] h-[17px]" />
                                </button>

                            </div>

                            {/* Responsive Table Wrapper */}
                            <div className="overflow-x-auto border dark:border-gray-700">

                                <table className="table-auto w-full text-md border-collapse border border-gray-300 dark:border-gray-700">
                                    <thead>
                                        <tr className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-left">
                                            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 whitespace-nowrap max-w-[50px]">No.</th>
                                            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 whitespace-nowrap min-w-[157px]">Project</th>
                                            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 whitespace-nowrap min-w-[95px]">Severity</th>
                                            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 whitespace-nowrap min-w-[157px]">Detected By</th>
                                            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 whitespace-nowrap min-w-[157px]">Detected Process</th>
                                            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 whitespace-nowrap min-w-[157px]">Inspector</th>

                                            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 whitespace-nowrap min-w-[157px]">Create Date</th>
                                            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 whitespace-nowrap min-w-[157px]">Detected Date</th>
                                            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 whitespace-nowrap min-w-[157px]">Due Date</th>

                                            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 whitespace-nowrap min-w-[115px]">Status</th>
                                            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 whitespace-nowrap min-w-[157px]">Pending (day)</th>
                                            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 whitespace-nowrap min-w-[157px]">Finished Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {loading ? (
                                            [...Array(6)].map((_, index) => (
                                                <tr key={index} className="animate-pulse">
                                                    {Array(12).fill("").map((_, i) => (
                                                        <td key={i} className="border dark:border-gray-700 px-4 py-3">
                                                            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
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
                                        ) : filteredTasks.length > 0 ? (
                                            filteredTasks.map((task, index) => {
                                                const dueDate = task.dueDate ? new Date(task.dueDate) : null;
                                                const today = new Date();
                                                let pendingDays = null;

                                                if (task.status === "Completed") {
                                                    pendingDays = "(Completed)";
                                                } else if (dueDate) {
                                                    pendingDays = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));
                                                }

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
                                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">{index + 1}</td>
                                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">{task.project || "N/A"}</td>

                                                        {/* Severity Column */}
                                                        <td className="border border-gray-300 text-center dark:border-gray-700 px-4 py-2 min-w-[90px]">
                                                            <span className={`px-2 py-1 rounded-md text-xs font-semibold ${task.severity === "Low"
                                                                ? "bg-yellow-200 text-yellow-800"
                                                                : task.severity === "Medium"
                                                                    ? "bg-orange-200 text-orange-800"
                                                                    : "bg-red-200 text-red-800"
                                                                }`}>
                                                                {task.severity || "N/A"}
                                                            </span>
                                                        </td>

                                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">{task.detectedBy || "N/A"}</td>
                                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">{task.detectedProcess || "N/A"}</td>
                                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">{task.inspectorName || "N/A"}</td>
                                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">{formatDate(task.createdAt)}</td>
                                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">{formatDate(task.detectedDate)}</td>
                                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">{formatDate(task.dueDate)}</td>

                                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">
                                                            <span className={`${task.status === "In Progress" ? "text-blue-500" : "text-green-500 dark:text-green-500"} font-semibold`}>
                                                                {task.status || "N/A"}
                                                            </span>
                                                        </td>

                                                        {/* Pending Days Column */}
                                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 min-w-[100px] text-center">
                                                            <span className={`px-2 py-1 rounded-md font-bold    
                                                                    ${pendingDays === "(Completed)" ? "text-gray-500 text-sm"
                                                                    : pendingDays >= 0 ? "text-green-600" : "text-red-600"}`}>
                                                                {pendingDays}
                                                            </span>
                                                        </td>

                                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                                                            {task.finishedDate ? formatDate(task.finishedDate) : "-"}
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        ) : (
                                            <tr>
                                                <td colSpan="12" className="text-center py-4">
                                                    No tasks available for the selected filter.
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
