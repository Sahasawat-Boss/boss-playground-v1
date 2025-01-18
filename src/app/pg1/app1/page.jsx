"use client";

import { useState, useEffect } from "react";
import { MdAppRegistration } from "react-icons/md";
import Container from "../../components/container";
import NavBar from "../../Components/nav";
import Footer from "../../Components/footer";
import BackButton from "../../components/backButton";
import ScrollUpButton from "@/app/components/scrollUp";
import ExportToExcel from "./components/exportToExcel ";
import SearchOptions from "./components/searchOption";
import ButtonAdd from "./components/buttonAdd";

const Crude2 = () => {
    const [crudv2Data, setCrudv2Data] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/crudV2");
                if (!response.ok) {
                    throw new Error(`Failed to fetch data: ${response.statusText}`);
                }
                const data = await response.json();
                setCrudv2Data(data.crudv2Data);
                console.log("Successfully Fetched crudv2 Data:", data.crudv2Data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

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
                return "bg-[#37a556] text-white text-[1.05rem] rounded-full px-3 pb-1";
            } else if (status.toLowerCase() === "inactive") {
                return "bg-[#e95151] text-white text-[1.05rem] rounded-full px-3 pb-1";
            }
            return "bg-gray-300 text-black rounded-full px-3 py-1 pb-2";
        };

        return (
            <div className="shadow-lg overflow-x-auto mx-8">
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="sticky left-0 z-50 bg-[#dbdbdb] py-3 px-5 text-left font-bold uppercase border border-[#ffffff] w-[60px]">
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
                                    className={`sticky ${index === 0 ? "left-0" : ""
                                        } z-10 bg-[#dbdbdb] py-3 px-6 text-left font-bold uppercase border border-[#ffffff] ${index === 0 ? "w-[200px]" : ""
                                        }`}
                                >
                                    {column}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {filteredData.map((row, index) => {
                            const isSelected = selectedRows.some(
                                (selectedRow) => selectedRow.index === index
                            );
                            return (
                                <tr key={index} className={`${isSelected ? "bg-blue-100" : ""}`}>
                                    <td className="sticky left-0 z-50 bg-[#dbdbdb] py-3 px-5 text-left font-bold uppercase border border-[#ffffff] w-[60px]">
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
                                            className={`py-2 px-6 border border-[#d8d8d8] hover:bg-blue-100 truncate ${column === "status" ? "text-center" : ""
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
                {/* Title Section*/}
                <div className="flex flex-col items-center pb-10 animate-fade-in-up">
                    <h1 className="flex text-3xl items-center text-center text-black dark:text-white py-3 font-semibold ">
                        <span className="mr-1 mt-1 text-3xl animate-bounce"><MdAppRegistration /></span> CRUD Application v2
                    </h1>
                    <p className="text-black dark:text-white text-center w-[550px]">
                        "CRUD Application v2 enables users to efficiently GET, POST, and DELETE data from a database for streamlined management."
                    </p>
                </div>

                {/* CRUDv2 Section*/}
                <div className="px-10 flex flex-col bg-white dark:bg-black animate-fade-in">

                    <SearchOptions />

                    {/* Button Section */}
                    <div className="flex px-8 mb-2 gap-2 animate-fade-in">

                        <ButtonAdd />

                        <ExportToExcel
                            data={crudv2Data}
                            columnsToDisplay={columnsToDisplay}
                            fileName="CRUDv2 Table Data.xlsx"
                        />

                        <button className="py-2 px-3 bg-gray-500 hover:bg-gray-400 text-white rounded-sm">
                            Delete
                        </button>
                    </div>

                    {/* Render Table From CRUDv2 Collection */}
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
