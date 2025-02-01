import React from "react";

const ContactAdminModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-65 flex justify-center items-center z-50">
            {/* Modal Box */}
            <div className="bg-white dark:bg-gray-800 py-6 px-10 rounded-lg shadow-xl w-[450px] transition-transform transform scale-95 animate-fade-in-fast relative">
                
                {/* Admin Image */}
                <div className="flex flex-col items-center">
                    <img
                        src="/picture/MyPic.jpg" // Ensure correct path
                        alt="Admin"
                        className="w-20 h-20 rounded-full border-4 border-gray-300 shadow-md"
                    />

                    <h2 className="text-xl font-bold text-gray-800 dark:text-white mt-2">
                        Contact Me
                    </h2>
                    <p className="text-gray-400 mt-1">
                        Feel free to reach out.
                    </p>
                </div>

                <hr className="border mt-1"/>

                {/* Contact Form */}
                <form className="mt-5">
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Your Email:
                    </label>
                    <input 
                        type="email" 
                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                        placeholder="Enter your email"
                    />

                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mt-4">
                        Message:
                    </label>
                    <textarea 
                        rows="4" 
                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                        placeholder="Enter your message"
                    ></textarea>

                    {/* Buttons */}
                    <div className="mt-6 flex justify-between">
                        <button 
                            type="button" 
                            className="px-4 py-2 text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-lg transition hover:bg-gray-300 dark:hover:bg-gray-600"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit" 
                            className="px-5 py-2 text-white bg-blue-500 rounded-lg transition hover:bg-blue-600"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactAdminModal;
