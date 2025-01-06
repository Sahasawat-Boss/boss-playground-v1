import React from 'react';

function CardInterest() {
    return (
        <>
        <div className="bg-black py-24 px-10">
            <div className="flex gap-5 justify-center items-center">
                {/* Designer Card */}
                <div className="w-[500px] bg-white p-8 rounded-xl shadow-lg text-center">
                    <h3 className="text-xl font-bold mb-2">IT Business Analyst</h3>
                    <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, adipisci vitae numquam moles
                    </p>
                    <h4 className="text-purple-700 font-bold">Things I enjoy designing:</h4>
                    <p className="text-gray-600 mb-4">UX, UI, Web, Apps</p>
                    <h4 className="text-purple-700 font-bold">Design Tools:</h4>
                    <p className="text-gray-600">Moqup, Figma (learning soon) </p>
                </div>

                {/* Frontend Developer Card */}
                <div className="w-[500px] bg-white p-8 rounded-xl shadow-lg text-center">
                    <h3 className="text-xl font-bold mb-2">Frontend Developer</h3>
                    <p className="text-gray-600 mb-4">
                        I like to code things from scratch and enjoy bringing ideas to life in the browser.
                    </p>
                    <h4 className="text-purple-700 font-bold">Languages I speak:</h4>
                    <p className="text-gray-600 mb-4">HTML, CSS</p>
                    <h4 className="text-purple-700 font-bold">Dev Tools:</h4>
                    <p className="text-gray-600">
                        Github, Tailwind CSS, VS Code
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default CardInterest;
