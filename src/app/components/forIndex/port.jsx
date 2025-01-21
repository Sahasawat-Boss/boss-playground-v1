import { Container } from 'postcss';
import React from 'react';

// Reusable Portfolio1 Component
const Portfolio1 = ({ image, title }) => {
    return (
        <div className="relative group animation-appearUp">
            <img
                src={image}
                alt={title}
                className="w-[full] transition-transform transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                <h3 className="text-lg text-white">{title}</h3>
            </div>
        </div>
    );
};

// Main Portfolio Section
function Port() {
    const Portfolio1s = [
        {
            image: "picture/BF1.png",
            title: "BOSSFLIX Sample"
        },
        {
            image: "picture/BF2.png",
            title: "BOSSFLIX Sample"
        },
        {
            image: "picture/BF3.png",
            title: "BOSSFLIX Sample"
        },
        {
            image: "picture/BF4.png",
            title: "BOSSFLIX Sample"
        },
    ];

    return (
        <div className='xl:px-20'>
            <h1 className='dark:bg-black text-black dark:text-white text-center text-4xl font-bold py-16'>
                MY Recent Project
            </h1>

            {/*Port1 Section*/}
            <section className="bg-white dark:bg-black text-black dark:text-white '">
                <div className="container mx-auto px-10 xl:px-20">
                    <h2 className="text-2xl font-bold text-center mb-4">BOSSFLIX</h2>
                    <h2 className="text-lg text-center mb-10 xl:px-40">BOSSFLIX is a personal project I created to replicate the look and feel of Netflix, using HTML and Tailwind CSS to design a user interface. The project helped me practice modern web design principles like responsiveness, component-based design, and utility-first styling.</h2>
                    <div className="grid grid-cols-2 gap-10 xl:gap-20 lg:px-56">
                        {Portfolio1s.map((item, index) => (
                            <Portfolio1 key={index} image={item.image} title={item.title}/>
                        ))}
                    </div>
                </div>
            </section>
            {/*Port1 Section*/}

            {/*Port2 Section*/}
            <section className="bg-white dark:bg-black py-20 text-black dark:text-white">
                <div className="container mx-auto px-2 xl:px-20">
                    <h2 className="text-2xl font-bold text-center mb-4">MyWeb1.2 </h2>
                    <h2 className="text-lg text-center mb-10 xl:px-40 ">MyWeb1.2 is a personal project I created using HTML and pure CSS to practice building web applications from scratch. This project helped me improve my skills in designing responsive layouts, creating custom styles, and building reusable components without relying on frameworks.</h2>
                    <div className="grid grid-cols-2 gap-10 xl:gap-20 px-10 lg:px-36">
                        <div className="w-full relative group animation-appearUp shadow-lg shadow-[#c0c0c0] dark:shadow-none">
                            <img
                                src={"picture/Myweb1.png"}
                                alt={'MyWeb1.2 Sample'}
                                className="w-full transition-transform transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                                <h3 className="text-lg text-white">MyWeb1.2 Sample</h3>
                            </div>
                        </div>
                        <div className="w-[full] relative group animation-appearUp shadow-lg shadow-[#c0c0c0] dark:shadow-none">
                            <img
                                src={"picture/Myweb2.png"}
                                alt={'Myweb2.2 Sample'}
                                className=" transition-transform transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                                <h3 className="text-lg text-white">Myweb2.2 Sample</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Port2 Section*/}
        </div>
    );
}

export default Port;
