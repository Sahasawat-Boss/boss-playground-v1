import React from "react";
import * as XLSX from "xlsx";
import { FaFileExcel } from "react-icons/fa";

const ExportExcel = ({ tasks }) => {
    const handleExport = () => {
        if (!tasks || !Array.isArray(tasks) || tasks.length === 0) {
            alert("No tasks available to export.");
            return;
        }

        // Convert task data to an array of objects
        const formattedData = tasks.map(task => ({
            "Project": task.project || "N/A",
            "Severity": task.severity || "N/A",
            "Detected Date": task.detectedDate ? new Date(task.detectedDate).toLocaleDateString() : "N/A",
            "Detected By": task.detectedBy || "N/A",
            "Detected Process": task.detectedProcess || "N/A",
            "Inspector Name": task.inspectorName || "N/A",
            "Status": task.status || "N/A",
            "Due Date": task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "N/A",
            "Created Date": task.createdAt ? new Date(task.createdAt).toLocaleDateString() : "N/A",
            "Details": task.details || "No details provided",
        }));

        // Create a new worksheet and workbook
        const ws = XLSX.utils.json_to_sheet(formattedData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Tasks");

        // Save file
        XLSX.writeFile(wb, "Tasks_Excel_Data.xlsx");
    };

    return (
        <button
            onClick={handleExport}
            className="flex w-fit text-sm items-center gap-2 px-2 py-1 rounded-sm border border-blue-700 bg-blue-600 text-white  shadow-md hover:bg-blue-400 transition-all"
        >
            <FaFileExcel className="text-lg" />
            Export Excel
        </button>
    );
};

export default ExportExcel;
