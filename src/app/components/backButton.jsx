const BackButton = () => {
    return (
        <button
            onClick={() => window.history.back()}
            className="w-fit px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
            Previous Page
        </button>
    );
};

export default BackButton;
