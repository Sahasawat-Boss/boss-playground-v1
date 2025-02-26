"use client";

import { useSession } from "next-auth/react";
import Container from "../components/container";
import NavBar from "../components/nav";
import Footer from "../components/footer";
import Link from "next/link";
import BackButton from "../components/backButton";

const Learning = () => {
    const { data: session } = useSession();

    return (
        <main className="bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-black flex flex-col min-h-screen">
            <Container>
                <NavBar session={session} />
                <BackButton />
                {/* Top Section */}
                <div className="flex flex-grow flex-col items-center pt-8 pb-16 animate-fade-in">
                    <h1 className="text-4xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-600 mb-6 animate-floating">
                        Learning Playground
                    </h1>
                    <p className="text-center text-lg text-gray-700 dark:text-gray-300 w-[90%] sm:w-[500px] leading-relaxed">
                        Learning Playground 1 is a creative space where I explore new coding techniques,
                        concepts, and programming ideas.
                    </p>
                    <img
                        className="mt-10 drop-shadow-xl rounded-xl transform hover:scale-105 transition duration-500"
                        src="https://media0.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif?cid=6c09b9520xrtc3u0zk574kj6fokty3nmbx7xhaj966m9hskt&ep=v1_stickers_search&rid=giphy.gif&ct=s"
                        alt="React Gif"
                        width={80}
                        height={80}
                    />

                    {/* Cards Section */}
                    <div className="mt-16 flex w-full justify-center flex-wrap gap-28 xl:gap-40">
                        {/* Left Images Section */}
                        <div className="flex flex-col gap-10">
                            <div
                                className="relative w-[290px] h-[250px] bg-cover bg-center bg-no-repeat border-white border-2 shadow-lg shadow-[#838383] animate-fade-in-left-right"
                                style={{
                                    backgroundImage: "url('/picture-pg1/DB Pic1.jpg')",
                                }}>
                                <div
                                    className="absolute -bottom-8 -right-8 w-[280px] h-[250px] bg-cover bg-center bg-no-repeat border-white border-2 z-10 shadow-lg shadow-[#838383] animate-fade-in-left-right"
                                    style={{
                                        backgroundImage: "url('/picture-pg1/DB Pic1.jpg')",
                                    }}>
                                </div>
                            </div>
                        </div>

                        {/* Right Cards Section */}
                        <div className="flex flex-col gap-6">
                            {/* Card 1 */}
                            <Link href={"/learning/lession1"}>
                                <div className="text-center max-w-sm w-80 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md shadow-[#a3a3a3] dark:shadow-none cursor-pointer hover:shadow-blue-600 dark:hover:shadow-blue-600 hover:scale-105 transition-all animate-fade-in-up">
                                    <h2 className="text-xl font-bold mb-2 text-black dark:text-white">
                                        Restful API - Method: GET
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Demonstrate and Test the GET method
                                    </p>
                                </div>
                            </Link>

                            {/* Card 2 */}
                            <Link href={"/learning/apiLession2"}>
                                <div className="text-center max-w-sm w-80 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md shadow-[#a3a3a3] dark:shadow-none cursor-pointer hover:shadow-blue-600 dark:hover:shadow-blue-600 hover:scale-105 transition-all animate-fade-in-up">
                                    <h2 className="text-xl font-bold mb-2 text-black dark:text-white">
                                        GET and POST Data
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Test the GET and POST methods
                                    </p>
                                </div>
                            </Link>

                            {/* Card 3 db */}
                            <Link href={"/learning/lessionDB"}>
                                <div className="text-center max-w-sm w-80 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md shadow-[#a3a3a3] dark:shadow-none cursor-pointer hover:shadow-blue-600 dark:hover:shadow-blue-600 hover:scale-105 transition-all animate-fade-in-up">
                                    <h2 className="text-xl font-bold mb-2 text-black dark:text-white">
                                        Cloudinary DataBase
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300">Test Upload to Cloudinary DB</p>
                                </div>

                            </Link>
                            {/* Card Inprogress */}
                            <Link href={"/learning/page3"}>
                                <div className="text-center max-w-sm w-80 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md shadow-[#a3a3a3] dark:shadow-none cursor-pointer hover:shadow-blue-600 dark:hover:shadow-blue-600 hover:scale-105 transition-all animate-fade-in-up">
                                    <h2 className="text-xl font-bold mb-2 text-black dark:text-white">
                                        In Progress...
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300">In Progress...</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </Container>
        </main>
    );
};

export default Learning;
