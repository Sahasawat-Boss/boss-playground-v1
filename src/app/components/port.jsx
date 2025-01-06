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
        <>
            <h1 className='bg-black text-white text-center text-4xl font-bold p-10'>
                MY Recent Project
            </h1>

            <section className="bg-black py-8  text-white">
                <div className="container mx-auto px-2 md:px-12 ">
                    <h2 className="text-2xl font-bold text-center mb-4">BOSSFLIX</h2>
                    <h2 className="text-lg text-center mb-10">UI Project created by using tailwind</h2>
                    <div className="grid grid-cols-2 gap-4 ">
                        {Portfolio1s.map((item, index) => (
                            <Portfolio1 key={index} image={item.image} title={item.title} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-black pt-8 pb-28 text-white">
                <div className="container mx-auto px-2 md:px-12 ">
                    <h2 className="text-2xl font-bold text-center mb-4">MyWeb1.2 </h2>
                    <h2 className="text-lg text-center mb-10 ">UI Project created by using HTML and pure CSS</h2>
                    <div className="grid grid-cols-2 gap-4 ">
                        <div className="relative group animation-appearUp">
                            <img
                                src={"picture/Myweb1.png"}
                                alt={'MyWeb1.2 Sample'}
                                className="w-[full] transition-transform transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                                <h3 className="text-lg text-white">MyWeb1.2 Sample</h3>
                            </div>
                        </div>
                        <div className="relative group animation-appearUp">
                            <img
                                src={"picture/Myweb2.png"}
                                alt={'Myweb2.2 Sample'}
                                className="w-[full] transition-transform transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                                <h3 className="text-lg text-white">Myweb2.2 Sample</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Port;
