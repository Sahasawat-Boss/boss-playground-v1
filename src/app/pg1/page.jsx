"use client";

import React from "react";
import Container from "../Components/container";
import NavBar from "../Components/nav";
import Footer from "../Components/footer";
import Link from "next/link";
import BackButton from "../components/backButton"

// Define the card data
const cardsNav = [
    {
        title: "Restful API - Method: GET ",
        description: "Demonstrates and Tests the GET method",
        link: "/pg1/apiLession",
    },
    {
        title: "In progress..",
        description: "In progress..",
        link: "/pg1/page2",
    },
    {
        title: "In progress..",
        description: "In progress..",
        link: "/pg1/page3",
    },
];

const pg1 = () => {
    return (
        <main className="bg-white dark:bg-black flex flex-col h-screen">
            <Container>
                <NavBar />
                <BackButton />
                {/* Top Section */}
                <div className="flex flex-grow flex-col items-center">
                    <h1 className="text-3xl text-center text-black dark:text-white py-3 font-semibold animate-floating">
                        PlayGround 1
                    </h1>
                    <p className="text-black dark:text-white text-center w-[500px] ">
                        Boss Playground is a creative space where I explore new coding concepts and bring my ideas to life by developing small applications.
                    </p>
                    <img
                        className="my-4 drop-shadow-xl"
                        src="https://media0.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif?cid=6c09b9520xrtc3u0zk574kj6fokty3nmbx7xhaj966m9hskt&ep=v1_stickers_search&rid=giphy.gif&ct=s"
                        alt="React Gif"
                        height={0}
                        width={50}
                    />
                    {/* Top Section */}

                    {/* Card Nav Section */}
                    <div>
                        {cardsNav.map((card, index) => (
                            <Link key={index} href={card.link}>
                                <div className="text-center max-w-sm w-96 p-4 my-5 rounded-lg text-black dark:text-black bg-white shadow-md shadow-[#a3a3a3] dark:shadow-none cursor-pointer hover:shadow-blue-600 hover:shadow-lg transition hover:scale-105 animate-fade-in-up">
                                    <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                                    <p className="">{card.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    {/* Card Nav Section */}
                </div>
                <Footer />
            </Container>

        </main>
    );
};

export default pg1;
