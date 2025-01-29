import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { FaFilePdf } from "react-icons/fa";

const ExportPDFTask = ({ tasks }) => {
    const handleExport = () => {
        if (!tasks || !Array.isArray(tasks) || tasks.length === 0) {
            alert("No tasks available to export.");
            return;
        }

        const doc = new jsPDF();

        // Title
        doc.setFontSize(18);
        doc.text("Tasks Report", 14, 15);

        // Define table columns
        const columns = ["Project", "Severity", "Detected Date", "Detected By", "Process", "Inspector", "Status", "Due Date"];
        const rows = tasks.map(task => [
            task.project || "N/A",
            task.severity || "N/A",
            task.detectedDate ? new Date(task.detectedDate).toLocaleDateString() : "N/A",
            task.detectedBy || "N/A",
            task.detectedProcess || "N/A",
            task.inspectorName || "N/A",
            task.status || "N/A",
            task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "N/A",
        ]);

        // Add autoTable
        doc.autoTable({
            startY: 25,
            head: [columns],
            body: rows,
            theme: "striped",
            headStyles: { fillColor: [44, 62, 80] }, // Dark header
            styles: { fontSize: 10 },
        });

        // Save PDF
        doc.save("Tasks_PDF_Data.pdf");
    };

    return (
        <button
            onClick={handleExport}
            className="flex w-fit text-sm items-center gap-2 px-2 py-1 rounded-sm border border-blue-700 bg-blue-600 text-white shadow-md hover:bg-blue-400 transition-all"
        >
            <FaFilePdf className="text-lg" />
            Export PDF
        </button>
    );
};

export default ExportPDFTask;
