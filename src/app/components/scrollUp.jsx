import React, { useState, useEffect } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { IoEllipsisVertical } from "react-icons/io5";
import ThemeToggle from "./themeToggle";
import ContactAdminModal from "./contactAdminModal ";
import { MdContactPhone } from "react-icons/md";

const ScrollUpButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 105);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="fixed bottom-3.5 right-4 flex flex-col items-end gap-2 z-50 ">
            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={` text-white dark:text-black bg-gray-900 dark:bg-white text-3xl border border-gray-400 dark:border-[gray] rounded-full transition-transform hover:scale-110 
                ${isVisible ? "opacity-80 mr-0.5" : "opacity-0 mr-0.5 pointer-events-none"}`}
                aria-label="Scroll to top"
            >
                <IoMdArrowDropup />
            </button>

            {/* More Options Button */}
            <div
                className="relative mr-1 group"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
            >
                <button
                    className="opacity-80 text-lg p-[4.15px] bg-gray-900 dark:bg-white text-white dark:text-black rounded-full shadow-lg border border-gray-400 dark:border-gray-800 transition-transform hover:scale-110"
                    aria-label="More options"
                >
                    <IoEllipsisVertical />
                </button>

                {/* Dropdown Box */}
                <div
                    className={` absolute -top-7 right-5 rounded-xl bg-white dark:bg-gray-800 shadow-lg px-3 py-2 transition-transform duration-200 transform ${
                        isDropdownOpen ? "scale-115 opacity-100" : "scale-75 opacity-0 pointer-events-none"
                    }`}
                >
                    <div className="flex flex-row-reverse gap-3 px-2 py-1">
                        <div className="scale-110 mt-1">
                            <ThemeToggle />
                        </div>

                        {/* Contact Admin Button */}
                        <button
                            onClick={() => {
                                setIsModalOpen(true);
                                setIsDropdownOpen(false); // Close dropdown when modal opens
                            }}
                            className="text-lg p-2.5 bg-black dark:bg-none text-white rounded-full shadow-lg border border-white dark:border-gray-800 hover:bg-blue-500"
                        >
                            <MdContactPhone />
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal Component */}
            <ContactAdminModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default ScrollUpButton;
