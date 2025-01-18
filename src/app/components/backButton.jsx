import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const BackButton = () => {
    return (
        <button
            onClick={() => window.history.back()}
            className="flex py-2 px-4 text-black  dark:text-[#c5c5c5] w-fit hover:text-blue-600 dark:hover:text-blue-400 group-hover:text-blue-400">
            <MdKeyboardDoubleArrowLeft className="text-2xl"/>
            <span> Back </span>
        </button>
    );
};

export default BackButton;
