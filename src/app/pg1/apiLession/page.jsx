"use client";

import { useState, useEffect } from "react";
import Container from "../../components/container";
import NavBar from "../../Components/nav";
import Footer from "../../Components/footer";
import BackButton from "../../components/backButton";
import ScrollUpButton from "@/app/components/scrollUp";
import ArrowDown from "./component/arrowDown";

const ApiLessionPage = () => {
  const [sampleData, setSampleData] = useState([]); // Ensure this is set to an empty array.
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/sampleData"); // This points to the sampleData route.js
      const data = await response.json();
      setSampleData(data.sampleData);
      console.log("Successfully Fetched Sample Data:", data.sampleData); // Logs the sampleData to the console
    };

    fetchData();
  }, []);

  // Define the columns you want to display in the table
  const columnsToDisplay = ["username", "name", "birthdate", "email", "accounts"];

  // Function to create table from Sample Data from Boss's MongoDB
  const renderTable = () => {

    if (sampleData.length === 0) {
      return (
        <div className="text-center text-white py-4 bg-gray-800 rounded-lg">
          Fetching Sample Data from Boss's MongoDB...
        </div>
      );
    }

    return (
      <table className="border-collapse border border-white">
        <thead>
          <tr>
            {columnsToDisplay.map((column) => (
              <th key={column} className="border border-white p-2 text-left text-white">
                {column.charAt(0).toUpperCase() + column.slice(1)} {/* Capitalize the first letter */}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sampleData.map((data, index) => (
            <tr key={index}>
              {columnsToDisplay.map((column) => (
                <td key={column} className="border border-white p-2 text-white">
                  {/* Ensure nested objects or arrays are stringified */}
                  {typeof data[column] === "object" && data[column] !== null
                    ? JSON.stringify(data[column]) // Convert nested objects/arrays to string
                    : data[column] // Display primitive values directly
                  }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };


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
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"
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
            Restful API - Method: GET
          </h1>
          <p className="text-black dark:text-white text-center w-[580px]">
            This page demonstrates and tests the HTTP GET method for retrieving sample data from a MongoDB database, showcasing efficient querying and data fetching.
          </p>
          <img
            className="mt-4 animate-fade-in-up rounded-lg"
            src="https://developers.giphy.com/branch/master/static/api-512d36c09662682717108a38bbb5c57d.gif"
            alt="React Gif"
            height={0}
            width={280}
          />
        </div>

        {/* Sample Data from Boss's MongoDB in JSON */}
        <div className="flex items-center justify-center py-16">
          <div className="text-black dark:text-white w-[650px]">
            <h1 className="text-xl font-semibold my-2">Sample Data from Boss's MongoDB</h1>
            <p style={{ textIndent: "1.2rem" }} className="text-lg mb-4">
              This is a sample dataset created by inserting a document into a MongoDB collection. It is fetched directly from the database to demonstrate how data can be stored, queried, and retrieved efficiently in real time.
            </p>
            <div className="bg-[#242424] border-2 border-white h-64 overflow-y-scroll animate-fade-in">
              <pre className="text-[#52cf52]">
                {JSON.stringify(sampleData, null, 2)}
              </pre>
            </div>
          </div>
        </div>
        {/* Sample Data from Boss's MongoDB in JSON */}

        <ArrowDown />

        {/* Table Convert from Sample Data*/}
        <div className="flex flex-col items-center justify-center py-10">
          <div className="text-black dark:text-white w-[80%]">
            <h1 className="text-xl font-semibold my-2">Converting Sample Data to Simple Table</h1>
            <p style={{ textIndent: "1.2rem" }} className="text-lg mb-4">
              Converting sample data into a table format involves displaying key attributes in columns such as
              <span className="font-bold"> username, name, birthdate, email, and accounts</span>
              . This organization helps present the data clearly and allows for easy analysis.
            </p>
          </div>

          <div className="bg-black overflow-x-auto">
            {renderTable()}
          </div>
        </div>
        {/* Table Convert from Sample Data*/}

        <ArrowDown />

        {/* Table 2 that Convert from Sample Data */}
        <div className="flex flex-col items-center justify-center py-10 ">
          <div className="text-black dark:text-white w-[80%]">
            <h1 className="text-xl font-bold">
              Transformed a Simple Table into a Sleek and Polished Design
            </h1>
            <p style={{ textIndent: "1.2rem" }} className="text-lg mb-4">
              This table has been elevated with a sleek, modern design that enhances both its appearance and usability. A new Username filter has been added, allowing users to search and narrow results instantly, making data exploration more intuitive and efficient.
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex py-3 px-8 gap-3 bg-gray-600 rounded-xl mt-6 my-8 animation-appearUp">
            <label className="label text-white font-semibold">
              Search by Username:
            </label>
            <input
              type="text"
              placeholder="Search by Username......"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 rounded-md text-black"
            />
          </div>
          {/* Search Bar */}

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

export default ApiLessionPage;
