import React from 'react';

function CardInterest() {
    return (
        <div className="bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:to-black pb-24 px-10">
            <h1 className="text-black dark:text-white font-extrabold text-4xl text-center pt-12 pb-8">
                Career Skills and Tools
            </h1>
            <div className="flex flex-wrap gap-10 justify-center items-start">
                {/* IT Business Analyst Card */}
                <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-200% animate-gradient-border hover:scale-110 transition-all duration-300">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                        <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">IT Business Analyst</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 w-[450px]">
                            I specialize in gathering requirements, designing workflows, and ensuring seamless communication between stakeholders.
                        </p>
                        <h4 className="text-purple-700 dark:text-purple-400 font-bold mb-2">Things I enjoy designing:</h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">UX, UI, Web, Web-Apps</p>
                        <h4 className="text-purple-700 dark:text-purple-400 font-bold mb-2">Design Tools:</h4>
                        <p className="text-gray-600 dark:text-gray-400">Moqups</p>
                    </div>
                </div>

                {/* Frontend Developer Card */}
                <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-200% animate-gradient-border hover:scale-110 transition-all duration-300">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                    <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">Developer</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 w-[450px]">
                            I enjoy coding from scratch and turning ideas into reality using modern web technologies.
                        </p>
                        <h4 className="text-purple-700 dark:text-purple-400 font-bold mb-2">Languages I speak:</h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            HTML, CSS, JavaScript, React, Next.js
                        </p>
                        <h4 className="text-purple-700 dark:text-purple-400 font-bold mb-2">Dev Tools:</h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Tailwind CSS, GitHub, VS Code
                        </p>
                        <h4 className="text-purple-700 dark:text-purple-400 font-bold mb-2">Database Knowledge:</h4>
                        <p className="text-gray-600 dark:text-gray-400">
                            MongoDB
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardInterest;
