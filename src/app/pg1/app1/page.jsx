"use client";

import { useState, useEffect } from "react";
import Container from "../../components/container";
import NavBar from "../../Components/nav";
import Footer from "../../Components/footer";
import BackButton from "../../components/backButton";
import ScrollUpButton from "@/app/components/scrollUp";
import * as XLSX from 'xlsx'; // Import the xlsx library
import SearchOptions from "./components/searchOption";

const Crude2 = () => {
    const [sampleData, setSampleData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/sampleData");
            const data = await response.json();
            setSampleData(data.sampleData);
            console.log("Successfully Fetched Sample Data:", data.sampleData);
        };

        fetchData();
    }, []);

    const columnsToDisplay = ["username", "name", "birthdate", "email", "accounts"];

    const RenderTable2 = () => {
        const [selectedRows, setSelectedRows] = useState([]);

        const toggleRowSelection = (row) => {
            setSelectedRows((prev) =>
                prev.some((selectedRow) => selectedRow.username === row.username)
                    ? prev.filter((selectedRow) => selectedRow.username !== row.username)
                    : [...prev, row]
            );
        };

        const toggleSelectAll = () => {
            if (selectedRows.length === sampleData.length) {
                setSelectedRows([]); // Deselect all
            } else {
                setSelectedRows(sampleData); // Select all
            }
        };

        const isAllSelected = selectedRows.length === sampleData.length;

        const filteredData = sampleData.filter((row) =>
            row.username.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return (
            <div className="shadow-lg overflow-x-auto mx-8">
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="sticky left-0 z-50 bg-[#d6d6d6] py-4 px-6 text-left font-bold uppercase border border-gray-400 w-[60px]">
                                <input
                                    type="checkbox"
                                    className="w-6 h-6 rounded-full"
                                    checked={isAllSelected}
                                    onChange={toggleSelectAll}
                                    style={{
                                        backgroundColor: isAllSelected ? "#1E3A8A" : "transparent",
                                        borderColor: "#1E3A8A",
                                    }}
                                />
                            </th>
                            {columnsToDisplay.map((column, index) => (
                                <th
                                    key={column}
                                    className={`sticky ${index === 0 ? "left-0" : ""} z-10 bg-[#d6d6d6] py-4 px-6 text-left font-bold uppercase border border-gray-400 ${index === 0 ? "w-[200px]" : ""}`}
                                >
                                    {column}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {filteredData.map((row, index) => {
                            const isSelected = selectedRows.some(
                                (selectedRow) => selectedRow.username === row.username
                            );
                            return (
                                <tr key={index} className={`${isSelected ? "bg-blue-100" : ""}`}>
                                    <td className="sticky left-0 z-50 py-4 px-6 border border-gray-400 w-[60px] hover:bg-blue-100">
                                        <input
                                            type="checkbox"
                                            className="w-6 h-6"
                                            checked={isSelected}
                                            onChange={() => toggleRowSelection(row)}
                                            style={{
                                                backgroundColor: isSelected ? "#1E3A8A" : "transparent",
                                                borderColor: "#1E3A8A",
                                            }}
                                        />
                                    </td>
                                    {columnsToDisplay.map((column) => (
                                        <td key={column} className="py-4 px-6 border  border-gray-400 hover:bg-blue-100">
                                            {row[column]}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    };

    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(sampleData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Sample Data");
        XLSX.writeFile(wb, "sample_data.xlsx");
    };

    return (
        <main className="bg-white dark:bg-black flex flex-col ">
            <Container>
                <NavBar />
                <BackButton />
                <div className="flex flex-col items-center pb-10">
                    <h1 className="text-3xl text-center text-black dark:text-white py-3 font-semibold">
                        CRUD Application v2
                    </h1>
                    <p className="text-black dark:text-white text-center w-[550px]">
                        "CRUD Application v2 enables users to efficiently GET, POST, and DELETE data from a database for streamlined management."
                    </p>
                </div>

                <div className="px-10 flex flex-col bg-white dark:bg-[#292929]">
                    <SearchOptions />
                    <div className="px-8">
                        <div className="flex items-center justify-center w-[fit%] py-3 my-4 gap-3 bg-gray-200">
                            <label className="label text-black font-semibold">
                                Search by Username:
                            </label>
                            <input
                                type="text"
                                placeholder="please enter username .........."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="px-4 py-2 rounded-md text-black"
                            />
                        </div>
                    </div>
                    
                    <div className="flex px-8 mb-2 gap-2">
                        <button
                            className="bg-blue-700 hover:bg-blue-600 text-white rounded-sm py-2 px-3"
                            onClick={() => document.getElementById('my_modal_2').showModal()}
                        >
                            Add Data
                        </button>
                        <dialog id="my_modal_2" className="modal text-black ">
                            <div className="modal-box rounded-md h-[600px] w-[500px]">
                                <h3 className="font-bold text-lg">Add Data</h3>
                                <p className="py-4">Press ESC key or click outside to close</p>
                            </div>
                            <form method="dialog" className="modal-backdrop  bg-black opacity-25">
                                <button>close</button>
                            </form>
                        </dialog>
                        
                        <button
                            onClick={exportToExcel}
                            className="py-2 px-3 bg-blue-700 hover:bg-blue-600 text-white rounded-sm"
                        >
                            Export Excel
                        </button>
                        <button className="py-2 px-3 bg-gray-500 hover:bg-gray-400 text-white rounded-sm">
                            Delete
                        </button>
                    </div>
                    <div className="pb-24 w-full text-black dark:text-black">
                        <RenderTable2 />
                    </div>
                </div>
                <Footer />
            </Container>
            <ScrollUpButton />
        </main>
    );
};

export default Crude2;
