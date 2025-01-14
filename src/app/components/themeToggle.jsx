"use client"; // Required for client-side functionality in Next.js 13+

import { useEffect, useState } from "react";
import { MdOutlineLightMode , MdNightlightRound } from "react-icons/md";

export default function ThemeToggle() {
    const [theme, setTheme] = useState("light");

    // Load and apply the theme from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }, []);

    // Toggle theme and save to localStorage
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-1 rounded-full bg-gray-800 text-gray-400 transition-colors duration-2000 hover:bg-gray-600 dark:hover:bg-gray-600"
        >
            {theme === "light" ? (
                <MdNightlightRound size={22} />
            ) : (
                <MdOutlineLightMode size={22} />
            )}
        </button>

    );
}
