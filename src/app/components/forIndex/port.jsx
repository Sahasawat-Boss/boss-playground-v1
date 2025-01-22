import React from 'react';

// Reusable Portfolio1 Component
const Portfolio1 = ({ image, title }) => {
    return (
        <div className="relative group hover:scale-125 transition-all duration-300 overflow-hidden rounded-lg shadow-lg dark:shadow-none animation-appearUp">
            <img
                src={image}
                alt={title}
                className="w-full h-60 object-cover transition-transform transform group"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 ">
                <h3 className="text-lg text-white drop-shadow-lg font-semibold">{title}</h3>
            </div>
        </div>
    );
};

// Main Portfolio Section
function Port() {
    const portfolioProjects = [
        {
            id: '1',
            sectionTitle: 'React/Next.JS',
            description:
                'These projects demonstrate my hands-on experience in building full-stack web applications using Next.js (React) for dynamic interfaces, Tailwind CSS for efficient styling, and various plugins to enhance functionality. I also connected these applications to MongoDB for robust data management, focusing on creating responsive, scalable, and functional solutions while deepening my understanding of full-stack development.',
            projects: [
                { image: 'picture/crude1.png', title: 'CRUDv2 App Sample ' },
                { image: 'picture/crude2.png', title: 'CRUDv2 App Sample ' },
                { image: 'picture/crude3.png', title: 'CRUDv2 App Sample ' },
                { image: 'picture/crude4.png', title: 'CRUDv2 App Sample ' },
            ],
        },
        {
            id: '2',
            sectionTitle: 'HTML/Tailwind CSS',
            description:
                'These projects showcase my skills and practice in building web applications from scratch using HTML, Tailwind CSS, and some JavaScript. They represent my journey of learning and applying front-end development concepts, focusing on responsive design, user experience, and clean, maintainable code. Each project was created to enhance my understanding of web technologies and improve my ability to create visually appealing and functional interfaces.',
            projects: [
                { image: 'picture/BF1.png', title: 'BOSSFLIX Sample 1' },
                { image: 'picture/BF2.png', title: 'BOSSFLIX Sample 2' },
                { image: 'picture/BF3.png', title: 'BOSSFLIX Sample 3' },
                { image: 'picture/BF4.png', title: 'BOSSFLIX Sample 4' },
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
                    <div className="container mx-auto px-14 xl:px-20">
                        <h2 className="text-3xl font-bold text-center mb-4 text-blue-500">{section.sectionTitle}</h2>
                        <p className="text-lg text-center mb-14 text-gray-700 dark:text-gray-300 px-12 xl:px-40 leading-relaxed">
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
