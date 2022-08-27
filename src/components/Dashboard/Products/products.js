import React, { useContext, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../Context/GlobalContext";
import PrimaryButton from "../../Common/PrimaryButton";

export default function ProductsPage() {

    const [state, setState] = useContext(GlobalContext);

    const navigate = useNavigate();
    return (
        <div className="container mx-auto py-10">
            <div className="flex justify-between">
                <h1 className='text-2xl font-semibold mb-2'>Product Pages</h1>
                <div>
                    <PrimaryButton text="New product" onCLickFunction={() => { navigate('/product-pages/create') }} />
                </div>
            </div>

            <div className="grid grid-cols-5">
                {state?.products?.map((product) => (
                    <div className="col-span-1 p-4">
                        <div className="shadow-lg rounded-[12px] px-8 py-6">
                            <div className="rounded overflow-hidden w-2/3 mx-auto ">
                                <img className="w-[160px] h-[180px]" src={product.coverImage} />
                            </div>

                            <div className="flex justify-between mt-4">
                                <div>
                                    <h3 className="text-xl font-semibold" > {product.name} </h3>
                                    <h3 className="text-lg font-semibold text-gray-500" > {product.price} NGN </h3>
                                </div>
                                <div>
                                    <button> <BsThreeDots fontSize={'24px'} fontWeight={'bolder'} /> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}