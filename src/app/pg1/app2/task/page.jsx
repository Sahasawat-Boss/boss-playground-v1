"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Container from "@/app/components/container";
import NavBar from "@/app/components/nav";
import Footer from "@/app/components/footer";
import SideMenu from "../components/sideMenu";
import SearchOptionTask from "../components/searchOption";

function PIR() {
    const { data: session } = useSession();
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalImage, setModalImage] = useState(null); // State for modal image

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch("/api/getTasks");
                if (!response.ok) {
                    throw new Error(`Failed to fetch tasks: ${response.status} ${response.statusText}`);
                }
                const data = await response.json();

                console.log("Fetched tasks:", data); // Log the fetched data

                // Sort tasks by createdAt in descending order (newest first)
                const sortedTasks = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
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

    const handleImageClick = (url) => {
        setModalImage(url); // Set the clicked image URL
    };

    const closeModal = () => {
        setModalImage(null); // Clear the modal image URL
    };

    return (
        <main className="bg-white dark:bg-[#222224] transition-all duration-[0.5s] flex flex-col min-h-screen">
            <Container>
                <NavBar session={session} />
                <main className="flex">
                    {/* Side Menu */}
                    <div className="bg-gray-600">
                        <SideMenu />
                    </div>

                    {/* Main Content */}
                    <div className="flex w-full h-fit flex-col p-5">
                        <div className="h-fit flex flex-col p-5 border-2 dark:border-neutral-700 shadow-lg shadow-[#d6d6d6] dark:shadow-[#464646]">
                            <div className="h-full bg-white dark:bg-transparent pt-2 pb-4 px-6 animate-fade-in-fast">
                                <h1 className="mb-3 text-[24px] text-black dark:text-white font-semibold">
                                    Task
                                </h1>

                                {/* Search Options */}
                                <SearchOptionTask />

                                {/* Task Display Section */}
                                <div className="min-h-[70.4vh] w-full bg-gray-100 dark:bg-gray-800 flex flex-wrap justify-center items-start p-4 overflow-auto">
                                    {loading ? (
                                        <p className="text-black dark:text-white"></p>
                                    ) : error ? (
                                        <p className="text-red-600 dark:text-red-400">{error}</p>
                                    ) : tasks.length === 0 ? (
                                        <p className="text-black dark:text-white">No tasks available.</p>
                                    ) : (
                                        tasks.map((task) => (
                                            <div
                                                key={task._id}
                                                className="h-[38vh] overflow-y-auto flex flex-col md:flex-row gap-4 justify-between bg-white dark:bg-gray-700 shadow-lg py-5 px-14 lg:px-28 xl:px-52 rounded-md m-2 w-full border dark:border-gray-600 animate-fade-in-down-fast"
                                            >
                                                <div>
                                                    <h2 className="text-lg font-bold text-gray-800 dark:text-white">
                                                        Project: {task.project || "N/A"}
                                                    </h2>
                                                    <hr className="border-gray-300 dark:border-gray-600 my-0.5" />
                                                    
                                                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                                                        Severity:{" "}
                                                        {/*Tag Color*/}
                                                        <span

                                                            className={`px-2 rounded ${task.severity === "Low"
                                                                ? "ml-1 border border-yellow-500 text-yellow-600 dark:text-yellow-800 bg-yellow-50 dark:bg-yellow-100"
                                                                : task.severity === "Medium"
                                                                    ? "ml-1 border border-orange-500 text-orange-600 dark:text-orange-800 bg-orange-50 dark:bg-orange-100"
                                                                    : "ml-1 border border-red-500 text-red-600 dark:text-red-800 bg-red-50 dark:bg-red-100"
                                                                }`}
                                                        >{/*Tag Color*/}
                                                            {task.severity || "N/A"}
                                                        </span>
                                                    </p>

                                                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-3">
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
                                                        Details: {task.details || "No details provided"}
                                                    </p>

                                                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                                                        <span className="text-gray-600 dark:text-gray-300">Status: </span>
                                                        <span className={task.status === "Active" ? "text-green-500 drop-shadow-sm" : "text-gray-600 dark:text-gray-400"}>
                                                            {task.status || "No details provided"}
                                                        </span>
                                                    </p>


                                                    <p className="w-fit text-sm mt-2 mb-6 font-semibold ">
                                                        Due Date:{" "}
                                                        {task.dueDate
                                                            ? new Date(task.dueDate).toLocaleDateString()
                                                            : "N/A"}
                                                    </p>
                                                    <hr className="border-gray-300 dark:border-gray-600" />
                                                    <p className="text-sm text-gray-400 dark:text-gray-300">
                                                        (Created Date:{" "}
                                                        {task.createdAt
                                                            ? new Date(task.createdAt).toLocaleDateString()
                                                            : "N/A"})
                                                    </p>
                                                </div>
                                                <div className=" flex flex-col mt-3 gap-2">
                                                    {task.public_urls && task.public_urls.length > 0 ? (
                                                        task.public_urls.map((url, index) => (
                                                            <div
                                                                key={index}
                                                                className="flex flex-col items-start cursor-pointer"
                                                                onClick={() => handleImageClick(url)}
                                                            >
                                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                                    Attachment: ({index + 1})
                                                                </p>
                                                                <img
                                                                    src={url}
                                                                    alt={`Attachment ${index + 1}`}
                                                                    className="w-24 h-24 object-cover rounded-md border border-gray-300 dark:border-gray-600"
                                                                />
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <p className="text-sm text-gray-500">No files uploaded</p>
                                                    )}
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <Footer />

                {/* Modal for Image Preview */}
                {modalImage && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
                        onClick={closeModal}
                    >
                        <img
                            src={modalImage}
                            alt="Preview"
                            className="max-w-[80%] max-h-full"
                        />
                    </div>
                )}
            </Container>
        </main>
    );
}

export default PIR;
