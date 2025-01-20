"use client";

import { useSession } from 'next-auth/react'
import Container from "../Components/container";
import NavBar from "../Components/nav";
import Footer from "../Components/footer";
import Link from "next/link";
import BackButton from "../components/backButton"
import AppNav from "./components/appNav";

const pg1 = () => {


    const { data: session } = useSession();

    return (
        <main className="bg-white dark:bg-black flex flex-col">
            <Container>
                <NavBar session={session} />
                <BackButton />
                {/* Top Section */}
                <div className="flex flex-grow flex-col items-center pb-20 animate-fade-in">
                    <h1 className="text-3xl text-center text-black dark:text-white py-3 font-semibold animate-floating">
                        PlayGround 1
                    </h1>
                    <p className="text-black dark:text-white text-center w-[500px] ">
                        Boss Playground 1 is a creative space where I explore new coding concepts and bring my ideas to life by developing small applications.
                    </p>
                    <img
                        className="mt-8 drop-shadow-xl "
                        src="https://media0.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif?cid=6c09b9520xrtc3u0zk574kj6fokty3nmbx7xhaj966m9hskt&ep=v1_stickers_search&rid=giphy.gif&ct=s"
                        alt="React Gif"
                        height={0}
                        width={50}
                    />
                    {/* Top Section */}

                    <div className="pt-8 pb-16">
                        <AppNav />
                    </div>

                    <h1 className="text-3xl text-center text-black dark:text-white pt-3 pb-16 font-semibold animate-fade-in">
                        Learning
                    </h1>
                    <div className="flex w-full justify-evenly gap-10">
                        {/* Learning Left Section */}
                        <div>
                            <div className=" w-[250px] h-[250px]">
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
                        </div>
                        {/* Learning Left Section */}

                        {/* Learning Right Section */}
                        <div className=" flex flex-col gap-4">
                            {/* Card 1 */}
                            <div className="mb-1">
                                <Link href={"/pg1/apiLession"}>
                                    <div className="text-center max-w-sm w-80 p-4 rounded-lg text-black dark:text-black bg-white shadow-md shadow-[#a3a3a3] dark:shadow-none cursor-pointer hover:shadow-blue-600 dark:hover:shadow-blue-600 hover:shadow-lg dark:hover:shadow-lg transition hover:scale-105 animate-fade-in-up">
                                        <h2 className="text-xl font-bold mb-2">Restful API - Method: GET</h2>
                                        <p>Demonstrate and Test the GET method</p>
                                    </div>
                                </Link>
                            </div>

                            {/* Card 2 */}
                            <div className="mb-1">
                                <Link href={"/pg1/apiLession2"}>
                                    <div className="text-center max-w-sm w-80 p-4 rounded-lg text-black dark:text-black bg-white shadow-md shadow-[#a3a3a3] dark:shadow-none cursor-pointer hover:shadow-blue-600 dark:hover:shadow-blue-600 hover:shadow-lg dark:hover:shadow-lg transition hover:scale-105 animate-fade-in-up">
                                        <h2 className="text-xl font-bold mb-2">GET and POST Data</h2>
                                        <p>Test the GET and Post method</p>
                                    </div>
                                </Link>
                            </div>

                            {/* Card 3 */}
                            <div className="mb-1">
                                <Link href={"/pg1/page3"}>
                                    <div className="text-center max-w-sm w-80 p-4 rounded-lg text-black dark:text-black bg-white shadow-md shadow-[#a3a3a3] dark:shadow-none cursor-pointer hover:shadow-blue-600 dark:hover:shadow-blue-600 hover:shadow-lg dark:hover:shadow-lg ransition hover:scale-105 animate-fade-in-up">
                                        <h2 className="text-xl font-bold mb-2">In progress...</h2>
                                        <p>In progress...</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        {/* Learning Right Section */}
                    </div>

                </div>
                <Footer />
            </Container>
        </main>
    );
};

export default pg1;
