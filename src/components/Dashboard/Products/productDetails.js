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

export default function ProductDetails() {

    const [state, setState] = useContext(GlobalContext);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const splittedPath = window.location.pathname.split('/');
        const productId = splittedPath[splittedPath.length - 1];
        const productIndex = state.products.findIndex(el => el.id == productId);
        setProduct(state.products[productIndex]);
    })

    return (
        <div className="container mx-auto p-10">
            <div>
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <Link className="flex items-center gap-4" to="/product-pages" >
                            <MdOutlineArrowBack />
                            <div className="text-xl font-semibold text-black"> {product?.name} </div>
                        </Link>
                        <a href={`${window.location.origin}/buy/${state.user?.username}/${product?.slug}`} target="_" >
                            <HiOutlineExternalLink />
                        </a>
                    </div>

                    <ShareAbles product={product} user={state.user} />
                </div>

                <div className="my-6">
                    <div className="text-xl my-2 text-gray-600 font-semibold"> Stats </div>
                    <div className="grid xl:grid-cols-3 mt-4">
                        <div className="col-span-1 p-6">
                            <div className="flex gap-4">
                                <div className="bg-gray-200 p-2 flex items-center justify-center rounded-[50%]">
                                    <BiPieChart fontSize={"36px"} />
                                </div>
                                <div className="flex flex-col justify-between">
                                    <div>Total Earnings</div>
                                    <div className="text-2xl  text-gray-500" > NGN {product?.earning} </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 p-6">
                            <div className="flex gap-4">
                                <div className="bg-gray-200 p-2 flex items-center justify-center rounded-[50%]">
                                    <GiShoppingBag fontSize={"36px"} />
                                </div>
                                <div className="flex flex-col justify-between">
                                    <div>Number of Sales</div>
                                    <div className="text-2xl  text-gray-500" > {product?.sales} </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 p-6">
                            <div className="flex gap-4">
                                <div className="bg-gray-200 p-2 flex items-center justify-center rounded-[50%]">
                                    <FaGlobe fontSize={"36px"} />
                                </div>
                                <div className="flex flex-col justify-between">
                                    <div>Page Views</div>
                                    <div className="text-2xl  text-gray-500" > {product?.pageView} </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <div className="text-xl my-2 text-gray-600 font-semibold"> Sales </div>

                    <NoContent
                        topText={"No one has bought this product yet!"}
                        bottomText={"When someone purchases your product, the sales record will start showing here."}
                    />
                </div>
            </div>
        </div>
    )
}