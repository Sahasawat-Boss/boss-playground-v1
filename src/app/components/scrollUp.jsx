import React, { useState, useEffect } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { IoEllipsisVertical } from "react-icons/io5"; // "..." icon
import ThemeToggle from "./themeToggle";
import ContactAdminModal from "./contactAdminModal ";
import { MdContactPhone } from "react-icons/md";

const ScrollUpButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // ✅ FIXED: Added missing state

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="fixed bottom-5 right-5 flex flex-col items-end gap-2 z-50">
            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`text-white dark:text-black bg-black dark:bg-white text-3xl border border-white dark:border-gray-800 rounded-full transition-transform hover:scale-110 
                ${isVisible ? "opacity-100 mr-0.5" : "opacity-0 pointer-events-none"}`}
                aria-label="Scroll to top"
            >
                <IoMdArrowDropup />
            </button>

            {/* More Options Button (Opens on Hover) */}
            <div
                className="relative mr-1 group"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
            >
                <button
                    className="text-lg p-1 bg-black dark:bg-white text-white dark:text-black rounded-full shadow-lg border border-white dark:border-gray-800 transition-transform hover:scale-110"
                    aria-label="More options"
                >
                    <IoEllipsisVertical />
                </button>

                {/* Box (Shows on Hover) */}
                <div
                    className={`absolute -top-7 right-5 rounded-xl bg-white dark:bg-gray-800 shadow-lg px-3 py-2 transition-transform duration-200 transform ${isDropdownOpen ? "scale-115 opacity-100" : "scale-75 opacity-0 pointer-events-none"
                        }`}
                >
                    <div className="flex  flex-row-reverse gap-3 px-2 py-1 ">

                        <div className="scale-110 mt-1">
                            <ThemeToggle />
                        </div>

                        {/* Button to Open Contact Admin Modal */}
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="text-lg p-2.5 bg-black dark:bg-none text-white  rounded-full shadow-lg border border-white dark:border-gray-800 transition-transform hover:scale-110"
                        >
                            <MdContactPhone />
                        </button>
                    </div>
                </div>

                {/* Modal Component */}
                <ContactAdminModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />


            </div>


        </div>
    );
};

export default ScrollUpButton;
