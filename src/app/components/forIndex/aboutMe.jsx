import React from 'react'

function AboutMe() {
    return (
        <div className='flex-col items-center justify-center px-16 pb-20 bg-white dark:bg-black '>
            {/*-- Hello Section --*/}
            <section className="text-center py-10 text-black dark:text-white">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold animate-fade-in-up">Hello, I'm Boss</h1>
                    <p className="text-lg mt-4">I am a business analyst pursuing for an opportunity into a developer career.</p>
                    <div className="mt-8">
                        <img
                            src="\picture\MyPic.jpg"
                            alt="Profile"
                            className="mx-auto rounded-full w-60 h-60 transform transition-all duration-300 ease-in-out hover:scale-125 hover:rotate-3 hover:shadow-white animate-fade-in-up animate-fade shadow-lg shadow-[#7c7c7c] dark:shadow-none"
                        />
                    </div>
                </div>
            </section>
            {/*-- Hello Section --*/}

            {/*-- About Me Section--*/}
            <section className="bg-[#ffffff] dark:bg-white shadow-lg shadow-[#c0c0c0] dark:shadow-none w-[850px] mx-auto px-10 py-6 rounded-xl animation-appearUp">
                <div className="container mx-auto text-center text-black dark:text-black">
                    <h2 className="text-2xl font-bold">About Me</h2>
                    <p className="text-lg mt-4">I began my career in IT at the age of 22 as a <span className='text-[#4f35df] font-bold'>Junior Business Analyst. </span> Over the years, I have gained extensive experience in gathering both business and technical requirements, designing workflows, creating mockups, and testing systems. My role also involves evaluating system flows, user experience and interface (UX/UI), identifying bugs, and ensuring that the final product is error-free before it is delivered to clients.</p>
                    <p className="text-lg mt-4">Now, as I approach the age of 25, I am seeking a new challenge in my career. I am passionate about transitioning into the field of <span className='text-[#4f35df] font-bold'> web or web-app developer </span>. To achieve this goal, I am dedicated to learning and practicing the skills necessary to thrive in this new role. If my profile interests you or you believe I could be a good fit for your team, please feel free to reach out to me.</p>
                </div>
            </section>
        </div>
    )
}

export default AboutMe