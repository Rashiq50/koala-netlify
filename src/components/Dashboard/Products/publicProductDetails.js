import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../../Context/GlobalContext';
import PrimaryButton from '../../Common/PrimaryButton';

export default function PublicProductDetail() {

    const [state, setState] = useContext(GlobalContext);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const splittedPath = window.location.pathname.split('/');
        const productId = splittedPath[splittedPath.length - 1];
        const productIndex = state.products.findIndex(el => el.slug == productId);
        setProduct(state.products[productIndex]);
    })

    return (
        <div className='grid lg:grid-cols-2 h-screen w-screen'>
            <div className='col-span-1 bg-blue-50 flex items-center justify-center'>
                <div className='rounded-lg overflow-hidden w-96 h-96'>
                    <img src={product?.coverImage} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
            </div>
            <div className='col-span-1 flex items-center justify-start px-10'>
                <div className='flex flex-col gap-4 w-2/3'>
                    <div className='text-5xl'> {product?.name} </div>
                    <div className='text-xl'> By {product?.user.name} </div>
                    <div className='text-2xl'> NGN {product?.price} </div>

                    <div className='text-lg' dangerouslySetInnerHTML={{__html: product?.description}}></div>

                    <div className='mt-10'>
                        <PrimaryButton text='Buy Now' />
                    </div>
                </div>
            </div>
        </div>
    )
}
