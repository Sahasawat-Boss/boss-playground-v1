"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { CgProfile } from "react-icons/cg";
import Container from "../compoenents/container";
import NavBar from "../compoenents/nav";
import Footer from "../compoenents/footer";
import Link from "next/link";
import ScrollUpButton from "../compoenents/scrollUp";
import YTvdo from "./compoenents/YTvdo";

function WelcomePage() {
    const { data: session } = useSession();
    if (!session) redirect("/signIn"); // If user is not signed in, redirect to signIn
    console.log(session);

    return (
        <main className="flex flex-col min-h-screen relative">
            <Container>
                <NavBar session={session} />

                <div className="flex flex-grow flex-col bg-gradient-to-b from-white via-gray-100 to-gray-50 dark:from-black dark:via-gray-900 dark:to-black">
                    {/* === Top Content === */}
                    <div className="flex flex-wrap justify-center gap-24 xl:gap-48 pt-16 pb-4 px-6">
                        {/* === Welcome User, Profile === */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg shadow-gray-300 dark:shadow-none max-w-md w-80 animate-fade-in-left-right">
                            <h1 className="mb-6 dark:text-white text-2xl font-bold text-center">
                                Welcome, {session?.user?.name || "Guest"}!
                            </h1>
                            <div className="bg-white dark:bg-gray-700 rounded-md shadow-md p-6">
                                <div className="flex items-center mb-4">
                                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                                        Profile
                                    </h3>
                                    <CgProfile className="ml-2 text-gray-500 dark:text-gray-400 text-xl" />
                                </div>
                                <hr className="border-t-2 border-gray-300 dark:border-gray-600 mb-4" />
                                <p className="text-gray-700 dark:text-gray-300 mb-2">
                                    <strong>User:</strong> {session?.user?.name || "N/A"}
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mb-2">
                                    <strong>Email:</strong> {session?.user?.email || "N/A"}
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    <strong>Role:</strong> {session?.user?.role || "N/A"}
                                </p>
                            </div>
                        </div>

                        {/* === New Feature Section === */}
                        <div className="relative flex flex-col items-center animate-fade-in-right-left ">
                            <Link href="/pg1">
                                <div className="relative p-[2.5px] rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-200% animate-gradient-border hover:scale-110 transition-all duration-300">
                                    <div className="relative">
                                        {/* Tag */}
                                        <span
                                            className="absolute z-20 -top-3 -left-6 bg-[#f5de7a] border border-yellow-500 text-black text-sm font-semibold px-[7px] py-[3px] rounded-lg shadow-md animate-bounce"
                                            style={{ animationDuration: "1.09s" }}
                                        >
                                            New Updated!
                                        </span>
                                        <img
                                            src="/picture-pg1/PG1-pic.png"
                                            alt="pg1 pic"
                                            className="w-[270px] rounded-xl border border-gray-300 hover:cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_10px_rgba(33,150,243,0.6)]"
                                        />
                                    </div>
                                </div>
                            </Link>
                            <p className="mt-4 text-center text-gray-700 dark:text-gray-300">
                                Check out the latest features in PlayGround 1!
                            </p>
                        </div>

                    </div>

                    {/* YouTube Video Section */}
                    <div className="py-12">
                        <YTvdo />
                    </div>
                </div>

                <Footer />
                <ScrollUpButton />
            </Container>
        </main>
    );
}

export default WelcomePage;
