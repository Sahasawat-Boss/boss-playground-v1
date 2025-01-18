import React from 'react'

function ButtonAdd() {
    return (
        <>
            <button
                className="bg-blue-700 hover:bg-blue-600 text-white rounded-sm py-2 px-3"
                onClick={() => document.getElementById('my_modal_2').showModal()}
            >
                Add Data
            </button>
            <dialog id="my_modal_2" className="modal text-black ">
                <div className="modal-box rounded-md h-[600px] w-[500px]">
                    <h3 className="font-bold text-lg">Add Data</h3>
                    <p className="py-4">Press ESC key or click outside to close</p>
                </div>
                <form method="dialog" className="modal-backdrop  bg-black opacity-25">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}

export default ButtonAdd