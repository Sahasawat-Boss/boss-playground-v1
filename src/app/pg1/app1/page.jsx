"use client";

import { useSession } from 'next-auth/react'
import { useState, useEffect } from "react";
import { IoReload } from "react-icons/io5";
import { IoIosWarning } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import Container from "../../components/container";
import NavBar from "../../Components/nav";
import Footer from "../../Components/footer";
import BackButton from "../../components/backButton";
import TitleSection from './components/titleSection';
import ScrollUpButton from "@/app/components/scrollUp";
import ExportToExcel from "./components/exportToExcel ";
import ExportToPDF from "./components/exportToPdf";
import ButtonAdd from "./components/buttonAdd";
import { Tooltip } from 'react-tooltip';

const Crude2 = () => {
    const { data: session } = useSession();

    const [crudv2Data, setCrudv2Data] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedRows, setSelectedRows] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [showNotification, setShowNotification] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);


    //** FOR Search Option
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    const handleClear = () => {
        setName('');
        setStatus('');
        fetchData(); // Fetch all data after clearing filters
    };


    //** GET Data
    const fetchData = async () => {
        try {
            const query = new URLSearchParams();
            if (name) query.append("name", name);
            if (status) query.append("status", status);

            const response = await fetch(`/api/crudV2?${query.toString()}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.statusText}`);
            }
            const data = await response.json();
            setCrudv2Data(data.crudv2Data);
            console.log("Successfully fetched filtered CRUDv2 data:", data.crudv2Data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchData();
    }, []);

    //** DELETE Data
    const deleteSelectedRows = async () => {
        try {
            const ids = selectedRows.map((row) => row._id); // Extract `_id` from selected rows
            const response = await fetch("/api/crudV2", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ids }), // Send IDs as JSON
            });

            if (!response.ok) {
                throw new Error(`Failed to delete data: ${response.statusText}`);
            }

            const result = await response.json();
            console.log("Successfully deleted data:", result);

            // Show notification
            setShowNotification(true);
            setTimeout(() => {
                setFadeOut(true); // Start fade-out
                setTimeout(() => {
                    setShowNotification(false); // Hide notification after fade-out
                    setFadeOut(false); // Reset fade-out state
                }, 300); // Duration of fade-out transition
            }, 2000); // Duration to show notification before fade-out

            // Refresh data
            fetchData();
            setSelectedRows([]);
        } catch (error) {
            console.error("Error deleting data:", error);
        }
    };



    const columnsToDisplay = ["name", "company_name", "status", "age", "plan", "phone", "email", "comments"];

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
                return "bg-[#ebffe7] text-sm text-green-700 border-green-500 rounded-full border px-2 pb-[2px]";
            } else if (status.toLowerCase() === "inactive") {
                return "bg-[#ffe7e1] text-sm text-red-700 border-red-400 rounded-full border px-2 pb-[2px]";
            }
            return "";
        };

        {/*Generate Table Section*/ }
        return (
            <div className="shadow-lg overflow-x-auto mx-8 rounded-sm">

                <table className="table-auto w-full ">
                    <thead>
                        <tr className="bg-gray-200 text-black">
                            <th className="sticky left-0 z-50 bg-[#e7e7e7] pt-4 pb-2 px-5 border border-[#ffffff] w-[60px] truncate">
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

                            {/*//** Edit Table Head Here*/}
                            {["Name", "Company Name", "Status", "Age", "Plan", "Phone", "Email", "Comments"].map(
                                (column, index) => (
                                    <th
                                        key={column}
                                        className={`sticky truncate ${index === 0 ? "left-0 " : ""
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
                                        <td className="pt-2 px-5 text-left font-bold uppercase border border-[#e7e7e7] ">
                                            <input
                                                type="checkbox"
                                                className="w-6 h-6"
                                                disabled
                                            />
                                        </td>
                                        {["name", "company_name", "status", "age", "plan", "phone", "email", "comments"].map(
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
                                        <td className="sticky left-0 z-50 bg-[#e7e7e7] py-3 px-5 text-left font-bold uppercase border border-[#ffffff] w-[60px] truncate">
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
                                        {["name", "company_name", "status", "age", "plan", "phone", "email", "comments"].map(
                                            (column) => (
                                                <td
                                                    key={column}
                                                    className={`py-2 px-6 border border-[#e7e7e7] hover:bg-blue-100 truncate ${column === "status" ? "text-center" : ""
                                                        }`}
                                                >
                                                    {/* Special handling for the 'plan' column */}
                                                    {column === "plan" ? (
                                                        Array.isArray(row[column]) ? row[column].join(", ") : row[column]
                                                    ) : column === "status" ? (
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

    //TODOs: ===== Page Return Over here! ========

    return (
        <main className="bg-white dark:bg-black flex flex-col ">
            <Container>

                <NavBar session={session} />
                <BackButton />

                {showNotification && (
                    <div
                        className={`fixed left-1/2 top-16 z-[99999] flex w-fit -translate-x-1/2 transform items-center justify-center text-center rounded-md border px-8 py-3 border-green-600 bg-white text-green-600 shadow-md ${fadeOut ? "opacity-0 transition-opacity duration-3000" : "opacity-100"
                            }`}
                    >
                        <span className="font-semibold text-xl mr-2"><FaRegCheckCircle /></span>
                        <span className="font-semibold">Deleted Data Successfully</span>
                    </div>
                )}

                <TitleSection />

                <div className="px-10 flex flex-col flex-grow bg-white dark:bg-black animate-fade-in ">

                    {/*//** ===== Search Options =====*/}
                    <div className="bg-gray-200 mx-8 mb-6 text-gray-600 rounded-md shadow-md overflow-hidden">
                        <button
                            onClick={toggleCollapse}
                            className="w-full flex items-center justify-between py-3 px-4 bg-[#e6e6e6] hover:bg-[#dbdbdb] font-semibold focus:outline-none border border-gray-300"
                            aria-expanded={isOpen}
                        >
                            <span className="flex items-center">
                                <span className={`transform text-sm transition-transform duration-[0.4s] ${isOpen ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                                <span className="ml-2 ">Search Options</span>
                            </span>
                        </button>

                        <div
                            className={`transition-all duration-[0.38s] ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} flex justify-center overflow-hidden bg-white`}
                        >
                            <div className="pb-5 flex justify-center items-center text-center bg-gray-100 w-full">
                                <div className="mt-3 flex flex-col space-y-8 w-full ">
                                    <div className="grid grid-cols-2 gap-16 px-20">
                                        <div className="flex flex-col">
                                            <label htmlFor="name" className="mb-1 text-left font-semibold text-gray-700">
                                                Name
                                            </label>
                                            <input
                                                id="name"
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="py-2 px-4 border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                                                placeholder="Enter name"
                                            />
                                        </div>

                                        <div className="flex flex-col">
                                            <label htmlFor="status" className="mb-1 text-left font-semibold text-gray-700">
                                                Status
                                            </label>
                                            <select
                                                id="status"
                                                value={status}
                                                onChange={(e) => setStatus(e.target.value)}
                                                className={`py-2 px-4 border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition ${status === '' ? 'text-gray-400' : 'text-black'
                                                    }`}
                                            >
                                                <option value="" disabled hidden>
                                                    Select status
                                                </option>
                                                <option value="Active" className="text-black">
                                                    Active
                                                </option>
                                                <option value="Inactive" className="text-black">
                                                    Inactive
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            onClick={handleClear}
                                            className="w-fit px-6 py-2 mr-2 bg-slate-400 text-white rounded-sm hover:bg-slate-500 shadow-md"
                                        >
                                            Clear
                                        </button>
                                        <button
                                            onClick={fetchData}
                                            className="w-fit px-4 py-2 bg-blue-700 text-white rounded-sm hover:bg-blue-500 shadow-md"
                                        >
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*//** ===== Search Options =====*/}

                    {/* Button Section*/}
                    <div className="flex px-8 mb-2 gap-2 items-center">

                        <ButtonAdd fetchData={fetchData} />

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
                                    <div className="bg-red-100 rounded-full px-2 py-1 pb-2 mb-3"><IoIosWarning className="text-3xl" /></div>
                                    <h3>Are you sure?</h3>
                                </div>

                                <hr className="border-1 border-gray-300 w-full" />

                                <div className="my-14 bg-white text-black text-[1.2rem] text-center">
                                    <p>Are you sure you want to delete these selected Data?</p>
                                    <p>This action cannot be undone.</p>
                                </div>

                                <div className="mb-2 flex justify-center space-x-3">
                                    <button
                                        type="button"
                                        onClick={() => document.getElementById("modal_confirm_delete").close()}
                                        className="px-6 py-[8px] bg-slate-500 text-white rounded-sm hover:bg-slate-400"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        onClick={() => {
                                            deleteSelectedRows();
                                            document.getElementById("modal_confirm_delete").close();
                                        }}
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
