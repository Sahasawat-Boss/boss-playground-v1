const ButtonAdd = () => {
    return (
        <>
            <button
                className="bg-blue-700 hover:bg-blue-600 text-white rounded-sm py-2 px-3"
                onClick={() => document.getElementById("my_modal_2").showModal()}
            >
                Add Data
            </button>

            {/* Modal Form */}
            <dialog id="my_modal_2" className="modal text-black">
                <div
                    className="modal-box rounded-md h-[700px] max-w-[650px]"
                >
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold text-lg">Add Data</h3>
                        <button
                            className="text-gray-600 font-semibold text-xl focus:outline-none"
                            onClick={() => document.getElementById("my_modal_2").close()}
                        >
                            X
                        </button>
                    </div>
                    <p className="py-4">Press ESC key or click outside to close</p>
                </div>
                <form method="dialog" className="modal-backdrop bg-black opacity-25">
                    <button>Close</button>
                </form>
            </dialog>
        </>
    );
};

export default ButtonAdd;
