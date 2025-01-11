"use client";

import { useState, useEffect } from "react";
import Container from "../../components/container";
import NavBar from "../../Components/nav";
import Footer from "../../Components/footer";
import BackButton from "../../components/backButton";
import ScrollUpButton from "@/app/components/scrollUp";
import { RiArrowDownDoubleFill } from "react-icons/ri";

const ApiLessionPage = () => {
  const [sampleData, setSampleData] = useState([]);

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
  const columnsToDisplay = ["username", "name", "address", "birthdate", "email",];

  // Function to create table from Sample Data from Boss's MongoDB
  const renderTable = () => {
    if (sampleData.length === 0) return <p>Loading...</p>;

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

  return (
    <main className="bg-[#161616] flex flex-col">
      <Container>
        <NavBar />
        <BackButton />
        {/* Top Section */}
        <div className="flex flex-col items-center">
          <h1 className="text-3xl text-center text-white py-3 font-semibold animate-floating">
            Restful API - Method: GET
          </h1>
          <p className="text-white text-center w-[580px]">
            This page demonstrates and tests the HTTP GET method for retrieving sample data from a MongoDB database, showcasing efficient querying and data fetching.
          </p>
          <img
            className="mt-4 my-10 animate-fade-in-up rounded-lg"
            src="https://developers.giphy.com/branch/master/static/api-512d36c09662682717108a38bbb5c57d.gif"
            alt="React Gif"
            height={0}
            width={280}
          />
        </div>

        {/* Sample Data from Boss's MongoDB in JSON */}
        <div className="flex items-center justify-center py-6 ">
          <div className="text-white w-[650px]">
            <h1 className="text-xl font-semibold my-2">Sample Data from Boss's MongoDB</h1>
            <p style={{ textIndent: "1.2rem" }} className="text-lg mb-4">
              This is a sample dataset created by inserting a document into a MongoDB collection. It is fetched directly from the database to demonstrate how data can be stored, queried, and retrieved efficiently in real time.
            </p>
            <div className="border-2 border-white h-64 overflow-y-scroll">
              <pre className="text-[#52cf52]">
                {JSON.stringify(sampleData, null, 2)}
              </pre>
            </div>
          </div>
        </div>
        {/* Sample Data from Boss's MongoDB in JSON */}

        {/* Arrow*/}
        <div className="flex justify-center items-center pt-5 pb-7 ">
          <RiArrowDownDoubleFill className="text-white text-5xl animate-floating" />
        </div>
        {/* Arrow*/}

        {/* Table Convert from Sample Data with Horizontal Scroll */}
        <div className="flex items-center justify-center py-2">
          <div className="text-white w-[80%]">
            <h1 className="text-xl font-semibold my-2">Sample Data from Boss's MongoDB</h1>
            <p style={{ textIndent: "1.2rem" }} className="text-lg mb-4">
              This table is a dynamically generated representation of the JSON sample data fetched from Boss's MongoDB database            </p>
            <div className="mb-20 overflow-x-auto">
              {renderTable()}
            </div>
          </div>
        </div>
        {/* Table Convert from Sample Data with Horizontal Scroll */}

        <Footer />
      </Container>
      <ScrollUpButton />
    </main>
  );
};

export default ApiLessionPage;
