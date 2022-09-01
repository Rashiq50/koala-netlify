import React, { useEffect, useState } from "react";
import { AiFillEyeInvisible, AiFillFacebook, AiFillLinkedin, AiOutlineShareAlt, AiOutlineTwitter } from "react-icons/ai";
import { BsEyeFill } from "react-icons/bs";
import { ImEmbed2 } from "react-icons/im";
import { MdModeEditOutline, MdOutlineDelete } from "react-icons/md";
import Modal from 'react-modal';
import { customStyles } from "../../utils/customModalStyle";
import { IoMdClose, } from "react-icons/io";
import { IoCopySharp } from "react-icons/io5";
import { toast } from 'react-toastify';
import PrimaryButton from "../Common/PrimaryButton";
import { Link } from "react-router-dom";

export default function ShareAbles({ type = "hr", item, user, shareLink, itemLink, itemType = "product" }) {
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState(1);

    const showCopySuccessToast = () => {
        navigator.clipboard.writeText(shareLink);
        toast("Link has been copied to clipboard");
    }
    return (
        <div className={`flex items-center gap-x-4 ${type === "vr" && "flex-col"}`}>
            {type === 'vr' &&
                <a target={"_"} href={itemLink} className="w-full">
                    <button className={`flex items-center gap-2 ${itemType === "link" && "justify-start pl-5 py-2 border-b"} ${itemType === "product" && "justify-center p-3"} text-gray-500 font-semibold text-xl ${type === 'vr' && "hover:bg-gray-200 w-full"}`} >
                        <BsEyeFill />
                        View {itemType === 'link' && "link"}
                    </button>
                </a>
            }
            <button onClick={() => { setModalType(1); setShowModal(true) }} className={`flex items-center gap-2 ${itemType === "link" && "justify-start pl-5 py-2 border-b"} ${itemType === "product" && "justify-center p-3"} text-gray-500 font-semibold text-xl ${type === 'vr' && "hover:bg-gray-200 w-full"}`} >
                <AiOutlineShareAlt />
                Share {itemType === 'link' && "link"}
            </button>

            {itemType === 'link'  &&
                <button
                    onClick={() => showCopySuccessToast()}
                    className="flex items-center gap-2 justify-start pl-5 py-2 border-b text-gray-500 font-semibold text-xl hover:bg-gray-200 w-full">
                    <IoCopySharp />
                    Copy {itemType === 'link' && "link"}
                </button>
            }
            {itemType === 'link'  &&
                <button
                    onClick={() => showCopySuccessToast()}
                    className="flex items-center gap-2 justify-start pl-5 py-2 border-b text-gray-500 font-semibold text-xl hover:bg-gray-200 w-full">
                    <AiFillEyeInvisible />
                    Disable {itemType === 'link' && "link"}
                </button>
            }

            {(type === 'hr' && itemType === 'product') &&
                <button onClick={() => { setModalType(2); setShowModal(true) }} className={`flex items-center gap-2 ${itemType === "link" && "justify-start pl-5 py-2 border-b"} ${itemType === "product" && "justify-center p-3"} text-gray-500 font-semibold text-xl ${type === 'vr' && "hover:bg-gray-200 w-full"}`} >
                    <ImEmbed2 />
                    Embed
                </button>
            }

            <Link className="w-full" to={`${item.id}/edit`}>
                <button className={`flex items-center gap-2 ${itemType === "link" && "justify-start pl-5 py-2 border-b"} ${itemType === "product" && "justify-center p-3"} text-gray-500 font-semibold text-xl ${type === 'vr' && "hover:bg-gray-200 w-full"}`} >
                    <MdModeEditOutline />
                    Edit {itemType === 'link' && "link"}
                </button>
            </Link>

            <button onClick={() => { setModalType(4); setShowModal(true) }} className={`flex items-center gap-2 ${itemType === "link" && "justify-start pl-5 py-2 border-b text-gray-500"} ${itemType === "product" && "justify-center p-3 text-red-500"}  font-semibold text-xl ${type === 'vr' && "hover:bg-gray-200 w-full"}`} >
                <MdOutlineDelete />
                Delete {itemType === 'link' && "link"}
            </button>



            <Modal
                isOpen={showModal}
                onRequestClose={() => setShowModal(false)}
                style={customStyles}
            >
                <div className="p-6 w-[600px]">
                    <div className="flex justify-between items-center w-full mb-2">
                        <div className="text-3xl font-semibold"> {modalType === 1 && "Share"} {modalType === 2 && "Embed"} {modalType === 4 && "Delete item"} </div>
                        <button onClick={() => { setShowModal(false) }} ><IoMdClose fontSize={"32px"} /></button>
                    </div>

                    {modalType === 1 &&
                        <div>
                            <div className="p-4 flex gap-4 my-4">
                                <a href="#" target="_" className="p-2 text-gray-500 font-semibold text-center">
                                    <button>
                                        <AiOutlineTwitter fontSize={"32px"} />
                                    </button>
                                    <div className="text-xl mt-4">Twitter</div>
                                </a>
                                <a href="#" target="_" className="p-2 text-gray-500 font-semibold text-center">
                                    <button>
                                        <AiFillFacebook fontSize={"32px"} />
                                    </button>
                                    <div className="text-xl mt-4">Facebook</div>
                                </a>
                                <a href="#" target="_" className="p-2 text-gray-500 font-semibold text-center">
                                    <button>
                                        <AiFillLinkedin fontSize={"32px"} />
                                    </button>
                                    <div className="text-xl mt-4">Linkedin</div>
                                </a>
                            </div>
                            <div>
                                <div>
                                    Page Link
                                </div>
                                <button
                                    onClick={() => showCopySuccessToast()}
                                    className="flex justify-between items-center text-lg font-semibold w-full p-4">
                                    <div>
                                        {shareLink}
                                    </div>
                                    <IoCopySharp />
                                </button>
                            </div>
                        </div>
                    }

                    {modalType === 2 &&
                        <div>
                            <div className="text-gray-700  text-xl my-3">
                                Embed your product pages anywhere on the internet, e.g your blog or website.
                            </div>

                            <div className="p-3 text-gray-500 my-8">
                                {`<button class="fidia-product-embed-target" data-fidia-username="rashiq50" data-fidia-slug="test01"></button>

                                <script src="https://embed.getfidia.com/js/product-embed.js" async></script>`}
                            </div>

                            <div className="flex justify-end">
                                <div className="w-[350px]">
                                    <PrimaryButton text="Copy to clipboard" />
                                </div>
                            </div>
                        </div>
                    }

                    {modalType === 4 &&
                        <div>
                            <div className="text-gray-600 font-normal text-xl my-6 text-center">
                                Are you sure you want to delete this product?
                            </div>
                            <PrimaryButton text="Delete" />
                        </div>
                    }
                </div>
            </Modal>
        </div>
    )
}