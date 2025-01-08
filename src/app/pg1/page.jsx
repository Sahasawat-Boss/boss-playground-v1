"use client";

import React from "react";
import Container from "../Components/container";
import NavBar from "../Components/nav";
import Footer from "../Components/footer";
import Link from "next/link";

// Define the card data
const cardsNav = [
    {
        title: "Learning Code",
        description: "Space for exploring new code and discovering new functions and creativity.",
        link: "/pg1/app1",
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
        <main className="bg-[#191925] flex flex-col h-screen ">
            <Container>
                <NavBar />
                {/* Card Nav Section */}
                <div className="h-screen pt-10 flex flex-col items-center">
                    <h1 className="text-3xl text-center text-white font-semibold animate-floating">
                        PlayGround 1
                    </h1>
                    <img
                        className="my-4"
                        src="https://media0.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif?cid=6c09b9520xrtc3u0zk574kj6fokty3nmbx7xhaj966m9hskt&ep=v1_stickers_search&rid=giphy.gif&ct=s"
                        alt="React Gif"
                        height={0}
                        width={50}
                    />
                    <div>
                        {cardsNav.map((card, index) => (
                            <Link key={index} href={card.link}>
                                <div className="text-center max-w-sm w-96 p-4 my-3 rounded-lg shadow-md bg-white cursor-pointer hover:shadow-white hover:shadow-sd transition hover:scale-105 animate-fade-in-up">
                                    <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                                    <p className="text-gray-600">{card.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                {/* Card Nav Section */}
            <Footer />
            </Container>
            
        </main>
    );
};

export default pg1;
