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

    useEffect(() => {
        // Fetch data from the API
        const fetchTasks = async () => {
            try {
                const response = await fetch("/api/getTasks");
                if (!response.ok) {
                    throw new Error(`Failed to fetch tasks: ${response.status} ${response.statusText}`);
                }
                const data = await response.json();
                console.log("Fetched tasks:", data); // Log the fetched data to the console
                setTasks(data); // Store the data in the state
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
                            <div className="h-full border bg-white dark:bg-transparent pt-2 pb-4 px-6 animate-fade-in-fast">
                                <h1 className="mb-3 text-[24px] text-black dark:text-white font-semibold">
                                    Task
                                </h1>

                                {/* Search Options */}
                                <SearchOptionTask />

                                {/* Task Display Section */}
                                <div className="bg-gray-100 dark:bg-gray-800 w-full flex flex-wrap justify-center items-start p-4 overflow-auto">
                                    {loading ? (
                                        <p className="text-black dark:text-white">Loading tasks...</p>
                                    ) : error ? (
                                        <p className="text-red-600 dark:text-red-400">{error}</p>
                                    ) : tasks.length === 0 ? (
                                        <p className="text-black dark:text-white">No tasks available.</p>
                                    ) : (
                                        tasks.map((task) => (
                                            <div
                                                key={task._id}
                                                className="flex justify-between bg-white dark:bg-gray-700 shadow-lg py-6 px-10 rounded-md m-2 w-full border dark:border-gray-600"
                                            >
                                                <div>
                                                    <h2 className="text-lg font-bold text-gray-800 dark:text-white">
                                                        Project: {task.project || "N/A"}
                                                    </h2>
                                                    <hr className="border-gray-300 dark:border-gray-600 my-0.5" />
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
                                                        Severity: {task.severity || "N/A"}
                                                    </p>
                                                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                                                        Inspector Name: {task.inspectorName || "N/A"}
                                                    </p>
                                                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                                                        Details: {task.details || "No details provided"}
                                                    </p>
                                                    <p className="w-fit text-sm text-gray-700 dark:text-gray-400 mt-2 bg-red-200 px-2 rounded">
                                                        Due Date:{" "}
                                                        {task.dueDate
                                                            ? new Date(task.dueDate).toLocaleDateString()
                                                            : "N/A"}
                                                    </p>
                                                </div>
                                                <div className="flex flex-col mt-3 gap-2">
                                                    {task.public_urls && task.public_urls.length > 0 ? (
                                                        task.public_urls.map((url, index) => (
                                                            <div key={index} className="flex flex-col items-start">
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
            </Container>
        </main>
    );
}

export default PIR;
