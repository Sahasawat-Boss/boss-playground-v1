import React from 'react';

function CardInterest() {
    return (
        <div className="bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:to-black pb-24 px-10">
            <h1 className="text-black dark:text-white font-extrabold text-4xl text-center pt-12 pb-8">
                Career Skills and Tools
            </h1>
            <div className="flex flex-col gap-10 flex-wrap justify-center items-center">

                {/* Frontend Developer Card */}
                <div className="relative w-[500px] p-[4px] rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-200% animate-gradient-border hover:scale-125 hover:z-10 transition-all duration-300">
                    <div className="bg-white dark:bg-gray-800 rounded-xl py-4 px-12 shadow-md">
                        <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">Developer</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            I enjoy coding from scratch and turning ideas into reality using modern web technologies.
                        </p>

                        <div className='border-b-2 dark:border-b-2 border-gray-200 dark:border-gray-600 py-2'>
                            <h4 className="text-purple-700 dark:text-purple-400 font-bold mb-2">Languages I speak:</h4>
                            <p className="text-gray-600 dark:text-gray-400">
                                HTML, Vanila CSS, JavaScript, TypeScript
                            </p>
                            <div className="flex gap-2">
                                <img src="/picture/devLogo/html.jpg" alt="HTML" className="w-10 h-10 rounded-lg" />
                                <img src="/picture/devLogo/css.jpg" alt="CSS" className="w-10 h-10 rounded-lg" />
                                <img src="/picture/devLogo/js.png" alt="JavaScript" className="w-10 h-10 rounded-lg" />
                                <img src="/picture/devLogo/ts.png" alt="TypeScript" className="w-10 h-10 rounded-lg" />
                            </div>
                        </div>

                        <div className='border-b-2 dark:border-b-2 border-gray-200 dark:border-gray-600 py-2'>
                            <h4 className="text-purple-700 dark:text-purple-400 font-bold mb-2">Framework and Library:</h4>
                            <p className="text-gray-600 dark:text-gray-400">
                                React, Next.js
                            </p>
                            <div className="flex gap-2">
                                <img src="/picture/devLogo/react.webp" alt="React" className="w-10 h-10 rounded-lg" />
                                <img src="/picture/devLogo/nextjs.png" alt="Next.js" className="w-10 h-10 rounded-lg" />
                            </div>
                        </div>

                        <div className='border-b-2 dark:border-b-2 border-gray-200 dark:border-gray-600 py-2'>
                            <h4 className="text-purple-700 dark:text-purple-400 font-bold mb-2">Dev Tools:</h4>
                            <p className="text-gray-600 dark:text-gray-400">
                                VS Code, GitHub, TailwindCSS
                            </p>
                            <div className="flex gap-2">
                                <img src="/picture/devLogo/vscode.png" alt="VS Code" className="w-10 h-10 rounded-lg" />
                                <img src="/picture/devLogo/github.jpg" alt="GitHub" className="w-10 h-10 rounded-lg" />
                                <img src="/picture/devLogo/twcss.jpg" alt="TailwindCSS" className="w-9 h-9 rounded-lg" />
                            </div>
                        </div>

                        <div className='py-2'>
                            <h4 className="text-purple-700 dark:text-purple-400 font-bold mb-2">NoSQL Database:</h4>
                            <p className="text-gray-600 dark:text-gray-400">
                                MongoDB, Cloudinary
                            </p>
                            <div className="flex gap-2">
                                <img src="/picture/devLogo/mdb.jpg" alt="MongoDB" className="w-10 h-10 rounded-lg" />
                                <img src="/picture/devLogo/cloud.png" alt="Cloudinary" className="bg-white w-10 h-10 rounded-lg" />
                            </div>
                        </div>

                    </div>
                </div>

                {/* IT Business Analyst Card */}
                <div className="relative w-[500px] p-[4px] rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-200% animate-gradient-border hover:scale-125 hover:z-10 transition-all duration-300">
                    <div className="bg-white dark:bg-gray-800 rounded-xl py-4 px-12 shadow-md">
                        <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">IT Business Analyst</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            I specialize in gathering requirements, designing workflows, and ensuring seamless communication between stakeholders.
                        </p>
                        <h4 className="text-purple-700 dark:text-purple-400 font-bold mb-2">Things I enjoy designing:</h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">UX, UI, Web, Web-Apps</p>
                        <h4 className="text-purple-700 dark:text-purple-400 font-bold mb-2">Design Tools:</h4>
                        <p className="text-gray-600 dark:text-gray-400">Moqups</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CardInterest;
