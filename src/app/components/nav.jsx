"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";

function NavBar({session}) { //รับค่า session จากหน้า Welcome Page
return (
    <div
        className="navbar bg-[#181818] text-white shadow-[0_4px_15px_rgba(250,0,0,0.4)] top-0 z-50"
        
    >
        <div className="flex-1 group">
        <a
            href="/"
            className="btn btn-ghost text-xl relative transition-all duration-300 hover:text-blue-400"
        >
            Boss PlayGround
            <span className="absolute inset-0 rounded-md bg-blue-700 opacity-0 transition-all duration-300 group-hover:opacity-20"></span>
        </a>
        </div>
        <div className="flex-none">
            {!session ? (
                // If no sesssion or user is not signed in >> show Sign In and Sign Up links  //
                <ul className="menu menu-horizontal px-1 space-x-2">
                    <li className="group">
                        <Link href="/signIn"
                        className="relative transition duration-300 text-white hover:text-blue-400"
                        style={{ animation: "fadeUp 0.65s ease-in-out" }}>
                        Sign In
                        <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li className="group">
                        <Link href="/signUp"
                        className="relative transition duration-300 text-white hover:text-blue-400"
                        style={{ animation: "fadeUp 0.65s ease-in-out" }}>
                        Sign Up
                        <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                </ul>
            ) : (
                // If have sesssion or user signed in >> show below lists //
                <ul className="menu menu-horizontal px-1 space-x-2">
                    <li className="group">
                        <Link href="/WelcomePage"
                        className="relative transition duration-300 text-white hover:text-blue-400"
                        style={{ animation: "fadeUp 0.65s ease-in-out" }}>
                        Dashboard
                        <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li className="group">
                        <Link href="/pg1"
                        className="relative transition duration-300 text-white hover:text-blue-400"
                        style={{ animation: "fadeUp 0.65s ease-in-out" }}>
                        PlayGround 1
                        <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li className="group">
                        <a
                        onClick={() => signOut()}
                        className="relative transition duration-300 text-white hover:text-red-400 cursor-pointer"
                        style={{ animation: "fadeUp 0.65s ease-in-out" }}>
                        Sign Out
                        <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-red-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                </ul>
            )}
        </div>

        {/* Add keyframe animations */}
        <style jsx>{`
        @keyframes fadeIn {
            from {
            opacity: 0;
            transform: translateY(-5px);
            }
            to {
            opacity: 1;
            transform: translateY(0);
            }
        }

        @keyframes fadeUp {
            from {
            opacity: 0;
            transform: translateY(15px);
            }
            to {
            opacity: 1;
            transform: translateY(0);
            }
        }`}</style>
    </div>
    );
}

export default NavBar;
