import { IoCloseCircleSharp } from "react-icons/io5";

const ButtonAdd = () => {
    return (
        <>
            <button
                className="bg-blue-700 hover:bg-blue-600 text-white rounded-sm py-2 px-3"
                onClick={() => document.getElementById("my_modal_2").showModal()}
            >
                Add Data
            </button>

            {/* Modal for Form */}
            <dialog id="my_modal_2" className="modal text-black">
                <div
                    className="modal-box rounded-md h-fit max-w-fit px-8"
                >
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold text-xl px-6">Add Data</h3>
                        <button
                            className="text-[#a0a0a0] hover:text-[#384f8f] text-3xl focus:outline-none"
                            onClick={() => document.getElementById("my_modal_2").close()}
                        >
                            <IoCloseCircleSharp />
                        </button>
                    </div>

                    {/* Form Section */}
                    <div className="max-w-xl mx-auto py-4 px-6 bg-white">
                        <form>
                            {/* Name and Email */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <label className="mb-1 text-gray-600 font-medium">Name</label>
                                    <input
                                        type="text"
                                        placeholder="enter name"
                                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="mb-1 text-gray-600 font-medium">Email</label>
                                    <input
                                        type="email"
                                        placeholder="enter email"
                                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            {/* Age and Phone */}
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div className="flex flex-col">
                                    <label className="mb-1 text-gray-600 font-medium">Age</label>
                                    <input
                                        type="number"
                                        placeholder="enter age"
                                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="mb-1 text-gray-600 font-medium">Phone</label>
                                    <input
                                        type="number"
                                        placeholder="enter phone"
                                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            {/* Company Name */}
                            <div className="mt-4">
                                <label className="mb-2 text-gray-600 font-medium">Company Name</label>
                                <input
                                    type="text"
                                    placeholder="enter company name"
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Fruit */}
                            <div className="mt-4">
                                <label className="mb-2 text-gray-600 font-medium">Preferred Fruit</label>
                                <div className="flex items-center space-x-4">
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox w-4 h-4 text-blue-700 focus:ring-blue-500"
                                        />
                                        <span>Apple</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox w-4 h-4 text-blue-700 focus:ring-blue-500"
                                        />
                                        <span>Banana</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox w-4 h-4 text-blue-700 focus:ring-blue-500"
                                        />
                                        <span>Water Melon</span>
                                    </label>
                                </div>
                            </div>

                            {/* Status */}
                            <div className="mt-4">
                                <label className="mb-2 text-gray-600 font-medium">Status</label>
                                <div className="flex items-center space-x-4">
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name="status"
                                            className="form-radio w-4 h-4 text-blue-700 focus:ring-blue-500"
                                        />
                                        <span>Active</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name="status"
                                            className="form-radio w-4 h-4 text-blue-700 focus:ring-blue-500"
                                        />
                                        <span>Inactive</span>
                                    </label>
                                </div>
                            </div>

                            {/* Comments */}
                            <div className="mt-3">
                                <label className=" text-gray-600 font-medium">Comments</label>
                                <textarea
                                    placeholder="write comments here.."
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows="4"
                                ></textarea>
                            </div>

                            {/* Buttons */}
                            <div className="mt-4 flex justify-center space-x-3">
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-gray-500 text-white rounded-sm hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700"
                                >
                                    Confirm
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Button for cliking outside Modal*/}
                <form method="dialog" className="modal-backdrop bg-black opacity-25">
                    <button>Close</button>
                </form>
            </dialog>
        </>
    );
};

export default ButtonAdd;
