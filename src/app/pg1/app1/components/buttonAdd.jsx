import { useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaAsterisk } from "react-icons/fa";

const ButtonAdd = ({ fetchData }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        phone: "",
        company_name: "",
        plan: [],
        status: "",
        comments: "",
    });

    const [successMessage, setSuccessMessage] = useState(false); // State for success message
    const [fadeOut, setFadeOut] = useState(false); // State for fade-out animation

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData((prevData) => ({
                ...prevData,
                plan: checked
                    ? [...prevData.plan, value]
                    : prevData.plan.filter((plan) => plan !== value),
            }));
        } else if (type === "radio") {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    const handleClear = () => {
        // Reset all form fields to empty state
        setFormData({
            name: "",
            email: "",
            age: "",
            phone: "",
            company_name: "",
            plan: [],
            status: "",
            comments: "",
        });
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
                setTimeout(() => setFadeOut(true), 2700); // Trigger fade-out after 2.7 seconds
                setTimeout(() => {
                    setSuccessMessage(false); // Remove success message
                    setFadeOut(false); // Reset fade-out state
                }, 3000); // Fully hide the message after 3 seconds
                
                setFormData({
                    name: "",
                    email: "",
                    age: "",
                    phone: "",
                    company_name: "",
                    plan: [],
                    status: "",
                    comments: "",
                });
                document.getElementById("my_modal_2").close(); // Close the modal

                // Call fetchData to refresh data
                fetchData();
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
                <div
                    className={`fixed left-1/2 top-16 z-[99999] flex w-fit -translate-x-1/2 transform items-center justify-center text-center rounded-md border px-8 py-3 border-green-600 bg-white text-green-600 shadow-md ${fadeOut ? "opacity-0 transition-opacity duration-300" : "opacity-100"
                        }`}>
                    <span className="font-semibold text-xl mr-2"><FaRegCheckCircle /></span>
                    <span className="font-semibold ">Added Data Successfully</span>
                </div>
            )}

            <button
                className="bg-blue-700 hover:bg-blue-600 text-white rounded-sm py-2 px-3 shadow-md"
                onClick={() => document.getElementById("my_modal_2").showModal()}
            >
                Add Data
            </button>

            <dialog id="my_modal_2" className="modal text-black">
                <div className="modal-box rounded-lg h-fit max-w-fit px-8">

                    <div className="flex justify-between items-center pb-3">
                        <h3 className="font-bold text-[1.35rem] px-6">Add Data</h3>
                        <button
                            className="text-[#a0a0a0] hover:text-[#384f8f] text-3xl focus:outline-none"
                            onClick={() => document.getElementById("my_modal_2").close()}
                        >
                            <IoCloseCircleSharp />
                        </button>
                    </div>

                    <div className="max-w-xl mx-auto px-6 bg-white">

                        <hr className=" mb-5 border-1 border-gray-300 w-full" />

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <label className="relative">
                                        <span className="absolute top-1 -left-3 text-red-400 text-[9.5px] mr-1">
                                            <FaAsterisk />
                                        </span>
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Enter name"
                                        className="p-2 border border-gray-300 rounded-md"
                                        required
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
                                <label>Preferred Plans</label>
                                <div className="flex flex-wrap my-2 gap-x-6 gap-y-4">
                                    {["A", "B", "C"].map((plan) => (
                                        <label key={plan} className="mr-2 flex items-center gap-x-2 gap-y-4">
                                            <input
                                                type="checkbox"
                                                name="plan"
                                                value={plan}
                                                checked={formData.plan.includes(plan)}
                                                onChange={handleInputChange}
                                                className="mt-1 w-5 h-5 mr-2 "
                                            />
                                            {plan}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-2 flex flex-col">
                                <label className="relative">
                                    <span className="absolute top-1 -left-3  text-red-400 text-[9.5px] mr-1">
                                        <FaAsterisk />
                                    </span>
                                    Status
                                </label>
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
                                                required
                                            />
                                            {status}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <hr className=" mt-4 border-1 border-gray-300 w-full" />

                            <div className="mt-3">
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

                            <div className="mt-5 mb-2 flex justify-center space-x-2">
                                <button
                                    type="button"
                                    onClick={() => document.getElementById("my_modal_2").close()}
                                    className="px-6 py-[8px] bg-slate-400 text-white shadow-md rounded-sm hover:bg-slate-500"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="button"
                                    className="px-6 py-[8px] bg-white text-black border shadow-md border-[#a5a5a5] rounded-sm hover:bg-gray-200"
                                    onClick={handleClear} // Attach clear function
                                >
                                    Clear
                                </button>

                                <button
                                    type="submit"
                                    className="px-5 py-[8px] bg-blue-600 text-white shadow-md first-letter:rounded-sm hover:bg-blue-700"
                                >
                                    Confirm
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ButtonAdd;
