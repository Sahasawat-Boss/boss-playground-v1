import React from 'react';

// Reusable Portfolio1 Component
const Portfolio1 = ({ image, title }) => {
    return (
        <div className="relative group overflow-hidden rounded-lg shadow-lg dark:shadow-none animation-appearUp">
            <img
                src={image}
                alt={title}
                className="w-full h-56 object-cover transition-transform transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-lg text-white font-semibold">{title}</h3>
            </div>
        </div>
    );
};

// Main Portfolio Section
function Port() {
    const portfolioProjects = [
        {
            id: '1',
            sectionTitle: 'BOSSFLIX',
            description:
                'BOSSFLIX is a personal project replicating the Netflix interface using HTML and Tailwind CSS. It helped me practice modern web design principles like responsiveness, component-based design, and utility-first styling.',
            projects: [
                { image: 'picture/BF1.png', title: 'BOSSFLIX Sample 1' },
                { image: 'picture/BF2.png', title: 'BOSSFLIX Sample 2' },
                { image: 'picture/BF3.png', title: 'BOSSFLIX Sample 3' },
                { image: 'picture/BF4.png', title: 'BOSSFLIX Sample 4' },
            ],
        },
        {
            id: '2',
            sectionTitle: 'MyWeb1.2',
            description:
                'MyWeb1.2 is a project I created using HTML and pure CSS to practice building web applications from scratch. This project improved my skills in designing responsive layouts, creating custom styles, and building reusable components without frameworks.',
            projects: [
                { image: 'picture/Myweb1.png', title: 'MyWeb1.2 Sample' },
                { image: 'picture/Myweb2.png', title: 'MyWeb2.2 Sample' },
            ],
        },
    ];

    return (
        <div className="xl:px-20 bg-gradient-to-b from-gray-100 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900">
            <h1 className="text-4xl font-extrabold text-center pt-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                My Recent Projects
            </h1>

            {portfolioProjects.map((section) => (
                <section key={section.id} className="py-16">
                    <div className="container mx-auto px-6 xl:px-20">
                        <h2 className="text-3xl font-bold text-center mb-4 text-blue-500">{section.sectionTitle}</h2>
                        <p className="text-lg text-center mb-10 text-gray-700 dark:text-gray-300 xl:px-40 leading-relaxed">
                            {section.description}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {section.projects.map((project, index) => (
                                <Portfolio1 key={index} image={project.image} title={project.title} />
                            ))}
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
}

export default Port;
