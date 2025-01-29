"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import ThemeToggle from "./themeToggle";
import { Tooltip } from "react-tooltip";
import { FaGear } from "react-icons/fa6";

function NavBar({ session }) {
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for settings dropdown
    const pathname = usePathname();

    const handleSignOut = () => {
        setIsModalOpen(false); // Close modal
        signOut(); // Sign out action
    };

    const AuthenticatedLinks = () => (
        <ul className="menu menu-horizontal px-1 space-x-2">
            <li>
                <Link
                    href="/WelcomePage"
                    className={`${pathname === "/WelcomePage"
                            ? "text-blue-400"
                            : "text-white hover:text-blue-400"
                        } group`}
                    data-tooltip-id="dashboard-tooltip"
                >
                    <span className="relative after:block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 group-hover:after:w-full">
                        Dashboard
                    </span>
                </Link>
                <Tooltip id="dashboard-tooltip" content="Go to Dashboard page" place="top" className="z-[99999]" />
            </li>
            <li>
                <Link
                    href="/pg1"
                    className={`${pathname === "/pg1"
                            ? "text-blue-400"
                            : "text-white hover:text-blue-400"
                        } group`}
                    data-tooltip-id="playground-tooltip"
                >
                    <span className="relative after:block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 group-hover:after:w-full">
                        PlayGround 1
                    </span>
                </Link>
                <Tooltip id="playground-tooltip" content="Go to PlayGround 1 page" place="top" className="z-[99999]" />
            </li>
            <li>
                <Link
                    href="/learning"
                    className={`${pathname === "/learning"
                            ? "text-blue-400"
                            : "text-white hover:text-blue-400"
                        } group`}
                    data-tooltip-id="learning-tooltip"
                >
                    <span className="relative after:block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 group-hover:after:w-full">
                        Learning
                    </span>
                </Link>
                <Tooltip id="learning-tooltip" content="Go to Learning page" place="top" className="z-[99999]" />
            </li>
            <div className="relative mx-2 cursor-pointer">
                <FaGear
                    className="mt-2.5 text-white hover:text-blue-400 transition-all duration-300 text-lg"
                    onClick={() => setIsDropdownOpen((prev) => !prev)} // Toggle dropdown on click
                />

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                    <div
                        className="absolute mt-3 right-2 w-40 bg-gray-200 dark:bg-gray-800 shadow-md z-[9999]"
                        style={{ zIndex: 9999 }}
                    >
                        <button
                            className="border-b border block w-full px-3 py-3 text-left text-black dark:text-white hover:text-blue-400 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            Profile Settings
                        </button>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="block w-full px-3 py-3 text-left text-black dark:text-white hover:text-red-500 dark:hover:text-red-500 hover:bg-red-50 dark:hover:bg-gray-700"
                        >
                            Sign Out
                        </button>
                    </div>
                )}
            </div>
        </ul>
    );

    const GuestLinks = () => (
        <ul className="menu menu-horizontal px-1 space-x-2">
            <li>
                <Link
                    href="/signIn"
                    className={`${pathname === "/signIn"
                            ? "text-blue-400"
                            : "text-white hover:text-blue-400"
                        } group`}
                    data-tooltip-id="signin-tooltip"
                >
                    <span className="relative after:block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 group-hover:after:w-full">
                        Sign In
                    </span>
                </Link>
                <Tooltip id="signin-tooltip" content="Sign in to your account" place="top" className="z-[99999]" />
            </li>
            <li>
                <Link
                    href="/signUp"
                    className={`${pathname === "/signUp"
                            ? "text-blue-400"
                            : "text-white hover:text-blue-400"
                        } group`}
                    data-tooltip-id="signup-tooltip"
                >
                    <span className="relative after:block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 group-hover:after:w-full">
                        Sign Up
                    </span>
                </Link>
                <Tooltip id="signup-tooltip" content="Create a new account" place="top" className="z-[99999]" />
            </li>
        </ul>
    );

    return (
        <div>
            <div className="navbar bg-[#181818] text-white shadow-[0_2px_20px_rgba(0,0,0,0.23)] top-0 z-50">
                {/* Left Section: Brand and Theme Toggle */}
                <div className="flex-1">
                    <Link
                        href="/"
                        className={`${pathname === "/"
                                ? "mr-3 ml-6 font-semibold text-xl text-blue-400 transition-all duration-300 hover:text-blue-400"
                                : "mr-3 ml-6 font-semibold text-xl text-white transition-all duration-300 hover:text-blue-400"
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

                {/* Right Section: Navigation Links */}
                <div className="flex-none mr-3.5">{session ? <AuthenticatedLinks /> : <GuestLinks />}</div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-65 dark:bg-opacity-55 flex justify-center items-center z-50">
                    <div className="bg-white text-black rounded-md shadow-xl p-10 px-20 text-center">
                        <h3 className="text-xl font-semibold">Are you sure you want to sign out?</h3>
                        <hr className="border-t-2 border-gray-300 mt-2 mb-12" />
                        <div className="flex justify-center space-x-4">

                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 text-white bg-gray-400 rounded hover:bg-gray-300"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleSignOut}
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-400"
                            >
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
