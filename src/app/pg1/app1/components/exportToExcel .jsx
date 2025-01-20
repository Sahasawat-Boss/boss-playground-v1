import * as XLSX from "xlsx";

const ExportToExcel = ({ data, columnsToDisplay, fileName = "exported_data.xlsx" }) => {
    const handleExport = () => {
        // Filter the data based on the displayed columns
        const filteredData = data.map((row) => {
            const rowData = {};
            columnsToDisplay.forEach((column) => {
                if (column === "fruit") {
                    // Convert the fruit array to a comma-separated string
                    rowData[column] = Array.isArray(row[column])
                        ? row[column].join(", ")
                        : row[column] || "";
                } else {
                    rowData[column] = row[column];
                }
            });
            return rowData;
        });

        // Create an Excel sheet
        const ws = XLSX.utils.json_to_sheet(filteredData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Data");
        XLSX.writeFile(wb, fileName);
    };

    return (
        <button
            onClick={handleExport}
            className="py-2 px-3 bg-blue-700 hover:bg-blue-600 text-white rounded-sm shadow-md"
        >
            Export to Excel
        </button>
    );
};

export default ExportToExcel;
