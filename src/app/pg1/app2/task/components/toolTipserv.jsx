import React, { useState } from 'react';

function ToolTipServ() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="relative inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="hover:cursor-pointer w-[4rem] h-7 bg-red-300">
            </div>

            {isHovered && (
                <div className="absolute text-black dark:text-white text-[0.95rem] rounded-sm py-4 px-6 mt-2 ml-5 border border-gray-400 bg-white dark:bg-gray-500 w-[430px] shadow-lg transition-opacity duration-300 opacity-100">
                    <p className="font-semibold mb-1">A color-coded tag is used to highlight the Priority Level:</p>
                    <div className='ml-1.5 drop-shadow-md'>🟡 <span className=" text-yellow-400">Low</span> – Minimal impact but should be addressed.</div>
                    <div className='ml-1.5 drop-shadow-md'>🟠 <span className=" text-orange-400">Medium</span> – Moderate impact that needs attention soon.</div>
                    <div className='ml-1.5 drop-shadow-md'>🔴 <span className=" text-red-400">High</span> – Critical issue requiring immediate resolution.</div>
                </div>
            )}
        </div>
    );
}

export default ToolTipServ;
