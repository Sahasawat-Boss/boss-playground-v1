import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const BackButton = () => {
    return (
        <button
            onClick={() => window.history.back()}
            className="ml-2 mt-2 flex items-center w-fit p-3 text-white rounded hover:bg-gray-700">
            <MdKeyboardDoubleArrowLeft className="text-2xl"/>
            <span>Previous Page</span>
        </button>
    );
};

export default BackButton;
