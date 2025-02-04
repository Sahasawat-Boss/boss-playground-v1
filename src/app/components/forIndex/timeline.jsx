import React, { useState, useEffect } from 'react';

const HorizontalTimeline = () => {
    const [studiedDays, setStudiedDays] = useState(0);

    // Calculate studied time from 23 Nov 2024 to Now
    useEffect(() => {
        const startDate = new Date("2024-11-23");
        const currentDate = new Date();

        const diffTime = currentDate - startDate; // Difference in milliseconds
        const daysPassed = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        setStudiedDays(daysPassed > 0 ? daysPassed : 0); // Ensures no negative values
    }, []);

    return (
        <div className="relative w-full overflow-x-clip py-8 pb-4 px-4 bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800">

            {/* Timeline Animation */}
            <div className="absolute top-44 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-[200%] animate-moving-gradient"></div>

            {/* Timeline Items */}
            <div className="flex justify-center items-center space-x-8 lg:space-x-16 px-8">
                {/* Timeline Point 1 */}
                <div className="relative flex flex-col items-center min-w-[220px] px-3 text-center animation-appearLeft">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white text-3xl shadow-lg border-4 border-white dark:border-gray-800 transform transition-all duration-300 hover:scale-125 hover:shadow-blue-400 dark:hover:shadow-blue-600">
                        💻
                    </div>
                    <div className="mt-4 bg-white dark:bg-gray-800 py-4 px-8 shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <h3 className="text-lg font-bold text-blue-500 dark:text-blue-400">2022</h3>
                        <h4 className="text-xl font-semibold mt-1 text-gray-800 dark:text-gray-200">IT Business Analyst</h4>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">Started IT career as a Business Analyst</p>
                    </div>
                </div>

                {/* Timeline Point 2 */}
                <div className="relative flex flex-col items-center min-w-[220px] px-3 text-center animation-appearUp">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white text-3xl shadow-lg border-4 border-white dark:border-gray-800 transform transition-all duration-300 hover:scale-125 hover:shadow-blue-400 dark:hover:shadow-blue-600">
                        🖥️
                    </div>
                    <div className="mt-4 bg-white dark:bg-gray-800 py-4 px-8 shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <h3 className="text-lg font-bold text-blue-500 dark:text-blue-400">2024</h3>
                        <h4 className="text-xl font-semibold mt-1 text-gray-800 dark:text-gray-200">Learning Coding</h4>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">Started learning to code and build projects</p>
                    </div>
                </div>

                {/* Timeline Point 3 */}
                <div className="relative flex flex-col items-center min-w-[220px] px-3 text-center animation-appearRight">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white text-3xl shadow-lg border-4 border-white dark:border-gray-800 transform transition-all duration-300 hover:scale-125 hover:shadow-blue-400 dark:hover:shadow-blue-600">
                        🚀
                    </div>
                    <div className="mt-4 bg-white dark:bg-gray-800 py-4 px-8 shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <h3 className="text-lg font-bold text-blue-500 dark:text-blue-400">Current</h3>
                        <h4 className="text-xl font-semibold mt-1 text-gray-800 dark:text-gray-200">Becoming Developer</h4>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">Currently transitioning into a developer role</p>
                    </div>
                </div>
            </div>

            {/* Studied Time Section */}
            <div className='flex justify-center animation-appearUp'>
                <div className="text-xl w-fit m-4 text-center bg-white dark:bg-gray-800 py-5 px-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <h2 className="font-semibold text-gray-500 dark:text-gray-300">Studied Time</h2>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                        I have been studying for <span className="text-blue-500 font-bold text-2xl">{studiedDays}</span> days since 23 Nov 2024.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HorizontalTimeline;
