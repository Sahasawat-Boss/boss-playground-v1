import React from "react";
import { IoReloadCircleOutline } from "react-icons/io5";

const ReloadButton = () => {
    const handleReload = () => {
        window.location.reload(); // Reloads the current page
    };

    return (
        <button
            onClick={handleReload}
            className="flex bg-blue-600 text-white mb-3 py-2 px-4 rounded-lg hover:bg-blue-500 shadow-md shadow-[#a7a7a7]"
        >
            <IoReloadCircleOutline className="text-2xl mr-2" />
            Reload Page
        </button>
    );
};

export default ReloadButton;
