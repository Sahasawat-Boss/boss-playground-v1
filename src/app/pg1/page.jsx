"use client";

import { useSession } from "next-auth/react";
import Container from "../components/container";
import NavBar from "../components/nav";
import Footer from "../components/footer";
import BackButton from "../components/backButton";
import AppNav from "./components/appNav";
import AppNav2 from "./components/appNav2";
import ScrollUpButton from "../components/scrollUp";

const Pg1 = () => {
    const { data: session } = useSession();

    return (
        <main className="bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-black flex flex-col min-h-screen">
            <Container>
                <NavBar session={session} />
                <BackButton />
                {/* Top Section */}
                <div className="flex flex-grow flex-col items-center pt-8 pb-16  animate-fade-in">
                    {/* Heading */}
                    <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-600 mb-6 animate-floating">
                        PlayGround 1
                    </h1>

                    {/* Description */}
                    <p className="text-center text-lg text-gray-700 dark:text-gray-300 sm:w-[585px] leading-relaxed">
                        Boss Playground 1 is a creative space where I explore new coding concepts and bring my
                        ideas to life by developing small applications.
                    </p>

                    {/* Animated GIF */}
                    <img
                        className="mt-10 drop-shadow-xl rounded-xl transform hover:scale-105 transition duration-500"
                        src="https://media0.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif?cid=6c09b9520xrtc3u0zk574kj6fokty3nmbx7xhaj966m9hskt&ep=v1_stickers_search&rid=giphy.gif&ct=s"
                        alt="React Gif"
                        height={80}
                        width={80}
                    />

                    <h1 className="text-3xl text-center text-black dark:text-white pt-14 pb-4 font-semibold animate-fade-in">
                        Applications
                    </h1>

                    {/* App Navigation */}
                    <div className="pt-12 pb-8">
                        <AppNav />
                    </div>

                    {/* App2 Navigation */}
                    <div className="pt-12 pb-20">
                        <AppNav2 />
                    </div>
                </div>

                {/* Footer */}
                <Footer />
                <ScrollUpButton/>
            </Container>
        </main>
    );
};

export default Pg1;
