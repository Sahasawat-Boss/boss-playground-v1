import React from 'react'

function AboutMe() {
  return (
    <div className='flex-col items-center justify-center h-[90vh] px-10 pb-20 bg-[#0b0b14] border-y-[1px] border-white'>
        {/*-- Hero Section --*/}
        <section className="text-center py-12 text-white">
            <div className="container mx-auto">
            <h1 className="text-4xl font-bold">Hello, I'm Boss</h1>
            <p className="text-lg mt-4">I am a business analyst pursuing for an opportunity into a developer career.</p>
            <div className="mt-8">
            <img
                src="\S__20348934 - Copy.jpg"
                alt="Profile"
                className="mx-auto rounded-full w-60 h-60"/>
            </div>
            </div>
        </section>
        {/*-- Hero Section --*/}

        {/*-- Hero Section --*/}
        <section className="bg-gray-100 px-10 py-10">
            <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold">About Me</h2>
            <p className="text-lg mt-4">I began my career in IT at the age of 22 as a Junior Business Analyst. Over the years, I have gained extensive experience in gathering both business and technical requirements, designing workflows, creating mockups, and testing systems. My role also involves evaluating system flows, user experience and interface (UX/UI), identifying bugs, and ensuring that the final product is error-free before it is delivered to clients.</p>
            <p className="text-lg mt-4">Now, as I approach the age of 25, I am seeking a new challenge in my career. I am passionate about transitioning into the field of web or web-app development. To achieve this goal, I am dedicated to learning and practicing the skills necessary to thrive in this new role. If my profile interests you or you believe I could be a good fit for your team, please feel free to reach out to me.</p>
            </div>
        </section>
    </div>
)
}

export default AboutMe