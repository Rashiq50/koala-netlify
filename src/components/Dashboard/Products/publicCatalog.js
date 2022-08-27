import React, { useContext } from 'react';
import { GlobalContext } from '../../../Context/GlobalContext';
import { BsThreeDots } from "react-icons/bs";

export default function PublicCatalog() {
    const [state, setState] = useContext(GlobalContext);
    return (
        <div className='w-full text-center p-10'>
            <div className="avatar placeholder">
                <div className="bg-primary text-neutral-content font-semibold rounded-full w-28">
                    <span className='text-4xl'>
                        {`${state.user?.name.split(' ')[0][0].toUpperCase()}${state.user?.name.split(' ')[1][0].toUpperCase()}`}
                    </span>
                </div>
            </div>
            <div className='text-4xl mt-4 mb-2 font-bold capitalize'>
                {state.user?.name}
            </div>
            <div className='text-3xl font-semibold'>
                @{state.user?.username}
            </div>

            <div className='w-2/3 mx-auto mt-10'>
                <div className="grid grid-cols-4">
                    {state?.products?.map((product) => (
                        <div className="col-span-1 p-4 max-w-[350px]">
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
        </div>
    )
}