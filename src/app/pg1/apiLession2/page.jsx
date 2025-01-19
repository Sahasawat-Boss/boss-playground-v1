"use client";

import { useState, useEffect } from "react";
import Container from "../../components/container";
import NavBar from "../../Components/nav";
import Footer from "../../Components/footer";
import BackButton from "../../components/backButton";
import ScrollUpButton from "@/app/components/scrollUp";
import ReloadButton from "./components/reloadButton ";

const ApiLessonPage2 = () => {
    const [sampleData, setSampleData] = useState([]); // Ensure this is set to an empty array.
    const [searchQuery, setSearchQuery] = useState(""); // State for search query
    const [formData, setFormData] = useState({
        username: "",
        name: "",
        birthdate: "",
        email: "",
        accounts: "",
    });
    const [error, setError] = useState(""); //State for error message
    const [success, setSuccess] = useState(""); //State for success message

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/sampleData"); // This points to the sampleData route.js
            const data = await response.json();
            setSampleData(data.sampleData);
            console.log("Successfully Fetched Sample Data:", data.sampleData); // Logs the sampleData to the console
        };

        fetchData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/sampleData", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if (result.success) {
                setSuccess("Add data successfully, please reload page.");
                console.log("Add data successfully, please reload page");
                setFormData({ username: "", name: "", birthdate: "", email: "", accounts: "" });
            } else {
                alert("Failed to add data.");
            }
        } catch (error) {
            setError("Error adding data to database", error);
            console.error("Error submitting form:", error);
        }
    };
    // Define the columns you want to display in the table
    const columnsToDisplay = ["username", "name", "birthdate", "email", "accounts"];

    const RenderTable2 = () => {
        // Function to create table rows dynamically
        const renderTable2const = () => {
            if (sampleData.length === 0) return <p>Loading...</p>;

            // Filter data based on the search query
            const filteredData = sampleData.filter((row) =>
                row.username.toLowerCase().includes(searchQuery.toLowerCase())
            );

            return (
                <div>
                    <table className="table-fixed">
                        {/* Render the table header */}
                        <thead>
                            <tr className="bg-gray-200">
                                {columnsToDisplay.map((column) => (
                                    <th
                                        key={column}
                                        className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase"
                                    >
                                        {column}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        {/* Render the table body */}
                        <tbody className="bg-white">
                            {filteredData.map((row, index) => (
                                <tr key={index}>
                                    {columnsToDisplay.map((column) => (
                                        <td
                                            key={column}
                                            className="py-4 px-6 border-b border-gray-200 truncate "
                                        >
                                            {column === "status" ? (
                                                <span
                                                    className={`py-1 px-2 rounded-full text-xs ${row[column] === "Active"
                                                        ? "bg-green-500 text-white" : "bg-red-500 text-white"
                                                        }`}
                                                >
                                                    {row[column]}
                                                </span>
                                            ) : (
                                                row[column]
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        };

        return (
            <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
                {renderTable2const()}
            </div>
        );
    };

    return (
        <main className="bg-white dark:bg-black flex flex-col">
            <Container>
                <NavBar />
                <BackButton />
                {/* Top Section */}
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl text-center text-black dark:text-white py-3 font-semibold animate-floating">
                        Get and Post Data to Database
                    </h1>
                    <p className="text-black dark:text-white text-center w-[580px]">

                        This page demonstrates fetching (GET) and submitting (POST) data to the sampleData database, with features for displaying, searching, and adding new records.
                    </p>
                    <img
                        className="mt-4 rounded-xl animate-fade-in"
                        src="https://miro.medium.com/v2/resize:fit:1400/1*BzUPMYwp_bMx8z1BVnWkbw.gif"
                        alt="React Gif"
                        height={0}
                        width={280}
                    />
                </div>

                {/* Form Section */}
                <div className="flex flex-col items-center py-10 animate-fade-in-up ">
                    <h1 className="text-2xl font-bold text-black dark:text-white">
                        Add New Data to DataBase: sampleData
                    </h1>
                    <form
                        onSubmit={handleFormSubmit}
                        className="bg-[#eeeeee] p-6 rounded-lg w-[35%] mt-6 shadow-md shadow-[#8f8f8f] animate-fade-in-left-right"
                    >

                        {error && (
                            <div className="flex justify-center">
                                <div className="bg-red-500 w-fit text-white text-md mb-3 px-3 py-1 rounded-md">{error}</div>
                            </div>
                        )}

                        {success && (
                            <div className="flex flex-col justify-center items-center">
                                <div className="bg-green-600 w-fit text-white text-md mb-3 px-3 py-1 rounded-md">{success}</div>
                                <ReloadButton/>
                            </div>
                            
                        )}
                        <div className="flex flex-col gap-4">
                            {["username", "name", "birthdate", "email", "accounts"].map((field) => (
                                <div key={field}>
                                    <label
                                        className="block text-black font-semibold mb-1"
                                        htmlFor={field}
                                    >
                                        {field.charAt(0).toUpperCase() + field.slice(1)}
                                    </label>
                                    <input
                                        type="text"
                                        id={field}
                                        name={field}
                                        value={formData[field]}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 rounded-md text-black shadow-md"
                                        placeholder={`Enter ${field}`}
                                    />
                                </div>
                            ))}
                        </div>
                        <button
                            type="submit"
                            className="mt-8 w-full bg-[#3947c5] dark:bg-[#3543be] text-white py-2 rounded-md hover:bg-[#4957ce] shadow-md"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Table 2 that Convert from Sample Data */}
                <div className="flex flex-col items-center justify-center py-10 ">
                    <div className="text-black dark:text-white w-[80%]">
                        <h1 className="text-xl font-bold">
                            Data from sampleData from Boss's MongoDB
                        </h1>
                    </div>

                    {/* Search Bar*/}
                    <div className="flex py-3 px-8 gap-3 bg-gray-600 rounded-xl mt-6 my-8 animation-appearUp">
                        <label className="label text-white font-semibold">
                            Search by Username:
                        </label>
                        <input
                            type="text"
                            placeholder="Search by Username......"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="px-4 py-2 rounded-md text-black dark:text-black"
                        />
                    </div>
                    {/* Search Bar*/}

                    <div className=" pb-24 text-black dark:text-black">
                        <RenderTable2 />
                    </div>
                </div>
                {/* Table 2 that Convert from Sample Data */}


                <Footer />
            </Container>
            <ScrollUpButton />
        </main>
    );
};

export default ApiLessonPage2;
