"use client"

import { useSession } from 'next-auth/react'
import { CgProfile } from "react-icons/cg";
import Container from "../Components/container";
import NavBar from "../Components/nav";
import Footer from "../Components/footer";
import Link from 'next/link';
import ScrollUpButton from '../components/scrollUp'
import YTvdo from "./components/YTvdo";

function WelcomePage() {

    const { data: session } = useSession();

    console.log("GET /api/auth/session 200",);

    return (
        <main className="flex flex-col h-screen relative ">
            <Container>
                <NavBar session={session} />

                <div className='flex flex-grow flex-col bg-white dark:bg-black'>

                    {/* === Top Content === */}
                    <div className="flex justify-center gap-36 py-6">
                        {/* === Welcome User, Profile === */}
                        <div className=" pt-10 pb-12 text-black animate-fade-in-left-right">
                            <h1 className=" mb-6 dark:text-white text-3xl font-medium text-center">Welcome,{session?.user?.name} </h1>
                            <div className='bg-white w-fit mx-auto p-4 px-8 rounded-md  shadow-lg shadow-[#b3b3b3] dark:shadow-none'>
                                <div className='flex justify-center '>
                                    <div className="flex-col items-start ">
                                        <div className="flex items-center">
                                            <h3 className="text-lg">Profile</h3>
                                            <div className="ml-1 text-[17.5px]"><CgProfile /></div>
                                        </div>
                                        <hr className="my-1 border-t-2 border-gray-300 w-full" />
                                        <p className="mt-2">User: {session?.user?.name}</p>
                                        <p>Email: {session?.user?.email}</p>
                                        <p>Role: {session?.user?.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="py-10">
                            <Link href="/pg1">
                                <div className='relative animate-fade-in-right-left'>
                                    {/* Tag */}
                                    <span
                                        className="absolute z-20 -top-3 -left-7 bg-[#f5de7a] border border-yellow-500 text-black text-sm font-semibold px-[7px] pt-[2.5px] pb-[5px] rounded-lg shadow-md animate-bounce"
                                        style={{
                                            animationDuration: "1.09s", // Faster bounce animation
                                        }}>
                                        New Updated!
                                    </span><img
                                        src="/picture-pg1/PG1-pic.png"
                                        alt="pg1 pic"
                                        className='w-[270px] rounded-xl border hover:cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 shadow-xl shadow-[#bdbdbd] dark:shadow-[#474747] hover:shadow-[0_0_20px_10px_rgba(33,150,243,0.6)] dark:hover:shadow-[0_0_20px_10px_rgba(33,150,243,0.6)]'
                                    /></div>
                            </Link>
                        </div>
                    </div>

                    <YTvdo />
                </div>

                <Footer />
                <ScrollUpButton />
            </Container>
        </main >
    )
}

export default WelcomePage