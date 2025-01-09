import React, { useState, useEffect } from "react";
import { IoMdArrowDropup } from "react-icons/io";

const ScrollUpButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 bg-white text-4xl border border-black p-1 rounded-full transition-transform duration-200 hover:scale-125
            ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            aria-label="Scroll to top"
            style={{
                zIndex: 50, // Ensure it appears above other elements
            }}
        >
            <IoMdArrowDropup />
        </button>
    );
};

export default ScrollUpButton;
