import React from 'react';

    // Reusable PortfolioItem Component
    const PortfolioItem = ({ image, title }) => {
        return (
            <div className="relative group">
            <img
                src={image}
                alt={title}
                className="rounded-lg shadow-lg w-full transition-transform transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                <h3 className="text-xl font-semibold text-white">{title}</h3>
            </div>
            </div>
        );
    };

    // Main Portfolio Section
    function Port() {
    const portfolioItems = [
        {
        image: "https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?q=80&w=1076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Project Title 1"
        },
        {
        image: "https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?q=80&w=1076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Project Title 2"
        },
        {
        image: "https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?q=80&w=1076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Project Title 3"
        },
        {
        image: "https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?q=80&w=1076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Project Title 4"
        },
        {
        image: "https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?q=80&w=1076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Project Title 4"
        },
        {
        image: "https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?q=80&w=1076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Project Title 4"
        },
    ];

    return (
        <section className="bg-black py-12 pb-32 text-white">
        <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-2xl font-bold text-center mb-10">PORTFOLIO</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {portfolioItems.map((item, index) => (
                    <PortfolioItem key={index} image={item.image} title={item.title} />
                ))}
            </div>
        </div>
        </section>
    );
    }

export default Port;
