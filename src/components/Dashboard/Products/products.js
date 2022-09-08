import React, { useContext, useEffect, useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../../Context/GlobalContext'
import PrimaryButton from '../../Common/PrimaryButton'
import ShareAbles from '../../Misc/shareables'
import ReactOutSideClickHandler from 'react-outside-click-handler'
import { HiOutlineExternalLink } from 'react-icons/hi'

export default function ProductsPage() {
    const [state, setState] = useContext(GlobalContext)
    const [products, setProducts] = useState([])

    const navigate = useNavigate()

    const toggleMenu = () => {
        const menu = document.getElementById('ddMenu')
        if (menu) {
            menu.classList.toggle('hidden')
        }
    }
    const hideMenu = () => {
        const menu = document.getElementById('ddMenu')
        if (menu && !menu.classList.contains('hidden')) {
            menu.classList.add('hidden')
        }
    }

    useEffect(() => {
        if (state.products) {
            setProducts(getProductsByUserName())
        }
    }, [])

    const getProductsByUserName = () => {
        const productList = state.products.filter(
            (el) => el.user.username === state.user.username,
        )
        return productList
    }
    return (
        <div className="container mx-auto py-10">
            <div className="flex justify-between">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-semibold mb-2">
                        Product Pages
                    </h1>
                    <a
                        href={`${window.location.origin}/buy/${state.user?.username}`}
                        target="_"
                        className="text-blue-600"
                    >
                        <HiOutlineExternalLink fontSize={'1.5rem'} />
                    </a>
                </div>
                <div>
                    <PrimaryButton
                        text="New product"
                        onCLickFunction={() => {
                            navigate('/product-pages/create')
                        }}
                    />
                </div>
            </div>

            <div className="grid grid-cols-5">
                {products?.map((product) => (
                    <div key={product.id} className="col-span-1 p-4">
                        <div
                            onClick={() => navigate(`${product.id}`)}
                            className="shadow-lg rounded-[12px] px-8 py-6 cursor-pointer"
                        >
                            <div className="rounded overflow-hidden w-2/3 mx-auto ">
                                <img
                                    className="w-[160px] h-[180px]"
                                    src={product.coverImage}
                                />
                            </div>
                            <div className="flex justify-between mt-4">
                                <div>
                                    <h3 className="text-xl font-semibold">
                                        {product.name}
                                    </h3>
                                    <h3 className="text-lg font-semibold text-gray-500">
                                        {product.price} NGN
                                    </h3>
                                </div>
                                <ReactOutSideClickHandler
                                    onOutsideClick={() => {
                                        hideMenu()
                                    }}
                                >
                                    <div className="relative inline-block text-left">
                                        <button
                                            id="menu-button"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                toggleMenu()
                                            }}
                                            aria-expanded="true"
                                            aria-haspopup="true"
                                        >
                                            <BsThreeDots
                                                fontSize={'24px'}
                                                fontWeight={'bolder'}
                                            />
                                        </button>

                                        <div
                                            id="ddMenu"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                toggleMenu()
                                            }}
                                            className="origin-top-right hidden absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                            role="menu"
                                            aria-orientation="vertical"
                                            aria-labelledby="menu-button"
                                            tabIndex="-1"
                                        >
                                            <div className="py-1" role="none">
                                                <ShareAbles
                                                    type="vr"
                                                    shareLink={`${window.location.origin}/buy/${state.user?.username}/${product?.slug}`}
                                                    item={product}
                                                    user={product.user}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </ReactOutSideClickHandler>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
