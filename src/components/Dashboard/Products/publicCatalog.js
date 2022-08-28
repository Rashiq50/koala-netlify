import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../../Context/GlobalContext';
import { TbArrowDownRight } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import AvatarPlaceHolder from '../../Common/AvataPlaceHolder';

export default function PublicCatalog() {
    const [state, setState] = useContext(GlobalContext);
    const [products, setProducts] = useState([]);
    const [user, setUser] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if(state.products){
            setProducts(getProductsByUserName());
        }
    }, [])

    const getProductsByUserName = () => {
        const splittedPath = window.location.pathname.split('/');
        const username = splittedPath[splittedPath.length - 1];
        // const user = 
        const productList = state.products.filter(el => el.user.username === username);
        setUser(productList[0].user);
        return productList;
    }

    return (
        <div className='w-full text-center p-10'>
            {user && 
                <AvatarPlaceHolder user={user} />
            }
            <div className='text-4xl mt-4 mb-2 font-bold capitalize'>
                {user?.name}
            </div>
            <div className='text-3xl font-semibold'>
                @{user?.username}
            </div>

            <div className='w-2/3 mx-auto mt-10'>
                <div className="grid grid-cols-4">
                    {products?.map((product) => (
                        <div onClick={() => navigate(`${product.slug}`)} className="col-span-1 p-4 max-w-[350px] cursor-pointer">
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
                                        <button> <TbArrowDownRight fontSize={'24px'} fontWeight={'bolder'} /> </button>
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