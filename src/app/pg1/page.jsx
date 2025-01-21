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
                </div>
                <Footer />
            </Container>
        </main>
    );
};

export default pg1;
