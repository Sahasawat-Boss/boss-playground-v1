import React from 'react';

function AboutMe() {
    return (
        <div className="flex-col items-center justify-center pb-20 bg-gradient-to-b from-white via-gray-100 to-white dark:from-black dark:via-gray-900 dark:to-black">
            {/* Hello Section */}
            <section className="text-center py-10 text-black dark:text-white">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-extrabold animate-fade-in mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                        Hello, I'm Boss
                    </h1>
                    <p className="text-lg mt-4 animate-fade-in text-gray-700 dark:text-gray-300">
                        I am a business analyst pursuing an opportunity to transition into a developer career.
                    </p>
                    <div className="mt-8 relative">
                        {/* Decorative Background Glow */}
                        <div className="absolute inset-0 w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50 -z-10 mx-auto"></div>

                        {/* Profile Image */}
                        <img
                            src="/picture/MyPic.jpg"
                            alt="Profile"
                            className="mx-auto rounded-full w-60 h-60 border-4 border-white dark:border-gray-800 transform transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-6 hover:shadow-2xl hover:shadow-blue-500/50 animate-fade-in shadow-lg dark:shadow-none"
                        />
                    </div>

                </div>
            </section>

            {/* About Me Section */}
            <section className="relative w-[90%] lg:w-[850px] mx-auto mt-10 px-10 py-8 bg-gradient-to-r from-white via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-2xl shadow-gray-300 dark:shadow-gray-800 rounded-xl animate-fade-in-up">
                <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-200 to-purple-200 opacity-30 dark:from-blue-900 dark:to-purple-900 blur-2xl rounded-xl"></div>
                <div className="container mx-auto text-center text-black dark:text-gray-300">
                    <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-6">
                        About Me
                    </h2>
                    <p className="text-lg mt-4 leading-relaxed">
                        I began my career in IT at the age of 22 as a{' '}
                        <span className="text-blue-500 font-bold">Junior Business Analyst</span>. Over the years, I have gained extensive experience in gathering both business and technical requirements, designing workflows, creating mockups, and testing systems. My role also involves evaluating system flows, user experience, and user interfaces (UX/UI), identifying bugs, and ensuring that the final product is error-free before it is delivered to clients.
                    </p>
                    <p className="text-lg mt-6 leading-relaxed">
                        Now, as I approach the age of 25, I am seeking a new challenge in my career. I am passionate about transitioning into the field of{' '}
                        <span className="text-purple-500 font-bold">web or web-app development</span>. To achieve this goal, I am dedicated to learning and practicing the skills necessary to thrive in this new role. If my profile interests you or you believe I could be a good fit for your team, please feel free to reach out to me.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default AboutMe;
