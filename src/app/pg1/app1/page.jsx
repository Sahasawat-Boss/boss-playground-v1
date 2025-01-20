"use client";

import { useState, useEffect } from "react";
import { MdAppRegistration } from "react-icons/md";
import { IoReload } from "react-icons/io5";
import { IoIosWarning } from "react-icons/io";
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
    const [selectedRows, setSelectedRows] = useState([]);


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

    const RenderTableCrudV2 = ({ selectedRows, setSelectedRows, crudv2Data, loading }) => {
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

        const getStatusTagStyles = (status) => {
            if (status.toLowerCase() === "active") {
                return "bg-[#ebffe7] text-sm text-green-600 border-green-400 rounded-full border px-2 pb-[2px]";
            } else if (status.toLowerCase() === "inactive") {
                return "bg-[#ffe7e7] text-sm text-red-600 border-red-300 rounded-full border px-2 pb-[2px]";
            }
            return "";
        };

        {/*Generate Table Section*/ }
        return (
            <div className="shadow-lg overflow-x-auto mx-8 rounded-sm">

                <table className="table-auto w-full ">
                    <thead>
                        <tr className="bg-gray-200 text-black">
                            <th className="sticky left-0 z-50 bg-[#e7e7e7] pt-4 pb-2 px-5 border border-[#ffffff] w-[60px]">
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

                            {["Name", "Company Name", "Status", "Age", "Fruit", "Phone", "Email", "Comments"].map(
                                (column, index) => (
                                    <th
                                        key={column}
                                        className={`sticky ${index === 0 ? "left-0 " : ""
                                            } z-10 bg-[#e7e7e7] py-3 px-6 text-left font-semibold border border-[#ffffff] ${index === 0 ? "w-[200px] " : ""
                                            }`}
                                    >
                                        {column}
                                    </th>
                                )
                            )}
                        </tr>
                    </thead>

                    <tbody className="bg-white text-black">
                        {loading
                            ? Array(5)
                                .fill(null)
                                .map((_, index) => (
                                    <tr key={`loading-${index}`} className="bg-gray-100 animate-pulse">
                                        <td className="pt-2 px-5 text-left font-bold uppercase border border-[#e7e7e7]">
                                            <input
                                                type="checkbox"
                                                className="w-6 h-6"
                                                disabled
                                            />
                                        </td>
                                        {["name", "company_name", "status", "age", "fruit", "phone", "email", "comments"].map(
                                            (column) => (
                                                <td
                                                    key={column}
                                                    className="py-3 px-6 border border-[#e7e7e7] truncate"
                                                >
                                                    <div className="text-gray-600">Loading Data ...</div>
                                                </td>
                                            )
                                        )}
                                    </tr>
                                ))
                            : crudv2Data.map((row, index) => {
                                const isSelected = selectedRows.some(
                                    (selectedRow) => selectedRow.index === index
                                );
                                return (
                                    <tr
                                        key={index}
                                        className={`${isSelected ? "bg-blue-200" : ""}`}
                                    >
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
                                        {["name", "company_name", "status", "age", "fruit", "phone", "email", "comments"].map(
                                            (column) => (
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
                                            )
                                        )}
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        );
        {/*Generate Table Section*/ }
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
                </div>

                <div className="px-10 flex flex-col flex-grow bg-white dark:bg-black animate-fade-in ">

                    <SearchOptions />

                    {/* Button Section*/}
                    <div className="flex px-8 mb-2 gap-2 items-center">
                        <button
                            className="px-3 py-[9px] text-xl bg-slate-300 dark:bg-gray-700 hover:bg-slate-200 hover:dark:bg-slate-500 text-black dark:text-white rounded-sm"
                            onClick={fetchData}
                        >
                            <IoReload />
                        </button>

                        <ButtonAdd />

                        <ExportToPDF data={crudv2Data} columnsToDisplay={columnsToDisplay} />

                        <ExportToExcel data={crudv2Data} columnsToDisplay={columnsToDisplay} />

                        {/*Button Delete and modal*/}
                        <button
                            disabled={selectedRows.length === 0}
                            className={`py-2 px-3 rounded-sm ${selectedRows.length > 0
                                ? "bg-red-700 hover:bg-red-400 text-white"
                                : "bg-gray-300 dark:bg-[#afafaf] text-gray-600 dark:text-gray-600 cursor-not-allowed"
                                }`}
                            onClick={() => document.getElementById("modal_confirm_delete").showModal()}
                        >
                            Delete
                        </button>

                        <dialog id="modal_confirm_delete" className="modal text-black">
                            <div className="modal-box rounded-lg h-fit max-w-[580px] px-8">
                                <div className="flex flex-col justify-center items-center pb-3 font-semibold text-[1.5rem] text-red-500 ">
                                    <div className="bg-red-100 rounded-full px-2 py-1 pb-2 mb-2"><IoIosWarning  className="text-4xl"/></div>
                                    <h3>Are you sure?</h3>
                                </div>

                                <hr className="border-1 border-gray-300 w-full" />

                                <div className="my-14 bg-white text-black text-[1.2rem] text-center">
                                    <p>Are you sure you want to delete these selected Data?</p>
                                    <p>This action cannot be undone.</p>
                                </div>

                                <div className="mb-4 flex justify-center space-x-3">
                                    <button
                                        type="button"
                                        onClick={() => document.getElementById("modal_confirm_delete").close()}
                                        className="px-6 py-[8px] bg-slate-500 text-white rounded-sm hover:bg-slate-400"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-5 py-[8px] bg-red-600 text-white rounded-sm hover:bg-red-400"
                                    >
                                        Confirm
                                    </button>
                                </div>
                            </div>
                        </dialog>
                        {/*Button Delete and modal*/}

                    </div>
                    {/* Button Section*/}

                    <div className="pb-24 w-full">
                        <RenderTableCrudV2
                            crudv2Data={crudv2Data}
                            loading={loading}
                            selectedRows={selectedRows}
                            setSelectedRows={setSelectedRows}
                        />
                    </div>
                </div>
                <Footer />
            </Container>
            <ScrollUpButton />
        </main>
    );
};

export default Crude2;
