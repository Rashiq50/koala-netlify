import React, { useContext, useEffect, useState } from "react";
import { BiPieChart } from "react-icons/bi";
import { GiShoppingBag } from "react-icons/gi";
import { MdOutlineArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../Context/GlobalContext";
import { FaGlobe } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import ShareAbles from "../../Misc/shareables";
import NoContent from "../../Common/noContent";
import { RiUser5Fill } from "react-icons/ri";

export default function LinkDetails() {

    const [state, setState] = useContext(GlobalContext);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const splittedPath = window.location.pathname.split('/');
        const productId = splittedPath[splittedPath.length - 1];
        const productIndex = state.paymentLinks.findIndex(el => el.link == productId);
        setProduct(state.paymentLinks[productIndex]);
    })

    return (
        <div className="container mx-auto p-10">
            <div>
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <Link className="flex items-center gap-4" to="/payment-links" >
                            <MdOutlineArrowBack />
                            <div className="text-xl font-semibold text-black"> {product?.title} </div>
                        </Link>
                        <a href={`${window.location.origin}/pay/${state.user?.username}/${product?.link}`} target="_" >
                            <HiOutlineExternalLink />
                        </a>
                    </div>

                    {/* <ShareAbles product={product} user={state.user} /> */}
                </div>

                <div className="my-6">
                    <div className="text-xl my-2 text-gray-600 font-semibold"> Stats </div>
                    <div className="grid xl:grid-cols-3 mt-4">
                        <div className="col-span-1 p-6 shadow-md rounded">
                            <div className="flex gap-4">
                                <div className="bg-gray-200 p-2 flex items-center justify-center rounded-[50%]">
                                    <BiPieChart fontSize={"36px"} />
                                </div>
                                <div className="flex flex-col justify-between">
                                    <div>Total Earnings</div>
                                    <div className="text-2xl  text-gray-500" > NGN {product?.earning || 0} </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 p-6 shadow-md rounded">
                            <div className="flex gap-4">
                                <div className="bg-gray-200 p-2 flex items-center justify-center rounded-[50%]">
                                    <RiUser5Fill fontSize={"36px"} />
                                </div>
                                <div className="flex flex-col justify-between">
                                    <div>No of times supported</div>
                                    <div className="text-2xl  text-gray-500" > {product?.sales || 0} </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 p-6 shadow-md rounded">
                            <div className="flex gap-4">
                                <div className="bg-gray-200 p-2 flex items-center justify-center rounded-[50%]">
                                    <FaGlobe fontSize={"36px"} />
                                </div>
                                <div className="flex flex-col justify-between">
                                    <div>Page Views</div>
                                    <div className="text-2xl  text-gray-500" > {product?.pageView || 0} </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <div className="text-xl my-2 text-gray-600 font-semibold"> Transaction </div>

                    <NoContent
                        variant={"link"}
                        topText={"Your transaction history is currently empty!"}
                        bottomText={"Hhhmmmm, No one has paid you using this link yet. You can share this link on"}
                    />
                </div>
            </div>
        </div>
    )
}