import React, { useState } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdContentPasteSearch } from "react-icons/md";
import { LuClipboardList } from "react-icons/lu";
import { FaRegQuestionCircle } from "react-icons/fa";

function SideMenu() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleMenu = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="relative bg-white dark:bg-black h-screen shadow-lg shadow-[#b9b9b9]">
            {/* Hamburger Icon */}
            {isCollapsed && (
                <button
                    onClick={toggleMenu}
                    className="absolute top-4 left-3 z-50 bg-gray-100 text-gray-900 rounded-sm p-1 py-1 hover:bg-gray-300 shadow-md animate-fade-in-left-right"
                >
                    <GiHamburgerMenu className="text-xl opacity-50 font-bold" />
                </button>
            )}

            {/* Side Menu */}
            <div
                className={`transition-all duration-[0.7s] ${isCollapsed ? 'w-0 overflow-hidden' : 'w-48 animate-fade-in'
                    } bg-gray-100 dark:bg-[#1a1a1a] h-full`}
            >
                <div className="w-48 text-black dark:text-white flex flex-col gap-4 p-4 ">
                    {!isCollapsed && (
                        <div className="flex text-gray-700 dark:text-gray-200 font-bold justify-between">
                            <h1 className="flex text-sm opacity-45 relative z-10">
                                PIR
                            </h1>
                            {/* Inline Hamburger Icon */}
                            <button onClick={toggleMenu} className="">
                                <GiHamburgerMenu className="text-xl opacity-50 font-bold" />
                            </button>
                        </div>
                    )}
                    {!isCollapsed && (
                        <>
                            <Link href="#" className="ml-4 flex gap-2  hover:font-semibold hover:text-blue-500">
                                <MdContentPasteSearch className='mt-1'/>PIR Form
                            </Link>
                            <Link href="#" className="ml-4 flex gap-2 hover:font-semibold hover:text-blue-500">
                                <LuClipboardList className='mt-1'/>PI Management
                            </Link>
                            <Link href="#" className="ml-4 flex gap-2 hover:font-semibold hover:text-blue-500">
                                <FaRegQuestionCircle className='mt-1'/>About
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SideMenu;
