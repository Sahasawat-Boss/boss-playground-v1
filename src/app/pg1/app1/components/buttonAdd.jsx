import { useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";

const ButtonAdd = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        phone: "",
        company_name: "", // Correct key
        fruit: [], // Default to an empty array for checkboxes
        status: "", // Default to an empty string for radio buttons
        comments: "", // Default to an empty string for textarea
    });

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
        console.log("Data added to the database:", formData); // Log the data being submitted
        try {
            const response = await fetch("/api/crudV2", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert("Added data to DataBase successfully");
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
                document.getElementById("my_modal_2").close();
                window.location.reload(); // Reload the page after closing the modal
            } else {
                alert("Failed to add data");
            }
        } catch (error) {
            console.error("Error adding data to DataBase:", error);
            alert("An error occurred while adding data.");
        }
    };

    return (
        <>
            <button
                className="bg-blue-700 hover:bg-blue-600 text-white rounded-sm py-2 px-3"
                onClick={() => document.getElementById("my_modal_2").showModal()}
            >
                Add Data
            </button>

            <dialog id="my_modal_2" className="modal text-black">
                <div className="modal-box rounded-md h-fit max-w-fit px-8">
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold text-xl px-6">Add Data</h3>
                        <button
                            className="text-[#a0a0a0] hover:text-[#384f8f] text-3xl focus:outline-none"
                            onClick={() => document.getElementById("my_modal_2").close()}
                        >
                            <IoCloseCircleSharp />
                        </button>
                    </div>

                    <div className="max-w-xl mx-auto py-4 px-6 bg-white">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
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
                                <div>
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
                                <div>
                                    <label>Age</label>
                                    <input
                                        type="number"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleInputChange}
                                        placeholder="Enter age"
                                        className="p-2 border border-gray-300 rounded-md"
                                    />
                                </div>
                                <div>
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
                                    className="p-2 border border-gray-300 rounded-md w-full"
                                />
                            </div>

                            <div className="mt-4">
                                <label>Preferred Fruits</label>
                                <div>
                                    {["Apple", "Banana", "Water Melon"].map((fruit) => (
                                        <label key={fruit} className="mr-2">
                                            <input
                                                type="checkbox"
                                                name="fruit"
                                                value={fruit}
                                                checked={formData.fruit.includes(fruit)}
                                                onChange={handleInputChange}
                                            />
                                            {fruit}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-4">
                                <label>Status</label>
                                <div>
                                    {["Active", "Inactive"].map((status) => (
                                        <label key={status} className="mr-2">
                                            <input
                                                type="radio"
                                                name="status"
                                                value={status}
                                                checked={formData.status === status}
                                                onChange={handleInputChange}
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
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    rows="4"
                                />
                            </div>

                            <div className="mt-4 flex justify-center space-x-3">
                                <button
                                    type="button"
                                    onClick={() => document.getElementById("my_modal_2").close()}
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
            </dialog>
        </>
    );
};

export default ButtonAdd;
