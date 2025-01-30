"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Correct usage for Next.js App Router
import { signOut } from "next-auth/react";
import ThemeToggle from "./themeToggle";
import { Tooltip } from "react-tooltip";
import { FaGear } from "react-icons/fa6";

function NavBar({ session }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const pathname = usePathname(); // Correct for App Router

    const handleSignOut = async () => {
        setIsModalOpen(false);
        await signOut({ redirect: false }); // Ensure manual redirect
        window.location.href = "/"; // Use `window.location.href` instead of `router.push("/")`
    };

    return (
        <div>
            <div className="navbar bg-[#181818] text-white shadow-[0_2px_20px_rgba(0,0,0,0.23)] top-0 z-50">
                <div className="flex-1">
                    <Link
                        href="/"
                        className={`mr-3 ml-6 font-semibold text-xl ${pathname === "/" ? "text-blue-400" : "text-white hover:text-blue-400"
                            }`}
                        data-tooltip-id="index-tooltip"
                    >
                        Boss PlayGround
                    </Link>
                    <Tooltip id="index-tooltip" content="Go to first page" place="top" className="z-[99999]" />
                    <div data-tooltip-id="theme-toggle-tooltip">
                        <ThemeToggle />
                    </div>
                    <Tooltip id="theme-toggle-tooltip" content="Toggle Light/Dark Mode" place="top" className="z-[99999]" />
                </div>

                <div className="flex-none mr-3.5 text-lg">
                    {session ? (
                        <ul className="menu menu-horizontal px-1 space-x-2">
                            <li>
                                <Link href="/WelcomePage" className={`${pathname === "/WelcomePage" ? "text-blue-400" : "text-white hover:text-blue-400"}`}>
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href="/pg1" className={`${pathname === "/pg1" ? "text-blue-400" : "text-white hover:text-blue-400"}`}>
                                    PlayGround 1
                                </Link>
                            </li>
                            <li>
                                <Link href="/learning" className={`${pathname === "/learning" ? "text-blue-400" : "text-white hover:text-blue-400"}`}>
                                    Learning
                                </Link>
                            </li>
                            <div className="relative mx-2 cursor-pointer">
                                <FaGear className="mt-2.5 text-white hover:text-blue-400 transition-all duration-300 text-lg" onClick={() => setIsDropdownOpen((prev) => !prev)} />
                                {isDropdownOpen && (
                                    <div className="absolute mt-3 right-2 w-40 bg-gray-50 dark:bg-gray-800 shadow-md z-[9999]">
                                        <button className="border-b border-gray-300 dark:border-gray-500 block w-full px-3 py-3 text-left text-black dark:text-white hover:text-blue-400 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                                            Profile Settings
                                        </button>
                                        <button onClick={() => setIsModalOpen(true)} className="block w-full px-3 py-3 text-left text-black dark:text-white hover:text-red-500 dark:hover:text-red-500 hover:bg-red-50 dark:hover:bg-gray-700">
                                            Sign Out
                                        </button>
                                    </div>
                                )}
                            </div>
                        </ul>
                    ) : (
                        <ul className="menu menu-horizontal px-1 space-x-2">
                            <li>
                                <Link href="/signIn" className={`${pathname === "/signIn" ? "text-blue-400" : "text-white hover:text-blue-400"}`}>
                                    Sign In
                                </Link>
                            </li>
                            <li>
                                <Link href="/signUp" className={`${pathname === "/signUp" ? "text-blue-400" : "text-white hover:text-blue-400"}`}>
                                    Sign Up
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>

            {/* Sign Out Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-65 dark:bg-opacity-55 flex justify-center items-center z-50">
                    <div className="bg-white text-black rounded-md shadow-xl p-10 px-20 text-center">
                        <h3 className="text-xl font-semibold">Are you sure you want to sign out?</h3>
                        <hr className="border-t-2 border-gray-300 mt-2 mb-12" />
                        <div className="flex justify-center space-x-4">
                            <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-white bg-gray-400 rounded hover:bg-gray-300">
                                Cancel
                            </button>
                            <button onClick={handleSignOut} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-400">
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NavBar;
