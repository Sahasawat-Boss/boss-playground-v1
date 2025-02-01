"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Container from "@/app/components/container";
import NavBar from "@/app/components/nav";
import Footer from "@/app/components/footer";
import SideMenu from "../components/sideMenu";
import SearchOptionTask from "../components/searchOption";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import ToolTipServ from "./components/toolTipserv";
import InfoComp from "./components/infoComp";
import TaskModal from "./components/taskModal"; // ✅ Import TaskModal
import ScrollUpButton from "@/app/components/scrollUp";
import ExportExcelTask from "./components/exportExcelTask";
import ExportPDFTask from "./components/ExportPDFTask";

const TaskCard = ({ task, handleImageClick, handleViewTask }) => {
    const [isCollapsed, setIsCollapsed] = useState(false); // ⬅️ Track collapse state

    return (
        <div className="relative flex flex-col justify-between bg-white dark:bg-gray-700 shadow-lg p-5 md:px-10 xl:px-16 rounded-md m-2 w-full border dark:border-gray-600 animate-fade-in-down-fast">
            {/* Task Details */}
            <div>
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold text-gray-800 dark:text-white">
                        Project: {task.project || "N/A"}
                    </h2>
                    <div
                        className="border-gray-400 opacity-25 cursor-pointer hover:opacity-100 text-3xl"
                        onClick={() => setIsCollapsed(!isCollapsed)} // ⬅️ Toggle visibility
                    >
                        {isCollapsed ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
                    </div>

                    {/* Severity Badge */}
                    <p className="absolute -top-4 -left-4 text-sm text-gray-600 dark:text-gray-300 mt-2">
                        <span
                            className={`px-1.5 py-0.5 font-semibold shadow-md ${task.severity === "Low"
                                ? "border border-yellow-600 text-yellow-600 bg-yellow-50"
                                : task.severity === "Medium"
                                    ? "border border-orange-600 text-orange-600 bg-orange-50"
                                    : "border border-red-600 text-red-600 bg-red-50"
                                }`}
                        >
                            {task.severity || "N/A"}
                        </span>
                    </p>
                    {/* Tooltip for Severity */}
                    <div className="absolute -top-4 -left-4">
                        <ToolTipServ />
                    </div>
                </div>
                <hr className="border-gray-300 dark:border-gray-600 my-1" />

                {/* Smooth Collapsible Section */}
                <div
                    className={`transition-all duration-300 ease-in-out ${isCollapsed ? "max-h-0 opacity-0" : "max-h-[800px] opacity-100"
                        }`}
                >
                    {/* ✅ Open modal when clicking "View" */}
                    <button
                        className="my-3 flex w-fit text-sm px-2.5 py-1 bg-blue-600 text-white rounded-sm shadow-md hover:bg-blue-400"
                        onClick={() => handleViewTask(task)}
                    >
                        View
                    </button>

                    {/* Task Modal */}
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                        Detected Date:{" "}
                        {task.detectedDate
                            ? new Date(task.detectedDate).toLocaleDateString()
                            : "N/A"}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                        Detected By: {task.detectedBy || "N/A"}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                        Detected Process: {task.detectedProcess || "N/A"}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                        Inspector Name: {task.inspectorName || "N/A"}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                        Details:
                    </p>
                    <p className="border p-2 text-sm text-gray-600 dark:text-gray-300 rounded-md">
                        {task.details || "No details provided"}
                    </p>
                    <p className="text-sm mt-2 mb-3 text-gray-600 dark:text-gray-100 font-semibold">
                        Due Date:{" "}
                        {task.dueDate
                            ? new Date(task.dueDate).toLocaleDateString()
                            : "N/A"}
                    </p>

                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 mb-2">
                        Status:{" "}
                        <span
                            className={
                                task.status === "In Progress"
                                    ? "text-blue-400 font-bold"
                                    : "text-green-500 dark:text-green-500 font-bold"
                            }
                        >
                            {task.status || "N/A"}
                        </span>
                    </p>

                    {/* Task Attachments */}
                    <p className="mb-1 text-sm text-gray-400 dark:text-gray-300">
                        Attachments:
                    </p>
                    <div className="w-full bg-gray-100 dark:bg-gray-800 flex overflow-x-auto p-2">
                        {task.public_urls && task.public_urls.length > 0 ? (
                            task.public_urls.map((url, index) => (
                                <div
                                    key={index}
                                    className="relative flex items-center justify-center cursor-pointer  transition-transform duration-300 hover:scale-110"
                                    onClick={() => handleImageClick(url)}
                                >
                                    <img
                                        src={url}
                                        alt={`Attachment ${index + 1}`}
                                        className="w-full h-32 object-cover border border-gray-300 dark:border-gray-600"
                                    />
                                </div>
                            ))
                        ) : (
                            <p className="text-sm text-gray-500 col-span-full">
                                No files uploaded
                            </p>
                        )}
                    </div>

                    <p className="text-sm mt-2 text-green-700 dark:text-[#408d40] font-semibold">
                        Finished Date:{" "}
                        {task.finishedDate
                            ? new Date(task.finishedDate).toLocaleDateString()
                            : "N/A"}
                    </p>

                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 mb-1">
                        Details:
                    </p>
                    <p className="border p-2 text-sm text-gray-600 dark:text-gray-300 rounded-md">
                        {task.comment || "N/A"}
                    </p>

                    <p className="mt-3 text-sm text-gray-400 dark:text-gray-300 justify-end">
                        Task Created Date:{" "}
                        {task.createdAt
                            ? new Date(task.createdAt).toLocaleDateString()
                            : "N/A"}
                    </p>
                </div>
            </div>
        </div>
    );
};



function PIR() {
    const { data: session } = useSession();
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalImage, setModalImage] = useState(null);

    // ✅ State for Task Modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);


    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch("/api/getTasks");
                if (!response.ok) {
                    throw new Error(`Failed to fetch tasks: ${response.status}`);
                }
                const data = await response.json();
                const sortedTasks = data.sort(
                    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                );
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

    const handleImageClick = (url) => setModalImage(url);
    const closeModal = () => setModalImage(null);

    // ✅ Function to open modal with task details
    const handleViewTask = (task) => {
        setSelectedTask(task);
        setIsModalOpen(true);
    };

    return (
        <main className="bg-white dark:bg-[#222224] transition-all duration-500 flex flex-col min-h-screen">
            <Container>
                <NavBar session={session} />
                <div className="flex">
                    <div className="bg-gray-600">
                        <SideMenu />
                    </div>

                    {/* Main Content - Removed Scrollbar */}
                    <div className="flex w-full flex-col p-5 animate-fade-in-fast">
                        <div className="min-h-[92vh] flex flex-col p-8 border-2 dark:border-neutral-700 shadow-lg shadow-[#d6d6d6] dark:shadow-[#464646]">
                            <div className="mb-3 flex justify-between items-center">
                                <h1 className="text-2xl text-black dark:text-white font-semibold">
                                    Completed
                                </h1>
                                <div><InfoComp /></div>
                            </div>

                            {/* Search Options */}
                            <SearchOptionTask />
                            {/* Search Options */}

                            {/* Button Section */}
                            <div className="my-3 flex gap-2 h-fit animate-fade-in-right-left">
                                {/* Ensure tasks are not undefined */}
                                {tasks && tasks.length > 0 && <ExportExcelTask tasks={tasks} />}

                                {tasks.length > 0 && <ExportPDFTask tasks={tasks} />}
                            </div>
                            {/* Button Section */}

                            {/* Task Display Section - Show Only Completed Tasks */}
                            <div className="w-full h-fit bg-gray-100 dark:bg-gray-800 flex flex-wrap justify-center items-start p-4 gap-4">
                                {loading ? (
                                    <p className="text-gray-700 dark:text-gray-300">Loading...</p>
                                ) : error ? (
                                    <p className="text-red-600 dark:text-red-400">{error}</p>
                                ) : (
                                    (() => {
                                        const completedTasks = tasks.filter((task) => task.status === "Completed");

                                        return completedTasks.length > 0 ? (
                                            completedTasks.map((task) => (
                                                <TaskCard
                                                    key={task._id}
                                                    task={task}
                                                    handleImageClick={handleImageClick}
                                                    handleViewTask={handleViewTask}  // ✅ Pass this function
                                                />
                                            ))
                                        ) : (
                                            <p className="text-gray-700 dark:text-gray-300 font-semibold text-lg">
                                                Currently have no Completed Task
                                            </p>
                                        );
                                    })()
                                )}
                            </div>


                        </div>
                    </div>
                </div>

                {/* Modal for Image Preview */}
                {modalImage && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
                        onClick={closeModal}
                    >
                        <img
                            src={modalImage}
                            alt="Preview"
                            className="rounded-md"
                        />
                    </div>
                )}

                {/* ✅ Task Modal */}
                {isModalOpen && selectedTask && (
                    <TaskModal task={selectedTask} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                )}

                <Footer />
                <ScrollUpButton />
            </Container>
        </main>
    );
}

export default PIR;
