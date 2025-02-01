import React, { useState, useEffect } from 'react';

const timelineData = [
    { year: "2022", title: "IT Business Analyst", icon: "💻", description: "Started IT career as a Business Analyst" },
    { year: "2024", title: "Learning Coding", icon: "🖥️", description: "Started learning to code and build projects" },
    { year: "Current", title: "Becoming Developer", icon: "🚀", description: "Currently transitioning into a developer role" },
];

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
            {/* Timeline Line */}
            <div className="absolute top-44 left-0 w-full h-1 bg-blue-500 dark:bg-blue-400 transition-all duration-500 ease-in-out"></div>

            {/* Timeline Items */}
            <div className="flex justify-center items-center space-x-8 lg:space-x-16 px-8">
                {timelineData.map((event, index) => (
                    <div key={index} className="relative flex flex-col items-center min-w-[220px] px-3 text-center">

                        {/* Timeline Point - Animated on Hover */}
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white text-3xl shadow-lg border-4 border-white dark:border-gray-800 transform transition-all duration-300 hover:scale-125 hover:shadow-blue-400 dark:hover:shadow-blue-600">
                            {event.icon}
                        </div>

                        {/* Timeline Content - Animated on Hover */}
                        <div className="mt-4 bg-white dark:bg-gray-800 py-4 px-8 shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <h3 className="text-lg font-bold text-blue-500 dark:text-blue-400">{event.year}</h3>
                            <h4 className="text-xl font-semibold mt-1 text-gray-800 dark:text-gray-200">{event.title}</h4>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Studied Time Section */}
            <div className='flex justify-center'>
                <div className="text-xl w-fit mt-10 text-center bg-white dark:bg-gray-800 py-5 px-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
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
