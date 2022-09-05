import React, { useContext, useState } from "react";
import { BiCheckCircle, BiFoodMenu, BiSend, BiWallet } from "react-icons/bi";
import { BsArrowClockwise } from "react-icons/bs";
import { GlobalContext } from "../../Context/GlobalContext";
import AvatarPlaceHolder from "../Common/AvataPlaceHolder";
import PrimaryButton from "../Common/PrimaryButton";

import Modal from 'react-modal';
import { IoMdClose } from "react-icons/io";
import { customStyles } from "../../utils/customModalStyle";
import { MdKeyboardArrowRight, MdPayment } from "react-icons/md";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import NoContent from "../Common/noContent";

export default function DashboardHome() {
    const [state, setState] = useContext(GlobalContext);

    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    return (
        <div className="container mx-auto py-10 px-12">
            <div className="flex justify-between items-center">
                <div className="flex gap-4">
                    <AvatarPlaceHolder user={state.user} w="w-24" />
                    <div className="flex flex-col justify-between">
                        <div className="text-3xl font-semibold">
                            Good Evening, {state.user.name}
                        </div>
                        <div>
                            @ {state.user.username}
                        </div>
                    </div>
                </div>
                <div>
                    <PrimaryButton text="Create New" onCLickFunction={() => setShowModal(true)} />
                </div>
            </div>

            <div className="my-6">
                <div className="text-xl my-2 text-gray-600 font-semibold"> Overview </div>
                <div className="grid xl:grid-cols-3 mt-4">
                    <div className="col-span-1 p-6">
                        <div className="flex gap-4">
                            <div className="bg-gray-200 p-2 flex items-center justify-center rounded-[50%]">
                                <BiWallet fontSize={"36px"} />
                            </div>
                            <div className="flex flex-col justify-between">
                                <div>Available Balance</div>
                                <div className="text-2xl  text-gray-500" > NGN 0 </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 p-6">
                        <div className="flex gap-4">
                            <div className="bg-gray-200 p-2 flex items-center justify-center rounded-[50%]">
                                <BsArrowClockwise fontSize={"36px"} />
                            </div>
                            <div className="flex flex-col justify-between">
                                <div>Total Received</div>
                                <div className="text-2xl  text-gray-500" > NGN 0 </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 p-6">
                        <div className="flex gap-4">
                            <div className="bg-gray-200 p-2 flex items-center justify-center rounded-[50%]">
                                <BiCheckCircle fontSize={"36px"} />
                            </div>
                            <div className="flex flex-col justify-between">
                                <div>Total Payouts</div>
                                <div className="text-2xl  text-gray-500" > NGN 0 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <div className="text-xl my-2 text-gray-600 font-semibold"> Recent Transactions </div>

                <NoContent
                    topText={"Your transaction history is currently empty!"}
                    bottomText={"Once transactions occurs, the history will start showing here."}
                />
            </div>

            <Modal
                isOpen={showModal}
                onRequestClose={() => setShowModal(false)}
                style={customStyles}
            >
                <div className="p-6 w-[600px]">
                    <div className="flex justify-between items-center w-full mb-2">
                        <div className="text-3xl font-semibold"> Create New </div>
                        <button onClick={() => { setShowModal(false) }} ><IoMdClose fontSize={"32px"} /></button>
                    </div>
                    <div className="mt-6">
                        <div className="flex gap-4 items-center mb-10 cursor-pointer ">
                            <div className="bg-gray-200 p-2 flex items-center justify-center rounded-[50%]">
                                <MdPayment fontSize={"32px"} />
                            </div>
                            <div className="flex-grow">
                                <div className="text-gray-700 text-lg font-semibold"> Payment Links </div>
                                <div className="text-gray-500"> Create a payment link to get support from your fans </div>
                            </div>
                            <div>
                                <MdKeyboardArrowRight fontSize={"20px"} />
                            </div>
                        </div>
                        <div onClick={()=> navigate('/product-pages/create')} className="flex gap-4 items-center mb-10 cursor-pointer ">
                            <div className="bg-gray-200 p-2 flex items-center justify-center rounded-[50%]">
                                <RiShoppingBag3Fill fontSize={"32px"} />
                            </div>
                            <div className="flex-grow">
                                <div className="text-gray-700 text-lg font-semibold"> Product Pages </div>
                                <div className="text-gray-500"> Sell your digital products online with Fidia </div>
                            </div>
                            <div>
                                <MdKeyboardArrowRight fontSize={"20px"} />
                            </div>
                        </div>
                        <div className="flex gap-4 items-center mb-10 cursor-pointer ">
                            <div className="bg-gray-200 p-2 flex items-center justify-center rounded-[50%]">
                                <BiSend fontSize={"32px"} />
                            </div>
                            <div className="flex-grow">
                                <div className="text-gray-700 text-lg font-semibold"> Send Money </div>
                                <div className="text-gray-500"> Transfer money to your favorite creators for free on Koala </div>
                            </div>
                            <div>
                                <MdKeyboardArrowRight fontSize={"20px"} />
                            </div>
                        </div>
                        <div className="flex gap-4 items-center mb-2 cursor-pointer ">
                            <div className="bg-gray-200 p-2 flex items-center justify-center rounded-[50%]">
                                <BiFoodMenu fontSize={"32px"} />
                            </div>
                            <div className="flex-grow">
                                <div className="text-gray-700 text-lg font-semibold"> Invoice </div>
                                <div className="text-gray-500"> Send customizable invoices directly from your account in minutes </div>
                            </div>
                            <div>
                                <MdKeyboardArrowRight fontSize={"20px"} />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}