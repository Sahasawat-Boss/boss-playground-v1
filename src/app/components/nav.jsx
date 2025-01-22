"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import ThemeToggle from "./themeToggle";
import { Tooltip } from "react-tooltip";

function NavBar({ session }) {
    const AuthenticatedLinks = () => (
        <ul className="menu menu-horizontal px-1 space-x-2">
            <li>
                <Link
                    href="/WelcomePage"
                    className="text-white hover:text-blue-400 group"
                    data-tooltip-id="dashboard-tooltip"
                >
                    <span className="relative after:block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 group-hover:after:w-full">
                        Dashboard
                    </span>
                </Link>
                <Tooltip id="dashboard-tooltip" content="Go to Dashboard page" place="top" />
            </li>
            <li>
                <Link
                    href="/pg1"
                    className="text-white hover:text-blue-400 group"
                    data-tooltip-id="playground-tooltip"
                >
                    <span className="relative after:block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 group-hover:after:w-full">
                        PlayGround 1
                    </span>
                </Link>
                <Tooltip id="playground-tooltip" content="Go to PlayGround 1 page" place="top" />
            </li>
            <li>
                <Link
                    href="/learning"
                    className="text-white hover:text-blue-400 group"
                    data-tooltip-id="learning-tooltip"
                >
                    <span className="relative after:block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 group-hover:after:w-full">
                        Learning
                    </span>
                </Link>
                <Tooltip id="learning-tooltip" content="Go to Learning page" place="top" />
            </li>
            <li className="relative group">
                <a
                    onClick={() => signOut()}
                    className="text-white hover:text-red-400 cursor-pointer group"
                    data-tooltip-id="signout-tooltip"
                >
                    <span className="relative after:block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-400 after:transition-all after:duration-300 group-hover:after:w-full">
                        Sign Out
                    </span>
                </a>
                <Tooltip
                    id="signout-tooltip"
                    content="Sign out of your account"
                    place="bottom"
                    style={{ marginTop: "8px" }} // Ensure spacing below the link
                />
            </li>

        </ul>
    );

    const GuestLinks = () => (
        <ul className="menu menu-horizontal px-1 space-x-2">
            <li>
                <Link
                    href="/signIn"
                    className="text-white hover:text-blue-400 group"
                    data-tooltip-id="signin-tooltip"
                >
                    <span className="relative after:block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 group-hover:after:w-full">
                        Sign In
                    </span>
                </Link>
                <Tooltip id="signin-tooltip" content="Sign in to your account" place="top" />
            </li>
            <li>
                <Link
                    href="/signUp"
                    className="text-white hover:text-blue-400 group"
                    data-tooltip-id="signup-tooltip"
                >
                    <span className="relative after:block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 group-hover:after:w-full">
                        Sign Up
                    </span>
                </Link>
                <Tooltip id="signup-tooltip" content="Create a new account" place="top" />
            </li>
        </ul>
    );

    return (
        <div className="navbar bg-[#181818] text-white shadow-[0_2px_20px_rgba(250,0,0,0.23)] top-0 z-50">
            {/* Left Section: Brand and Theme Toggle */}
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

            {/* Right Section: Navigation Links */}
            <div className="flex-none">{session ? <AuthenticatedLinks /> : <GuestLinks />}</div>
        </div>
    );
}

export default NavBar;
