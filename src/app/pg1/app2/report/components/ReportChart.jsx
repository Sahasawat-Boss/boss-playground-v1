"use client";

import { useRef, useState, useEffect } from "react";
import { BsBarChart } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

function ReportChart({ tasks }) {
    const [isOpen, setIsOpen] = useState(false);
    const canvasRef1 = useRef(null);
    const canvasRef2 = useRef(null);
    const [summary, setSummary] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const generateSummary = () => {
        const totalTasks = tasks.length;
        const inProgressTasks = tasks.filter(task => task.status === "In Progress").length;
        const completedTasks = tasks.filter(task => task.status === "Completed").length;

        // Count tasks by severity
        const lowSeverity = tasks.filter(task => task.severity === "Low").length;
        const mediumSeverity = tasks.filter(task => task.severity === "Medium").length;
        const highSeverity = tasks.filter(task => task.severity === "High").length;

        setSummary({
            totalTasks,
            inProgressTasks,
            completedTasks,
            lowSeverity,
            mediumSeverity,
            highSeverity,
        });

        // Check for dark mode
        setIsDarkMode(document.documentElement.classList.contains("dark"));

        setIsOpen(true); // Open modal
    };

    useEffect(() => {
        if (!summary) return;

        // Function to draw chart
        const drawChart = (canvas, labels, values, colors) => {
            const ctx = canvas.getContext("2d");

            // Clear previous chart
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Set text color based on mode
            ctx.fillStyle = isDarkMode ? "#ffffff" : "#333";

            // Chart dimensions
            const barWidth = 50;
            const barSpacing = 70;
            const chartHeight = 180;
            const maxVal = Math.max(...values) || 1;
            const scaleFactor = chartHeight / maxVal;

            // Draw bars
            values.forEach((val, i) => {
                const x = i * (barWidth + barSpacing) + 65;
                const y = canvas.height - val * scaleFactor - 30;

                ctx.fillStyle = colors[i];
                ctx.fillRect(x, y, barWidth, val * scaleFactor);

                // Draw text labels
                ctx.fillStyle = isDarkMode ? "#ffffff" : "#333";
                ctx.font = "14px Arial";
                ctx.fillText(labels[i], x + 5, canvas.height - 10);
                ctx.fillText(val, x + 15, y - 5);
            });

            // Draw axes
            ctx.strokeStyle = isDarkMode ? "#bbbbbb" : "#00000";
            ctx.beginPath();
            ctx.moveTo(40, 10);
            ctx.lineTo(40, canvas.height - 30);
            ctx.lineTo(canvas.width - 10, canvas.height - 30);
            ctx.stroke();
        };

        // Upper Chart (Total, In Progress, Completed)
        drawChart(
            canvasRef1.current,
            ["Total", "In Progress", "Completed"],
            [summary.totalTasks, summary.inProgressTasks, summary.completedTasks],
            ["#7ae1bf", "#007bff", "#28a745"]
        );

        // Bottom Chart (Low, Medium, High Severity)
        drawChart(
            canvasRef2.current,
            ["Low", "Medium", "High"],
            [summary.lowSeverity, summary.mediumSeverity, summary.highSeverity],
            ["#eae78a ", "#fd7e14", "#dc3545"]
        );
    }, [summary, isDarkMode]);

    return (
        <div>
            {/* Chart Button */}
            <button
                onClick={generateSummary}
                className="flex w-fit text-sm items-center gap-2 px-2 py-[5px] rounded-sm border border-blue-700 bg-blue-600 text-white shadow-md hover:bg-blue-500 transition-all"
            >
                <BsBarChart className="text-lg" />
                Report Graph
            </button>

            {/* Modal with Two Charts */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
                    <div className="bg-white dark:bg-gray-800 py-10 px-12 rounded-lg shadow-lg w-fit relative">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                        >
                            <IoClose className="text-2xl" />
                        </button>

                        <h2 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white flex items-center  gap-2">
                            <BsBarChart className="text-blue-600" />
                            Report Graph
                        </h2>

                        {/* Upper Graph - Task Status */}
                        <p className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-3 text-center">Task Status Overview</p>
                        <canvas ref={canvasRef1} width={400} height={250} className="bg-gray-100 dark:bg-gray-700 p-2 rounded-md mb-6" />

                        {/* Bottom Graph - Severity Levels */}
                        <p className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-3 text-center">Severity Level Overview</p>
                        <canvas ref={canvasRef2} width={400} height={250} className="bg-gray-100 dark:bg-gray-700 p-2 rounded-md" />

                        {/* Close Button */}
                        <div className="mt-6 flex justify-center">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="px-3 py-1.5 bg-white border border-gray-400 dark:text-white dark:bg-gray-600 rounded-sm hover:bg-gray-200 dark:hover:bg-gray-400 transition"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ReportChart;
