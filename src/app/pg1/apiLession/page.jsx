"use client";

import { useState, useEffect } from "react";
import Container from "../../components/container";
import NavBar from "../../Components/nav";
import Footer from "../../Components/footer";
import BackButton from "../../components/backButton";
import ScrollUpButton from "@/app/components/scrollUp";

const ApiLessionPage = () => {
  const [sampleData, setSampleData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/sampleData"); // This points to the sampleData route.js
      const data = await response.json();
      setSampleData(data.sampleData);
      console.log("Successful Fetched Sample Data:", data.sampleData); // Logs the sampleData to the console
    };

    fetchData();
  }, []);

  return (
    <main className="bg-[#131212] flex flex-col">
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
            className="mt-4 animate-fade-in-up"
            src="https://developers.giphy.com/branch/master/static/api-512d36c09662682717108a38bbb5c57d.gif"
            alt="React Gif"
            height={0}
            width={300}
          />
        </div>

        <div className="flex items-center justify-center  py-10">
          <div className="text-white w-[650px]">
            <h1 className="text-xl font-semibold my-2">Sample Data from Boss's MongoDB</h1>
            <p style={{ textIndent: "1.2rem" }} className="text-lg mb-4">This is a sample dataset created by inserting a document into a MongoDB collection. It is fetched directly from the database to demonstrate how data can be stored, queried, and retrieved efficiently in real time.</p>
            <div className="border-2 border-white h-64 overflow-y-scroll">
              <pre className="text-[#52cf52]">
                {JSON.stringify(sampleData, null, 2)}
              </pre>
            </div>
          </div>
        </div>

        


        <Footer />
      </Container>
      <ScrollUpButton />
    </main>
  );
};

export default ApiLessionPage;
