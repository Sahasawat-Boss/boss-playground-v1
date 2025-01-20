"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import ThemeToggle from "./themeToggle";
import { Tooltip } from 'react-tooltip';

function NavBar({ session }) {
    return (
        <div
            className="navbar bg-[#181818] text-white shadow-[0_2px_20px_rgba(250,0,0,0.4)] top-0 z-50"
        >
            <div className="flex-1">
                <Link
                    href="/"
                    className="mr-3 btn btn-ghost text-xl relative transition-all duration-300 hover:text-blue-400"
                    data-tooltip-id="index-tooltip"
                >
                    Boss PlayGround
                </Link>
                <Tooltip id="index-tooltip" content="Go to first page" place="top" />
                <div data-tooltip-id="theme-toggle-tooltip">
                    <ThemeToggle />
                </div>
                <Tooltip id="theme-toggle-tooltip" content="Toggle Light/Dark Mode" place="top" />
            </div>
            <div className="flex-none">
                {!session ? (
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        <li>
                            <Link href="/signIn" className="text-white hover:text-blue-400">
                                Sign In
                            </Link>
                        </li>
                        <li>
                            <Link href="/signUp" className="text-white hover:text-blue-400">
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                ) : (
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        <li>
                            <Link
                                href="/WelcomePage"
                                className="text-white hover:text-blue-400"
                                data-tooltip-id="dashboard-tooltip"
                            >
                                Dashboard
                            </Link>
                            <Tooltip id="dashboard-tooltip" content="Go to Dashboard page" place="top" />
                        </li>
                        <li>
                            <Link
                                href="/pg1"
                                className="text-white hover:text-blue-400"
                                data-tooltip-id="pg1-tooltip"
                            >
                                PlayGround 1
                            </Link>
                            <Tooltip id="pg1-tooltip" content="Go to PlayGround1 page" place="top" />
                        </li>
                        <li>
                            <a
                                onClick={() => signOut()}
                                className="text-white hover:text-red-400 cursor-pointer"
                            >
                                Sign Out
                            </a>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
}

export default NavBar;
