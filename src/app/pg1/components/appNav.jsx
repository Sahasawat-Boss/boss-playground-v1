import React from 'react'
import Link from 'next/link'
import { MdAppRegistration } from "react-icons/md";

function AppNav() {
    return (
        <div>
            <h1 className="text-3xl text-center text-black dark:text-white pb-12 font-semibold animate-fade-in">
                Application
            </h1>
            <div className="flex justify-evenly gap-8">
                {/* App Link */}
                <div>
                    <Link href={"/pg1/app1"}>
                        <div className="relative w-fit p-5 rounded-lg border-2 border-blue-600 text-blue-600 bg-white shadow-md shadow-[#a3a3a3] dark:shadow-none cursor-pointer hover:shadow-blue-500 dark:hover:shadow-blue-500 hover:shadow-lg dark:hover:shadow-lg transition hover:scale-105 animate-fade-in-up">
                            <h2 className="text-2xl font-bold flex"><span className='mt-1 mr-1'><MdAppRegistration /></span>CRUD v.2</h2>
                            {/* Tag */}
                            <span
                                className="absolute -top-2 -left-5 bg-[#f5de7a] border border-yellow-500 text-black text-sm font-semibold px-[7px] py-[2.5px] rounded-full shadow-md animate-bounce"
                                style={{
                                    animationDuration: "1.35s", // Faster bounce animation
                                }}>
                                NEW
                            </span>
                        </div>
                    </Link>
                </div>

                {/* App Link */}

                {/* App Description*/}
                <div>
                    <div className="w-[26rem] animate-fade-in-right-left">
                        <div><span className='underline font-semibold text-xl mr-1'>CRUD V.2</span> Enables efficient GET, POST, and DELETE operations on the CRUDv2 data collection in MongoDB. It also allows data filtering and supports exporting results to an Excel file for easy sharing and analysis.</div>
                    </div>
                </div>
                {/* App Description */}
            </div>
        </div>
    )
}

export default AppNav