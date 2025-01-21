"use client"

import { useSession } from 'next-auth/react'
import { CgProfile } from "react-icons/cg";
import Container from "../Components/container";
import NavBar from "../Components/nav";
import Footer from "../Components/footer";
import Link from 'next/link';
import Image from 'next/image'
import ScrollUpButton from '../components/scrollUp'
import YTvdo from "./components/YTvdo";

function WelcomePage() {

    const { data: session } = useSession();

    console.log("GET /api/auth/session 200",);

    return (
        <main className="flex flex-col h-screen relative ">
            <Container>
                <NavBar session={session} />
                
                <div className='flex flex-col bg-white dark:bg-black'>

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

                    {/* === Content Section === */}
                    <div className='container flex-col bg-gray-100 mx-auto my-10 px-10 py-7 mb-20 rounded-xl shadow-sm shadow-[#b3b3b3] animate-fade-in'>
                        <div className="flex justify-end">
                            <Link className='mr-2 px-3 py-2 font-semibold bg-[#226922] text-white rounded-lg hover:bg-[#79b479] hover:text-[#ffffff] transition shadow-lg hover:shadow-[0_0_10px_rgba(33, 116, 33, 1)]'
                                href="/create">Create Content</Link>
                        </div>
                        {/* === User Content Data API GET === */}
                        <div>
                            <div className="my-0 p-10 rounded-xl bg-white text-black shadow-sm shadow-[#b3b3b3]">
                                <h3 className="text-xl font-semibold  my-3 underline">Title...........</h3>
                                <div className="flex justify-left gap-8">
                                    <Image src="https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?q=80&w=1927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        width={180}
                                        height={120}
                                        alt="Image Code"
                                    />
                                    <p className="my-4">
                                        The image showcases a serene library with towering bookshelves, warm golden lighting, and a central wooden table perfect for quiet study. The cozy atmosphere and intricate architecture create an inviting space for learning, reflection, and discovery.
                                    </p>
                                </div>
                                <div className='mt-5 '>
                                    <Link className='mr-2 px-3 py-1 border-[2px] font-semibold border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition shadow-lg hover:shadow-[0_0_10px_rgba(59,130,246,0.8)]'
                                        href={`/edit`}>Edit Content</Link>
                                    <Link className='mr-2 px-3 py-1 border-[2px] font-semibold border-[#b32b2b] text-[#b32b2b] rounded-lg hover:bg-[#b32b2b] hover:text-white transition shadow-lg hover:shadow-[0_0_10px_rgbargba(179, 43, 43, 1)]'
                                        href={`/delete`}>Delete Content</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* === Content Section === */}
                </div>
                {/* === Welcome User and Content Section === */}
                <Footer />
                <ScrollUpButton />
            </Container>
        </main>
    )
}

export default WelcomePage