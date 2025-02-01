import { useState, useEffect } from "react";
import { IoChatboxEllipsesOutline, IoCloseCircleOutline, IoCheckmarkCircle } from "react-icons/io5";

const NotificationBadge = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasNewMessage, setHasNewMessage] = useState(true); // Simulating new messages
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        // Format the current date (e.g., "Jan 31")
        const now = new Date();
        const options = { month: "short", day: "numeric" };
        setCurrentDate(now.toLocaleDateString("en-US", options));
    }, []);

    const toggleChat = () => {
        setIsOpen(!isOpen);
        setHasNewMessage(false); // Remove notification once opened
    };

    return (
        <div className="fixed top-24 right-8 z-50 animate-fade-in-fast">
            {/* Floating Action Button with Notification Badge */}
            <button
                className="relative w-10 h-10 bg-blue-600 text-white text-2xl rounded-full flex items-center justify-center shadow-lg 
                hover:bg-blue-500 hover:scale-110 transition-transform dark:bg-blue-500 dark:hover:bg-blue-400"
                onClick={toggleChat}
                aria-label="Toggle Messages"
            >
                <IoChatboxEllipsesOutline />

                {/* Red Dot Notification with Ping Effect */}
                {hasNewMessage && (
                    <>
                        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
                    </>
                )}
            </button>

            {/* Message Box */}
            {isOpen && (
                <div
                    className="absolute bottom-12 right-6 w-80 bg-white shadow-lg rounded-lg border border-gray-200 
                    dark:bg-gray-800 dark:border-gray-700 animate-fade-in-right-left-fast"
                >
                    {/* Header */}
                    <div className="flex justify-between items-center bg-blue-200 px-3 py-2 rounded-t-lg dark:bg-gray-700">
                        <span className="text-gray-800 font-semibold dark:text-gray-200">Messages</span>
                        <button
                            className="text-gray-600 text-xl dark:text-gray-300 hover:text-red-500"
                            onClick={toggleChat}
                            aria-label="Close"
                        >
                            <IoCloseCircleOutline />
                        </button>
                    </div>

                    {/* Messages List */}
                    <div className="py-4 px-5 text-sm text-gray-700 dark:text-gray-300">
                        {/* Chat Bubble */}
                        <div className="flex w-56">
                            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow-md max-w-xs">
                                <p>
                                    Welcome to my app! 🎉 Take your time to explore all the amazing features I've built just for you.
                                </p>
                                <p className="mt-2">
                                    Whether you're here to stay productive, have fun, or discover something new, I hope you enjoy every moment of your journey. Happy exploring! 🎊✨
                                </p>
                            </div>
                        </div>

                        {/* System Status */}
                        <div className="flex items-center mt-4 py-2 px-3 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                            {/* Status Icon */}
                            <IoCheckmarkCircle className="text-green-600 text-2xl mr-2" />

                            {/* Status Info */}
                            <div>
                                <p className="text-gray-900 font-semibold dark:text-gray-200">Status: All Systems Operational</p>
                                <p className="text-gray-500 text-sm dark:text-gray-400">Updated on {currentDate}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NotificationBadge;
