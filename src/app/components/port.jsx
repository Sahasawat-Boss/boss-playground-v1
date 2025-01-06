import React from 'react';

// Reusable PortfolioItem Component
const PortfolioItem = ({ image, title }) => {
    return (
        <div className="relative group">
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
    const portfolioItems = [
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
        <section className="bg-black py-12 pb-32 text-white">
            <div className="container mx-auto px-2 md:px-12">
                <h2 className="text-2xl font-bold text-center">BOSSFLIX</h2>
                <h2 className="text-lg font-bold text-center my-10">UI Project created by using tailwind</h2>
                <div className="grid grid-cols-2 gap-4">
                    {portfolioItems.map((item, index) => (
                        <PortfolioItem key={index} image={item.image} title={item.title} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Port;
