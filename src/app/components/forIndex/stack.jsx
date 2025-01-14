import React from 'react';

function CardInterest() {
    return (
        <>
        <div className="bg-white dark:bg-black pb-24 px-10 ">
            <h1 className='text-black dark:text-white font-semibold text-3xl text-center pt-12 pb-8'>
                Career Skills and Tools
            </h1>
            <div className="flex gap-5 justify-center items-center animation-appearUp">
                {/* Designer Card */}
                <div className="w-[500px] bg-gray-100 dark:bg-white p-8 rounded-xl shadow-lg shadow-[#c0c0c0] dark:shadow-none text-center">
                    <h3 className="text-xl font-bold mb-2 text-black">IT Business Analyst</h3>
                    <p className="text-gray-600 mb-4">
                        Lorem ipsum sasd sadasds adipisicing elit. Rerum, adipisci vitae numquam moles
                    </p>
                    <h4 className="text-purple-700 font-bold">Things I enjoy designing:</h4>
                    <p className="text-gray-600 mb-4">UX, UI, Web, Apps</p>
                    <h4 className="text-purple-700 font-bold">Design Tools:</h4>
                    <p className="text-gray-600">Moqup, Figma (learning soon) </p>
                </div>

                {/* Frontend Developer Card */}
                <div className="w-[500px] bg-gray-100 dark:bg-white p-8 rounded-xl shadow-lg shadow-[#c0c0c0] dark:shadow-none text-center animation-appearUp">
                    <h3 className="text-xl font-bold mb-2 text-black">Frontend Developer</h3>
                    <p className="text-gray-600 mb-4">
                        I like to code things from scratch and enjoy bringing ideas to life in the browser.
                    </p>
                    <h4 className="text-purple-700 font-bold">Languages I speak:</h4>
                    <p className="text-gray-600 mb-4">HTML, CSS, JavaScript, Next.js (React)</p>
                    <h4 className="text-purple-700 font-bold">Dev Tools:</h4>
                    <p className="text-gray-600">
                        Tailwind CSS, Github, VS Code
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default CardInterest;
