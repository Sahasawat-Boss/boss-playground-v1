import jsPDF from "jspdf";
import "jspdf-autotable";

const ExportToPDF = ({ data, columnsToDisplay, fileName = "CRUDv2_Table_Data.pdf" }) => {
    const handleExportToPDF = () => {
        console.log("Data passed to ExportToPDF:", data);
        console.log("Columns to Display:", columnsToDisplay);

        if (!Array.isArray(data) || data.length === 0) {
            alert("No data to export to PDF!");
            return;
        }

        const doc = new jsPDF("l", "pt", "a4");

        // Add the file name above the table
        doc.setFontSize(14);
        const xPosition = 40; // Left-aligned at 20pt from the page edge
        const yPosition = 30; // Position above the table
        doc.text(fileName, xPosition, yPosition); // Add the file name text


        // Prepare the rows
        const rows = data.map((row) =>
            columnsToDisplay.reduce((acc, col) => {
                acc[col] = row[col] || "N/A";
                return acc;
            }, {})
        );

        console.log("Processed Rows:", rows);

        // Generate the table
        doc.autoTable({
            head: [columnsToDisplay.map((col) => col.toUpperCase())],
            body: rows.map((row) => columnsToDisplay.map((col) => row[col])),
            startY: 50, // Adjust to leave space for the title
            styles: { fontSize: 10, cellPadding: 4 },
            headStyles: { fillColor: "#1E3A8A", textColor: "#ffffff" },
        });

        doc.save(`${fileName}.pdf`);
    };

    return (
        <button
            onClick={handleExportToPDF}
            className="py-2 px-3 bg-blue-700 hover:bg-blue-500 text-white rounded-sm"
        >
            Export to PDF
        </button>
    );
};

export default ExportToPDF;
