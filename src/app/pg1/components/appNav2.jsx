"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import Next.js router
import { MdContentPasteSearch } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // Import spinner icon

function AppNav2() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleClick = () => {
        setLoading(true);
    };

    // Track page changes and stop loading when complete
    useEffect(() => {
        const handleRouteChange = () => setLoading(false);

        router.events?.on('routeChangeComplete', handleRouteChange);
        router.events?.on('routeChangeError', handleRouteChange);

        return () => {
            router.events?.off('routeChangeComplete', handleRouteChange);
            router.events?.off('routeChangeError', handleRouteChange);
        };
    }, [router]);

    return (
        <div>
            <div className="flex justify-evenly gap-8">
                {/* App Link */}
                <div className='animate-fade-in-up' onClick={handleClick}>
                    {loading ? (
                        // Show spinner until page changes
                        <div className="flex justify-center items-center w-40 h-16 bg-white border-2 border-blue-600 rounded-lg shadow-md">
                            <AiOutlineLoading3Quarters className="animate-spin text-blue-600 text-3xl" />
                        </div>
                    ) : (
                        // Show actual Link when not loading
                        <Link href={"/pg1/app2"}>
                            <div className="relative p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-200% animate-gradient-border hover:scale-110 transition-all duration-300">
                                <div className="relative w-fit px-10 py-4 rounded-lg border-2 border-blue-600 text-blue-600 bg-white shadow-md shadow-[#a3a3a3] dark:shadow-none cursor-pointer hover:shadow-blue-500 dark:hover:shadow-blue-500 hover:shadow-lg dark:hover:shadow-lg transition hover:scale-110">
                                    <h2 className="text-2xl font-bold flex">
                                        <span className='mt-1 mr-1'><MdContentPasteSearch /></span>PIS
                                    </h2>
                                    {/* Tag */}
                                    <span
                                        className="absolute -top-4 -left-7 bg-[#db7272] border border-red-700 text-white text-sm font-semibold px-[7px] py-[2.5px] rounded-full shadow-md"
                                        style={{ animationDuration: "1.35s" }}>
                                        Under Dev...
                                    </span>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>

                {/* App Description */}
                <div>
                    <div className="w-[26rem] animate-fade-in-right-left">
                        <div>
                            <span className='underline font-semibold text-xl mr-1'>Process Inspection System (PIS)</span>
                            allows users to submit, manage, and archive requests to inspect processes that may not be functioning properly. It ensures issues are addressed systematically, supporting operational efficiency and continuous improvement.
                        </div>
                    </div>
                </div>
                {/* App Description */}
            </div>
        </div>
    );
}

export default AppNav2;
