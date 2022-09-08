import React from 'react'

const Modal = () => {
    return (
        <>
            <input type="checkbox" id="popup-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="popup-modal"
                        className="btn btn-sm bg-blue-900 btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="text-lg font-bold">Link Bank Account</h3>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Bank Name</span>
                        </label>
                        <select className="select select-bordered w-full">
                            <option disabled>Please Select a Bank</option>
                            <option>Bank Asia</option>
                            <option>Development Bank</option>
                            <option>Pubali Bank</option>
                        </select>
                        <label className="label">
                            <span className="label-text">Account Number</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Account Number"
                            className="input input-bordered w-full"
                        />
                        <button className="btn btn-block hover:bg-blue-800 bg-blue-900 mt-7">
                            Proceed
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
