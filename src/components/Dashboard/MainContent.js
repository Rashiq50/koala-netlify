import React, { useContext, useState } from 'react';
import { TbNumber1, TbNumber2 } from 'react-icons/tb';
import { GlobalContext } from '../../Context/GlobalContext';
import PrimaryButton from '../Common/PrimaryButton';
import Modal from './Modal';
import Navbar from './Navbar';

const MainContent = () => {
    const [openPopup, setOpenPopup] = useState(false);
    const [state, setState] = useContext(GlobalContext);
    return (
        <div className='px-16'>
            <div className='text-center mt-8'>
                <h1 className='text-2xl font-semibold text-gray-600 mb-2'>Welcome, {state.user.name}!</h1>
                <p className='text-gray-500 font-semibold'>Finish these steps below to setup and verify your account.</p>
            </div>
            <Modal />
            <div className="flex flex-col my-28">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block sm:px-6 lg:px-8">
                        <div className="overflow-hidden min-w-full">
                            <table className="w-full">
                                <tbody>
                                    <tr className="bg-white border-b transition duration-300 ease-in-out ">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <h3 className='font-semibold'>Verify your identity</h3>
                                            <p className='text-gray-600'>Click the button to start your identity verification process</p>
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <PrimaryButton
                                                htmlFor="popup-modal"
                                                text='Verify Account'
                                                onCLickFunction={setOpenPopup}
                                            />
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b transition duration-300 ease-in-out">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <h3 className='font-semibold'>Link your bank account</h3>
                                            <p className='text-gray-600'>Add the bank account details to receive your payouts</p>
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <PrimaryButton
                                                htmlFor="popup-modal"
                                                text='Link Bank'
                                                onCLickFunction={setOpenPopup}
                                            />
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b transition duration-300 ease-in-out">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <h3 className='font-semibold'>Set up your profile</h3>
                                            <p className='text-gray-600'>Click the button to setup your creator profile</p>
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <PrimaryButton
                                                htmlFor="popup-modal"
                                                text='Setup Profile'
                                                onCLickFunction={setOpenPopup}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;