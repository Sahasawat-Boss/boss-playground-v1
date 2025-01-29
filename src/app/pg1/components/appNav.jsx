import React, { useState } from 'react';
import Link from 'next/link';
import { MdAppRegistration } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // Spinner icon

function AppNav() {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000); // Simulate loading (2 seconds)
    };

    return (
        <div>
            <div className="flex justify-evenly gap-8">
                {/* App Link */}
                <div className='animate-fade-in-up' onClick={handleClick}>
                    {loading ? (
                        // Show spinner while loading
                        <div className="flex justify-center items-center w-40 h-16 bg-white border-2 border-blue-600 rounded-lg shadow-md">
                            <AiOutlineLoading3Quarters className="animate-spin text-blue-600 text-3xl" />
                        </div>
                    ) : (
                        // Show link when not loading
                        <Link href={"/pg1/app1"}>
                            <div className="relative p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-200% animate-gradient-border hover:scale-110 transition-all duration-300">
                                <div className="relative w-fit px-6 py-4 rounded-lg border-2 border-blue-600 text-blue-600 bg-white shadow-md shadow-[#a3a3a3] dark:shadow-none cursor-pointer hover:shadow-blue-500 dark:hover:shadow-blue-500 hover:shadow-lg dark:hover:shadow-lg transition hover:scale-110">
                                    <h2 className="text-2xl font-bold flex">
                                        <span className='mt-1 mr-1'><MdAppRegistration /></span>CRUD v.2
                                    </h2>
                                    {/* Tag */}
                                    <span
                                        className="absolute -top-2 -left-5 bg-[#f5de7a] border border-yellow-500 text-black text-sm font-semibold px-[7px] py-[2.5px] rounded-full shadow-md animate-bounce"
                                        style={{ animationDuration: "1.35s" }}>
                                        NEW
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
                            <span className='underline font-semibold text-xl mr-1'>CRUD V.2</span> 
                            Enables efficient GET, POST, and DELETE operations on the CRUDv2 data collection in MongoDB. It also allows data filtering and supports exporting results to an Excel file for easy sharing and analysis.
                        </div>
                    </div>
                </div>
                {/* App Description */}
            </div>
        </div>
    );
}

export default AppNav;
