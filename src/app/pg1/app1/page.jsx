"use client";

import { useState, useEffect } from "react";
import { MdAppRegistration } from "react-icons/md";
import { IoReload } from "react-icons/io5";
import Container from "../../components/container";
import NavBar from "../../Components/nav";
import Footer from "../../Components/footer";
import BackButton from "../../components/backButton";
import ScrollUpButton from "@/app/components/scrollUp";
import ExportToExcel from "./components/exportToExcel ";
import ExportToPDF from "./components/exportToPdf";
import SearchOptions from "./components/searchOption";
import ButtonAdd from "./components/buttonAdd";

const Crude2 = () => {
    const [crudv2Data, setCrudv2Data] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await fetch("/api/crudV2");
            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.statusText}`);
            }
            const data = await response.json();
            setCrudv2Data(data.crudv2Data);
            console.log("Successfully fetched CRUDv2 data:", data.crudv2Data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const columnsToDisplay = ["name", "company_name", "status", "age", "fruit", "phone", "email", "comments"];

    const RenderTableCrudV2 = () => {
        const [selectedRows, setSelectedRows] = useState([]);

        const toggleRowSelection = (row, index) => {
            setSelectedRows((prev) =>
                prev.some((selectedRow) => selectedRow.index === index)
                    ? prev.filter((selectedRow) => selectedRow.index !== index)
                    : [...prev, { ...row, index }]
            );
        };

        const toggleSelectAll = () => {
            if (selectedRows.length === crudv2Data.length) {
                setSelectedRows([]); // Deselect all
            } else {
                setSelectedRows(crudv2Data.map((row, index) => ({ ...row, index }))); // Select all
            }
        };

        const isAllSelected = selectedRows.length === crudv2Data.length;
        const filteredData = crudv2Data;

        const getStatusTagStyles = (status) => {
            if (status.toLowerCase() === "active") {
                return "bg-[#ebffe7] text-green-600 border-green-400 rounded-full border px-2 pb-1";
            } else if (status.toLowerCase() === "inactive") {
                return "bg-[#ffe7e7] text-red-600 border-red-300 rounded-full border px-2 pb-1";
            }
            return "";
        };

        return (
            <div className="shadow-lg overflow-x-auto mx-8">
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="sticky left-0 z-50 bg-[#e7e7e7] py-3 px-5 border border-[#ffffff] w-[60px]">
                                <input
                                    type="checkbox"
                                    className="w-6 h-6"
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
                                    className={`sticky ${index === 0 ? "left-0 " : ""
                                        } z-10 bg-[#e7e7e7] py-3 px-6 text-left font-semibold uppercase border border-[#ffffff] ${index === 0 ? "w-[200px] " : ""
                                        }`}
                                >
                                    {column}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {loading
                            ? Array(2)
                                .fill(null)
                                .map((_, index) => (
                                    <tr key={`loading-${index}`} className="bg-gray-100 animate-pulse">
                                        <td className="py-3 px-5 text-left font-bold uppercase border border-[#e7e7e7]">
                                            <input
                                                type="checkbox"
                                                className="w-6 h-6"
                                                disabled
                                            />
                                        </td>
                                        {columnsToDisplay.map((column) => (
                                            <td
                                                key={column}
                                                className="py-2 px-6 border border-[#e7e7e7] truncate"
                                            >
                                                <div className="text-gray-600">Loading Data ...</div>
                                            </td>
                                        ))}
                                    </tr>
                                ))
                            : filteredData.map((row, index) => {
                                const isSelected = selectedRows.some(
                                    (selectedRow) => selectedRow.index === index
                                );
                                return (
                                    <tr key={index} className={`${isSelected ? "bg-blue-200" : ""}`}>
                                        <td className="sticky left-0 z-50 bg-[#e7e7e7] py-3 px-5 text-left font-bold uppercase border border-[#ffffff] w-[60px]">
                                            <input
                                                type="checkbox"
                                                className="w-6 h-6"
                                                checked={isSelected}
                                                onChange={() => toggleRowSelection(row, index)}
                                                style={{
                                                    backgroundColor: isSelected ? "#1E3A8A" : "",
                                                    borderColor: "#1E3A8A",
                                                }}
                                            />
                                        </td>
                                        {columnsToDisplay.map((column) => (
                                            <td
                                                key={column}
                                                className={`py-2 px-6 border border-[#e7e7e7] hover:bg-blue-100 truncate ${column === "status" ? "text-center" : ""
                                                    }`}
                                            >
                                                {column === "status" ? (
                                                    <span className={getStatusTagStyles(row[column])}>
                                                        {row[column]}
                                                    </span>
                                                ) : (
                                                    row[column]
                                                )}
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

    return (
        <main className="bg-white dark:bg-black flex flex-col ">
            <Container>
                <NavBar />
                <BackButton />
                <div className="flex flex-col items-center pb-10 animate-fade-in-up">
                    <h1 className="flex text-3xl items-center text-center text-black dark:text-white py-3 font-semibold ">
                        <span className="mr-1 mt-1 text-3xl animate-bounce">
                            <MdAppRegistration />
                        </span>
                        CRUD Application v2
                    </h1>
                    <p className="text-black dark:text-white text-center w-[550px]">
                        CRUD Application v2 enables efficient GET, POST, and DELETE operations on the CRUDv2 data collection
                        in MongoDB. It also allows data filtering and supports exporting results to an Excel file for easy
                        sharing and analysis.
                    </p>
                </div>

                <div className="px-10 flex flex-col flex-grow bg-white dark:bg-black animate-fade-in ">
                    <SearchOptions />

                    <div className="flex px-8 mb-2 gap-1 animate-fade-in-left-right">
                        <button
                            className="px-3 text-xl bg-slate-300 dark:bg-gray-700 hover:bg-slate-200 hover:dark:bg-slate-500 text-black dark:text-white rounded-sm"
                            onClick={fetchData} // Reload table data
                        >
                            <IoReload />
                        </button>

                        <ButtonAdd />

                        {/* Export to PDF button */}
                        <ExportToPDF
                            data={crudv2Data}
                            columnsToDisplay={columnsToDisplay}
                            fileName="CRUDv2_Table_Data.pdf"
                        />

                        {/* Export to Excel button */}
                        <ExportToExcel
                            data={crudv2Data}
                            columnsToDisplay={columnsToDisplay}
                            fileName="CRUDv2 Table Data.xlsx"
                        />


                        <button className="py-2 px-3 bg-[#f04747] dark:bg-[#a72e2e] hover:bg-[#f09393] hover:dark:bg-[#f36464] text-white rounded-sm">
                            Delete
                        </button>
                    </div>

                    <div className="pb-24 w-full text-black dark:text-black">
                        <RenderTableCrudV2 />
                    </div>
                </div>
                <Footer />
            </Container>
            <ScrollUpButton />
        </main>
    );
};

export default Crude2;
