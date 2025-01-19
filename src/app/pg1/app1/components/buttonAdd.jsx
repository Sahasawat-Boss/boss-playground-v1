import { useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";

const ButtonAdd = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        phone: "",
        company_name: "",
        fruit: [],
        status: "",
        comments: "",
    });

    const [successMessage, setSuccessMessage] = useState(false); // State for success message

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData((prevData) => ({
                ...prevData,
                fruit: checked
                    ? [...prevData.fruit, value]
                    : prevData.fruit.filter((fruit) => fruit !== value),
            }));
        } else if (type === "radio") {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Data added to the database:", formData);
        try {
            const response = await fetch("/api/crudV2", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setSuccessMessage(true); // Show success message
                setTimeout(() => setSuccessMessage(false), 3300); // Hide success message after...seconds
                setFormData({
                    name: "",
                    email: "",
                    age: "",
                    phone: "",
                    company_name: "",
                    fruit: [],
                    status: "",
                    comments: "",
                });
                document.getElementById("my_modal_2").close(); // Close the modal
            } else {
                alert("Failed to add data");
            }
        } catch (error) {
            console.error("Error adding data to the database:", error);
            alert("An error occurred while adding data.");
        }
    };

    return (
        <div className="relative">
            {/* Success Message */}
            {successMessage && (
                <div className="fixed left-1/2 top-16 z-50 flex w-fit -translate-x-1/2 transform items-center justify-center text-center rounded-md border px-8 py-3 border-green-600 bg-white text-green-600 shadow-md">
                    <span className="font-semibold text-xl mr-2"><FaRegCheckCircle /></span>
                    <span className="font-semibold ">Added Data Successfully</span>
                </div>
            )}

            <button
                className="bg-blue-700 hover:bg-blue-600 text-white rounded-sm py-2 px-3 "
                onClick={() => document.getElementById("my_modal_2").showModal()}
            >
                Add Data
            </button>

            <dialog id="my_modal_2" className="modal text-black">
                <div className="modal-box rounded-md h-fit max-w-fit px-12">
                    <div className="flex justify-between items-center pb-3">
                        <h3 className="font-bold text-[1.35rem] px-6">Add Data</h3>
                        <button
                            className="text-[#a0a0a0] hover:text-[#384f8f] text-3xl focus:outline-none"
                            onClick={() => document.getElementById("my_modal_2").close()}
                        >
                            <IoCloseCircleSharp />
                        </button>
                    </div>
                    <hr className=" mb-4 border-t-1 border-gray-300 w-full" />

                    <div className="max-w-xl mx-auto pt-4 px-6 bg-white">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Enter name"
                                        className="p-2 border border-gray-300 rounded-md"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter email"
                                        className="p-2 border border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div className="flex flex-col">
                                    <label>Age</label>
                                    <input
                                        type="number"
                                        name="age"
                                        value={formData.age}
                                        onChange={(e) => {
                                            const ageValue = parseInt(e.target.value, 10) || 0;
                                            setFormData((prevData) => ({
                                                ...prevData,
                                                age: ageValue,
                                            }));
                                        }}
                                        placeholder="Enter age"
                                        className="p-2 border border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label>Phone</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Enter phone"
                                        className="p-2 border border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                <label>Company Name</label>
                                <input
                                    type="text"
                                    name="company_name"
                                    value={formData.company_name}
                                    onChange={handleInputChange}
                                    placeholder="Enter company name"
                                    className="p-2 mt-1 border border-gray-300 rounded-md w-full"
                                />
                            </div>

                            <div className="mt-4 flex flex-col">
                                <label>Preferred Fruits</label>
                                <div className="flex flex-wrap my-2 gap-x-6 gap-y-4">
                                    {["Apple", "Banana", "Water Melon"].map((fruit) => (
                                        <label key={fruit} className="mr-2 flex items-center gap-x-2 gap-y-4">
                                            <input
                                                type="checkbox"
                                                name="fruit"
                                                value={fruit}
                                                checked={formData.fruit.includes(fruit)}
                                                onChange={handleInputChange}
                                                className="mt-1 w-5 h-5 mr-2 "
                                            />
                                            {fruit}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-4 flex flex-col">
                                <label>Status</label>
                                <div className="flex flex-wrap gap-x-6 gap-y-4 mt-2">
                                    {["Active", "Inactive"].map((status) => (
                                        <label key={status} className="mr-2">
                                            <input
                                                type="radio"
                                                name="status"
                                                value={status}
                                                checked={formData.status === status}
                                                onChange={handleInputChange}
                                                className="mt-1 w-5 h-5 mr-2"
                                            />
                                            {status}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-4">
                                <label>Comments</label>
                                <textarea
                                    name="comments"
                                    value={formData.comments}
                                    onChange={handleInputChange}
                                    placeholder="Write comments here..."
                                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                                    rows="4"
                                />
                            </div>

                            <div className="mt-4 flex justify-center space-x-3">
                                <button
                                    type="button"
                                    onClick={() => document.getElementById("my_modal_2").close()}
                                    className="px-6 py-[8px] bg-slate-500 text-white rounded-sm hover:bg-slate-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-5 py-[8px] bg-blue-600 text-white rounded-sm hover:bg-blue-700"
                                >
                                    Confirm
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div >
    );
};

export default ButtonAdd;
