import React, { useState } from 'react';

function ToolTipServ() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="relative inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="hover:cursor-pointer w-[4.6rem] h-8 bg-none">
            </div>

            {isHovered && (
                <div className="absolute text-white text-sm rounded-lg py-4 px-5 mt-2 ml-5 bg-gray-500 w-[465px] shadow-md shadow-[#707070] transition-opacity duration-300 opacity-100">
                    <p className="font-semibold mb-1">Severity Level: A color-coded tag is used to highlight the priority level:</p>
                    <div className="ml-4">🟡 <span className="font-semibold text-yellow-400">Low</span> – Minimal impact but should be addressed.</div>
                    <div className="ml-4">🟠 <span className="font-semibold text-orange-400">Medium</span> – Moderate impact that needs attention soon.</div>
                    <div className="ml-4">🔴 <span className="font-semibold text-red-400">High</span> – Critical issue requiring immediate resolution.</div>
                </div>
            )}
        </div>
    );
}

export default ToolTipServ;
