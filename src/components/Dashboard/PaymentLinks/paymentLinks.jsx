import React, { useContext, useEffect, useState } from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { GlobalContext } from "../../../Context/GlobalContext";
import NoContent from "../../Common/noContent";
import PrimaryButton from "../../Common/PrimaryButton";
import Modal from 'react-modal';
import { IoMdClose } from "react-icons/io";
import CreateNewLink from "../../PaymentLink/createLink";
import DataTable from 'react-data-table-component';
import { BsArrowBarRight, BsThreeDots } from "react-icons/bs";
import ShareAbles from "../../Misc/shareables";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import ReactOutSideClickHandler from 'react-outside-click-handler';
import { Link, useNavigate } from "react-router-dom";

export const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '90%',
        padding: 0,
        borderRadius: '12px'
    },
    overlay: {
        zIndex: '20',
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
};



export default function PaymentLinks() {
    const [state, setState] = useContext(GlobalContext);
    const [paymentLinks, setPaymentLinks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setPaymentLinks([...state.paymentLinks.filter(el => el.user.id === state.user.id).map((item) => { return { ...item, date: "30/8/2022 at 11:52PM " } })])
    }, [state])


    const toggleMenu = (id) => {
        const menu = document.getElementById(id);
        if (menu) {
            menu.classList.toggle('hidden');
        }
    }
    const hideMenu = (id) => {
        const menu = document.getElementById(id);
        if (menu && !menu.classList.contains('hidden')) {
            menu.classList.add('hidden');
        }
    }

    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Type',
            selector: row => row.buy,
            sortable: true,
        },
        {
            name: 'Amount',
            selector: row => row.amount,
            sortable: true,
        },
        {
            name: 'Date Paid',
            selector: row => row.date,
            sortable: true,
        },
        {
            name: "",
            button: true,
            cell: (row) =>
                <div className="relative">
                    <button onClick={() => { toggleMenu(`ddMenu${row.id}`); }} > <BsThreeDots fontSize={'24px'} fontWeight={'bolder'} /> </button>
                    <div id={`ddMenu${row.id}`} onClick={e => { toggleMenu(`ddMenu${row.id}`) }} className="z-[5000] origin-top-right hidden absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                        <div className="py-1" role="none">
                            <ShareAbles type="vr" product={row} user={row.user} />
                        </div>
                    </div>
                </div>,
        }
    ];


    return (
        <div className="container mx-auto py-10 h-full">
            <div className="flex justify-between">
                <div className="flex items-center gap-4">
                    <h1 className='text-2xl font-semibold mb-2'>Payment Links</h1>
                    <a href={`${window.location.origin}/pay/${state.user?.username}`} target="_" className="text-blue-600" >
                        <HiOutlineExternalLink fontSize={"1.5rem"} />
                    </a>
                </div>
                <div>
                    <PrimaryButton text="New Link" onCLickFunction={() => { setShowModal(true) }} />
                </div>
            </div>

            <div className="flex items-center justify-center p-10">
                {paymentLinks.length === 0 &&
                    <div className="w-2/3 mx-auto">
                        <NoContent
                            topText={"You don't have any active links"}
                            bottomText={"Create a new payment link to start receiving support from your fans."}
                        />
                        <div className="w-1/3 mx-auto mt-4">
                            <PrimaryButton w="full" onCLickFunction={() => { setShowModal(true) }} text="Create Payment Link" />
                        </div>
                    </div>
                }

                {paymentLinks.length > 0 &&
                    <div className="w-full">
                        {/* <DataTable
                            columns={columns}
                            data={[...paymentLinks]}
                            pagination
                        /> */}
                        <table className="table-fixed w-full">
                            <thead>
                                <tr className="text-xl text-left py-2 border-b">
                                    <th className="py-3">Page Title</th>
                                    <th className="py-3">Type</th>
                                    <th className="py-3">Amount</th>
                                    <th className="py-3">Date Paid</th>
                                    <th className="py-3"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {paymentLinks.map((item) => (
                                    <tr
                                        onClick={e => navigate(`${item.link}`)}
                                        key={item.link}
                                        className="border-b cursor-pointer"
                                    >
                                        <td className="py-3"> {item.title} </td>
                                        <td className="py-3"> {item.buy} </td>
                                        <td className="py-3"> {item.amount} </td>
                                        <td className="py-3 "> {item.date} </td>
                                        <td className="py-3 text-left w-[100px] ">
                                            <ReactOutSideClickHandler onOutsideClick={() => { hideMenu(`ddMenu${item.id}`) }} >
                                                <div className="relative">
                                                    <button onClick={(e) => { e.preventDefault(); toggleMenu(`ddMenu${item.id}`); }} > <BsThreeDots fontSize={'24px'} fontWeight={'bolder'} /> </button>
                                                    <div id={`ddMenu${item.id}`} onClick={e => { toggleMenu(`ddMenu${item.id}`) }} className="z-[5000] origin-top-left hidden absolute left-0  top-4 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                                        <div className="py-1" role="none">
                                                            <ShareAbles type="vr" shareLink={`${window.location.origin}/pay/${item.user.username}/${item.link}`} itemType="link" item={item} user={item.user} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </ReactOutSideClickHandler>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="flex justify-end gap-x-6 py-2 text-gray-400">
                            <div>
                                Rows per page : 10
                            </div>
                            <div>1 - {paymentLinks.length} of {paymentLinks.length}</div>
                            <div>
                                <button> <MdArrowBackIos /> </button>
                                <button className="ml-3"> <MdArrowForwardIos /> </button>
                            </div>
                        </div>
                    </div>
                }
            </div >

            <Modal
                isOpen={showModal}
                style={customStyles}
                onRequestClose={() => setShowModal(false)}
            >
                <div className="p-6 w-[600px]">
                    <div className="flex justify-between items-center w-full mb-2">
                        <div className="text-3xl font-semibold"> New Payment Link </div>
                        <button onClick={() => { setShowModal(false) }} >
                            <IoMdClose fontSize={"32px"} />
                        </button>
                    </div>

                    <CreateNewLink closeModal={() => setShowModal(false)} />
                </div>
            </Modal>
        </div >
    )
}