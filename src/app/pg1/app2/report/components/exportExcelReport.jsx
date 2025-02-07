import React from "react";
import * as XLSX from "xlsx";
import { FaFileExcel } from "react-icons/fa";

const ExportExcelReport = ({ tasks }) => {
    const handleExport = () => {
        if (!tasks || tasks.length === 0) {
            alert("No data available to export.");
            return;
        }

        // Format date to DD-MM-YY
        const formatDate = (date) => {
            return date
                ? new Date(date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "2-digit",
                })
                : "N/A";
        };

        // Map data for export
        const formattedData = tasks.map((task, index) => ({
            "No.": index + 1,
            "Project": task.project || "N/A",
            "Severity Level": task.severity || "N/A",
            "Detected By": task.detectedBy || "N/A",
            "Detected Process": task.detectedProcess || "N/A",
            "Inspector": task.inspectorName || "N/A",
            "Status": task.status || "N/A",
            "Create Date": formatDate(task.createdAt),
            "Detected Date": formatDate(task.detectedDate),
            "Due Date": formatDate(task.dueDate),
            "Pending (days)": task.status === "Completed" 
                ? "Completed" 
                : task.dueDate
                ? Math.ceil((new Date(task.dueDate) - new Date()) / (1000 * 60 * 60 * 24))
                : "N/A",
            "Finished Date": formatDate(task.finishedDate),
        }));

        // Create worksheet & workbook
        const ws = XLSX.utils.json_to_sheet(formattedData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "PIS Report Data");

        // Download Excel file
        XLSX.writeFile(wb, "PIS_Report_Data.xlsx");
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

export default ExportExcelReport;
