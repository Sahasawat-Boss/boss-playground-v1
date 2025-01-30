import { useState } from "react";
import { IoChatboxEllipsesOutline, IoCloseCircleOutline } from "react-icons/io5";

const NotificationBadge = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Floating Action Button */}
            <button
                className="relative w-10 h-10 bg-blue-600 text-white text-2xl rounded-full flex items-center justify-center shadow-lg 
                hover:bg-blue-500 hover:scale-110 transition-transform dark:bg-blue-500 dark:hover:bg-blue-400"
                onClick={() => setIsOpen(!isOpen)}
            >
                <IoChatboxEllipsesOutline />
            </button>

            {/* Message Box */}
            {isOpen && (
                <div className="absolute bottom-14 right-8 w-72 bg-white shadow-lg rounded-lg border border-gray-200 
                dark:bg-gray-800 dark:border-gray-700 animate-fade-in-right-left-fast">

                    {/* Header */}
                    <div className="flex justify-between bg-blue-100 px-2 dark:bg-gray-700">
                        <div className="text-gray-800 font-semibold p-2 rounded-t-lg dark:text-gray-200">
                            Messages
                        </div>

                        {/* Close Button */}
                        <div className="flex justify-between py-2 rounded-b-lg text-2xl">
                            <button
                                className="text-gray-600 dark:text-gray-300"
                                onClick={() => setIsOpen(false)}
                            >
                                <IoCloseCircleOutline />
                            </button>
                        </div>
                    </div>

                    {/* Messages List */}
                    <div className="py-5 px-6 text-gray-700 dark:text-gray-300">
                        <div>
                            " Welcome to my app! Take your time to explore all the amazing features I've built just for you.🎉 

                            <div className="mt-2"> Whether you're here to stay productive , have fun, or discover something new , I hope you enjoy every moment of your journey. Happy exploring! 🎊✨"
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NotificationBadge;
