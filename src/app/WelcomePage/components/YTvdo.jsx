import React, { useRef } from "react";

import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

function YTvdo() {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
        }
    };

    return (
        <div className="pb-16 animate-fade-in">
            {/* Header Section */}
            <div className="text-center text-black dark:text-white py-6">
                <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                    Lofi Chill Beats <span className="text-yellow-500">🌙</span>
                </h1>
                <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
                    Stress Relief, Study, Work with Chillhop Mix [ Chill Music ]
                </p>
            </div>

            {/* Video Section with Navigation */}
            <div className="flex justify-center items-center gap-6">
                {/* Left Button */}
                <button
                    onClick={scrollLeft}
                    className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-full shadow-md text-5xl hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                    <CiCircleChevLeft />
                </button>

                {/* Scrollable Video Section */}
                <div
                    ref={scrollRef}
                    className="flex w-[75%] 2xl:w-[65%] px-4 gap-8 overflow-hidden overflow-x-scroll scroll-smooth scrollbar-hide"
                >
                    {/* Video 1 */}
                    <div className="relative flex-shrink-0 transform transition-all duration-300 ease-in-out hover:scale-105 shadow-md shadow-[#555555] dark:shadow-none rounded-lg overflow-hidden">
                        <iframe
                            width="355"
                            height="190"
                            src="https://www.youtube.com/embed/zhauOY7qLog?si=IZytsSCrcztJ4Aqe"
                            title="Lofi Chill Beats - Video 1"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="rounded-lg"
                        ></iframe>
                    </div>

                    {/* Video 2 */}
                    <div className="relative flex-shrink-0 transform transition-all duration-300 ease-in-out hover:scale-105 shadow-md shadow-[#727272] dark:shadow-none rounded-lg overflow-hidden">
                        <iframe
                            width="355"
                            height="190"
                            src="https://www.youtube.com/embed/i0qxKh4qNNk?si=75HaW1eqWLxY1lfB"
                            title="Lofi Chill Beats - Video 2"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="rounded-lg"
                        ></iframe>
                    </div>

                    {/* Video 3 */}
                    <div className="relative flex-shrink-0 transform transition-all duration-300 ease-in-out hover:scale-105 shadow-md shadow-[#727272] dark:shadow-none rounded-lg overflow-hidden">
                        <iframe width="355" height="190" src="https://www.youtube.com/embed/bjp3hlnyj6w?si=D5XwvK4lh0HCsoOj" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>

                    {/* Video 4 */}
                    <div className="relative flex-shrink-0 transform transition-all duration-300 ease-in-out hover:scale-105 shadow-md shadow-[#727272] dark:shadow-none rounded-lg overflow-hidden">
                        <iframe width="355" height="190" src="https://www.youtube.com/embed/Rij9OxL-Tt0?si=9HFQAxFNJiu-rAXI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    {/* Video 5 */}
                    <div className="relative flex-shrink-0 transform transition-all duration-300 ease-in-out hover:scale-105 shadow-md shadow-[#727272] dark:shadow-none rounded-lg overflow-hidden">
                        <iframe width="355" height="200" src="https://www.youtube.com/embed/3MeVwvcM_wk?si=yr6qCdAuzfph6Yt6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>

                {/* Right Button */}
                <button
                    onClick={scrollRight}
                    className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-full shadow-md text-5xl hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                    <CiCircleChevRight />
                </button>
            </div>
        </div>
    );
}

export default YTvdo;
