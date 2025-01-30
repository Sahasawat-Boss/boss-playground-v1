import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import jsPDF from "jspdf";

const TaskModal = ({ task, isOpen, onClose, onUpdateTask }) => {
    const [comment, setComment] = useState("");

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.body.style.height = "100vh";
        } else {
            document.body.style.overflow = "";
            document.body.style.height = "";
        }

        return () => {
            document.body.style.overflow = "";
            document.body.style.height = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleComplete = async () => {
        if (!task || !task._id) return;

        const updatedTask = {
            ...task,
            status: "Completed",
            comment: comment || "No comments provided",
        };

        try {
            const response = await fetch("/api/pisPost", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: task._id, comment }),
            });

            const data = await response.json();

            if (data.success) {
                console.log("Updated Task:", updatedTask); // Log the updated task
                if (onUpdateTask) {
                    onUpdateTask(updatedTask); // Update the task in the parent component
                }

                alert("Inspectation Completed!"); // Provide feedback
                onClose(); // Close the modal
            } else {
                alert("Failed to update task. Please try again.");
            }
        } catch (error) {
            console.error("Error completing task:", error);
            alert("Error completing task. Please try again.");
        }

        onClose(); // Close the modal after completion
    };

    const exportToPDF = () => {
        if (!task) return;

        const pdf = new jsPDF();
        pdf.setFont("helvetica", "normal");

        // Title
        pdf.setFontSize(18);
        pdf.text(`Project: ${task.project || "No Project Name"}`, 10, 20);

        pdf.setFontSize(12);
        pdf.text("=====================================", 10, 30);

        // Task Information
        let yPosition = 40; // Start position for text

        const addText = (label, value) => {
            pdf.text(`${label}: ${value || "N/A"}`, 10, yPosition);
            yPosition += 10; // Move to the next line
        };

        addText("Severity", task.severity);
        addText("Status", task.status);
        addText("Detected Date", task.detectedDate ? new Date(task.detectedDate).toLocaleDateString() : "N/A");
        addText("Detected By", task.detectedBy);
        addText("Inspector Name", task.inspectorName);
        addText("Created Date", task.createdAt ? new Date(task.createdAt).toLocaleDateString() : "N/A");

        pdf.text("=====================================", 10, yPosition);
        yPosition += 10;

        // Task Details
        pdf.setFontSize(14);
        pdf.text("Task Details:", 10, yPosition);
        yPosition += 8;

        pdf.setFontSize(12);
        const splitDetails = pdf.splitTextToSize(task.details || "No details provided", 180);
        pdf.text(splitDetails, 10, yPosition);
        yPosition += splitDetails.length * 6; // Adjust Y position based on text size

        pdf.text("=====================================", 10, yPosition);
        yPosition += 10;

        // Attachments Placeholder (Below Task Details)
        pdf.setFontSize(14);
        pdf.text("Attachments:", 10, yPosition);
        yPosition += 8;
        if (task.public_urls && task.public_urls.length > 0) {
            pdf.setFontSize(12);
            task.public_urls.forEach((url, index) => {
                pdf.text(`Attachment ${index + 1}: [Cannot be displayed in PDF]`, 10, yPosition);
                yPosition += 8;
            });
        } else {
            pdf.text("No attachments available", 10, yPosition);
        }

        // Comments Section
        pdf.text("=====================================", 10, yPosition);
        yPosition += 10;

        pdf.setFontSize(14);
        pdf.text("Inspectation Result:", 10, yPosition);
        yPosition += 8;

        pdf.setFontSize(12);
        const splitComment = pdf.splitTextToSize(comment || "No comments provided", 180);
        pdf.text(splitComment, 10, yPosition);

        // Save PDF
        pdf.save(`Task_${task.project || "No_Project"}_TextOnly.pdf`);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-65 backdrop-blur-md transition-opacity animate-fade-in-fast">
            <div className="h-fit max-h-[800px] overflow-auto bg-white dark:bg-gray-800 py-8 px-14 rounded-lg shadow-xl w-full max-w-3xl relative border border-gray-200 dark:border-gray-600">
                {/* Close Button */}
                <button
                    className="absolute top-2 right-2 text-gray-400 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-transform hover:scale-110"
                    onClick={onClose}
                >
                    <IoClose size={30} />
                </button>

                {/* Task Header */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                    Project: {task.project || "No Project Name"}
                </h2>

                <hr className="border-[1.5px] mt-1 mb-5 border-gray-200" />

                {/* Task Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5">
                    <p className="text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">Severity:</span>{" "}
                        <span
                            className={`px-2 pt-0.5 pb-1  text-white rounded-sm ${task.severity === "Low"
                                ? "bg-yellow-500"
                                : task.severity === "Medium"
                                    ? "bg-orange-400"
                                    : "bg-red-500"
                                }`}
                        >
                            {task.severity || "N/A"}
                        </span>
                    </p>

                    <p className="text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">Status:</span>{" "}
                        <span
                            className={`px-2 py-0.5 pb-1 rounded-sm ${task.status === "In Progress"
                                ? "font-bold text-blue-400"
                                : "font-bold text-green-400"
                                }`}
                        >
                            {task.status || "N/A"}
                        </span>
                    </p>

                    <p className="text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">Detected Date:</span>{" "}
                        {task.detectedDate
                            ? new Date(task.detectedDate).toLocaleDateString()
                            : "N/A"}
                    </p>

                    <p className="text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">Detected By:</span>{" "}
                        {task.detectedBy || "N/A"}
                    </p>

                    <p className="text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">Inspector Name:</span>{" "}
                        {task.inspectorName || "N/A"}
                    </p>

                    <p className="text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">Created Date:</span>{" "}
                        {task.createdAt
                            ? new Date(task.createdAt).toLocaleDateString()
                            : "N/A"}
                    </p>
                </div>


                {/* Task Details Section */}
                <div className="mt-4 py-2 px-5 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900">
                    <p className="text-gray-black dark:text-gray-200 font-semibold">Task Details:</p>
                    <p className="text-gray-600 dark:text-gray-400 my-1.5">
                        {task.details || "No details provided"}
                    </p>
                </div>

                {/* Attachments Section (Flex with Horizontal Scroll) */}
                <p className="mt-3 text-gray-800 dark:text-gray-300 font-semibold">Attachments:</p>
                <div className="flex overflow-x-auto mt-2 p-2">
                    {task.public_urls && task.public_urls.length > 0 ? (
                        task.public_urls.map((url, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-110"
                                onClick={() => window.open(url, "_blank")}
                            >
                                <img
                                    src={url}
                                    alt={`Attachment ${index + 1}`}
                                    className="w-36 h-40 object-cover shadow-lg border border-gray-300 dark:border-gray-600"
                                />
                            </div>
                        ))
                    ) : (
                        <p className="text-sm text-gray-500">No attachments available</p>
                    )}
                </div>

                {/* Comment Box */}
                <div className="mt-4">
                    <p className="mt-4 mb-2 text-gray-800 dark:text-gray-300 font-semibold">Inspection Result:</p>
                    <textarea
                        className="w-full h-24 p-2 border border-gray-500 rounded-md dark:bg-gray-700 dark:text-white"
                        placeholder="Add your comment here..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </div>

                {/* Footer with Buttons */}
                <div className="flex justify-center mt-6 space-x-4">
                    <button className="px-5 py-1.5 border border-gray-300 bg-white text-black shadow-md hover:bg-gray-100" onClick={onClose}>
                        Close
                    </button>
                    <button className="px-5 py-1.5 bg-blue-600 text-white shadow-md hover:bg-blue-500" onClick={exportToPDF}>
                        Export PDF
                    </button>
                    <button className="px-5 py-1.5 bg-green-700 text-white shadow-md hover:bg-green-600" onClick={handleComplete}>
                        Completed
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskModal;
