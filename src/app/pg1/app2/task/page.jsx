"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Container from "@/app/components/container";
import NavBar from "@/app/components/nav";
import Footer from "@/app/components/footer";
import SideMenu from "../components/sideMenu";
import SearchOptionTask from "../components/searchOption";
import InfoTask from "./components/infoTask";
import ToolTipserv from "./components/toolTipserv";
import ExportExcelTask from "./components/exportExcelTask";
import ExportPDFTask from "./components/ExportPDFTask";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const TaskCard = ({ task, handleImageClick }) => {
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
                        className="  border-gray-400 opacity-25 cursor-pointer hover:opacity-100 text-3xl"
                        onClick={() => setIsCollapsed(!isCollapsed)} // ⬅️ Toggle visibility
                    >
                        {isCollapsed ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
                    </div>
                    <p className="absolute -top-4 -left-4 text-sm text-gray-600 dark:text-gray-300 mt-2">
                        <span
                            className={`px-1.5 py-0.5 font-semibold shadow-md ${task.severity === "Low"
                                ? "ml-1 border border-yellow-600 text-yellow-600 bg-yellow-50"
                                : task.severity === "Medium"
                                    ? "ml-1 border border-orange-600 text-orange-600 bg-orange-50"
                                    : "ml-1 border border-red-600 text-red-600 bg-red-50"
                                }`}
                        >
                            {task.severity || "N/A"}
                        </span>
                    </p>

                    {/* tooltip serverity level*/}
                    <div className="absolute -top-4 -left-3"><ToolTipserv /></div>

                </div>
                <hr className="border-gray-300 dark:border-gray-600 my-1" />

                {/* Smooth Collapsible Section */}
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isCollapsed ? "max-h-0 opacity-0" : "max-h-[500px] opacity-100"
                        }`}
                >

                    <button
                        className="my-3 flex w-fit text-sm items-center px-3 py-1 pt-1.5 rounded-sm  bg-blue-600 text-white shadow-md hover:bg-blue-400"
                    >
                        View
                    </button>

                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                        Detected Date: {task.detectedDate ? new Date(task.detectedDate).toLocaleDateString() : "N/A"}
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
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Details:</p>
                    <p className="border p-2 text-sm text-gray-600 dark:text-gray-300 rounded-md">
                        {task.details || "No details provided"}
                    </p>

                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                        Status:{" "}
                        <span className={task.status === "In Progress" ? "text-blue-400 font-bold" : "text-red-600 dark:text-red-400"}>
                            {task.status || "N/A"}
                        </span>
                    </p>
                    <p className="text-sm mt-2 mb-3 font-semibold">
                        Due Date: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "N/A"}
                    </p>

                    {/* Task Attachments */}
                    <p className="mb-1 text-sm text-gray-400 dark:text-gray-300">Attachments:</p>
                    <div className="w-fit bg-gray-100 dark:bg-gray-300 grid grid-cols-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-1">
                        {task.public_urls && task.public_urls.length > 0 ? (
                            task.public_urls.map((url, index) => (
                                <div key={index} className="flex items-center justify-center cursor-pointer" onClick={() => handleImageClick(url)}>
                                    <img src={url} alt={`Attachment ${index + 1}`} className="w-36 h-36 object-cover border-gray-300 dark:border-gray-600" />
                                </div>
                            ))
                        ) : (
                            <p className="text-sm text-gray-500">No files uploaded</p>
                        )}
                    </div>
                    <hr className="border-gray-300 dark:border-gray-600" />
                    <p className="mt-2 text-sm text-gray-400 dark:text-gray-300">
                        (Created Date: {task.createdAt ? new Date(task.createdAt).toLocaleDateString() : "N/A"})
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

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch("/api/getTasks");
                if (!response.ok) {
                    throw new Error(`Failed to fetch tasks: ${response.status}`);
                }
                const data = await response.json();

                // Sort tasks by creation date (newest first)
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

    return (
        <main className="bg-white dark:bg-[#222224] transition-all duration-500 flex flex-col min-h-screen">
            <Container>
                <NavBar session={session} />
                <div className="flex">
                    <div className="bg-gray-600">
                        <SideMenu />
                    </div>

                    {/* Main Content - Removed Scrollbar */}
                    <div className="flex w-full flex-col p-5 animate-fade-in-fast flex-grow">
                        <div className="min-h-[92vh] flex flex-col p-8 border-2 dark:border-neutral-700 shadow-lg shadow-[#d6d6d6] dark:shadow-[#464646]">
                            <div className="mb-3 flex justify-between items-center">
                                <h1 className="text-2xl text-black dark:text-white font-semibold">
                                    Task
                                </h1>
                                <div className="opacity-60"><InfoTask /></div>
                            </div>

                            {/* Search Options */}
                            <SearchOptionTask />
                            {/* Search Options */}

                            {/* Button Section */}
                            <div className="my-3 flex gap-2 h-fit">
                                {/* Ensure tasks are not undefined */}
                                {tasks && tasks.length > 0 && <ExportExcelTask tasks={tasks} />}
                                {tasks.length > 0 && <ExportPDFTask tasks={tasks} />}
                            </div>
                            {/* Button Section */}

                            {/* Task Display Section - No Scroll, Show All Items */}
                            <div className="w-full bg-gray-100 dark:bg-gray-800 flex flex-wrap justify-center items-start p-4 gap-4">
                                {loading ? (
                                    <p className="text-gray-700 dark:text-gray-300">Loading...</p>
                                ) : error ? (
                                    <p className="text-red-600 dark:text-red-400">{error}</p>
                                ) : tasks.length === 0 ? (
                                    <p className="text-gray-700 dark:text-gray-300">
                                        No tasks available.
                                    </p>
                                ) : (
                                    tasks.map((task) => (
                                        <TaskCard
                                            key={task._id}
                                            task={task}
                                            handleImageClick={handleImageClick}
                                        />
                                    ))
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
                            className="max-w-[80%] max-h-full rounded-md"
                        />
                    </div>
                )}

                <Footer />
            </Container>
        </main>
    );
}

export default PIR;
