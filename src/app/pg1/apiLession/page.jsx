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
      const response = await fetch("/api/sampleData"); // This points to the new API route
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
        <div className="flex flex-grow flex-col items-center">
          <h1 className="text-3xl text-center text-white py-8 font-semibold animate-floating">
            Restful API - Method "GET"
          </h1>
          <p className="text-white text-center w-[500px]">
            Boss Playground is a creative space where I explore new coding concepts and bring my ideas to life by developing small applications.
          </p>
          <img
            className="my-4"
            src="https://media0.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif?cid=6c09b9520xrtc3u0zk574kj6fokty3nmbx7xhaj966m9hskt&ep=v1_stickers_search&rid=giphy.gif&ct=s"
            alt="React Gif"
            height={0}
            width={50}
          />
        </div>

        <div className="text-white">
          <h1>Sample Data</h1>
          <pre>{JSON.stringify(sampleData, null, 2)}</pre> {/* HTML element is used to display text exactly as it's written, preserving white spaces, line breaks, and indentation.*/}
        </div>

        <Footer />
      </Container>
      <ScrollUpButton/>
    </main>
  );
};

export default ApiLessionPage;
