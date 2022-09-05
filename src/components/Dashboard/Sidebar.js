import React from 'react';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { TiHome } from 'react-icons/ti';
import { MdManageAccounts } from 'react-icons/md'
import logo from '../../assets/logo-white.png'
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
    // const router = useRouter
    const isActive = (name) => {
        if (window.location.pathname.includes(name)) {
            return true
        }
        return false;
    }
    return (
        <ul className="menu scrollbar-hide p-4 overscroll-none overflow-y-auto w-72 bg-gray-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <div className="ml-5">
                <div className='mt-3'><img className='w-16' src={logo} alt="" /></div>
                <NavLink to="/" className='font-semibold mt-8 text-gray-500 text-lg flex items-center'><BsFillLightningChargeFill /> <small className='ml-2'>Get Started</small></NavLink>
                <div>
                    <h5 className='uppercase text-sm mt-3  text-gray-500'>overview</h5>
                    <Link to={'dashboard'} >
                        <p className={`font-semibold text-sm mt-2 hover:text-primary cursor-pointer  flex justify-start items-center ${isActive('/dashboard') ? "text-primary":"text-gray-500"} `}>
                            <TiHome />
                            <span className='ml-2'>Home</span>
                        </p>
                    </Link>
                    <p className='font-semibold text-sm mt-4 hover:text-primary cursor-pointer text-gray-500 flex justify-start items-center'>
                        <MdManageAccounts />
                        <span className='ml-2'>My Profile</span>
                    </p>
                </div>
                <div>
                    <h5 className='uppercase text-sm mt-4 text-gray-500'>payment</h5>

                    <Link to={'payment-links'}>
                        <p className={`font-semibold text-sm mt-2 hover:text-primary cursor-pointer flex justify-start items-center ${isActive('payment-links') ? "text-primary":"text-gray-500"} `}>
                            <TiHome />
                            <span className='ml-2'>
                                Payment Links
                            </span>
                        </p>
                    </Link>

                    <p className='font-semibold text-sm mt-4 hover:text-primary cursor-pointer text-gray-500 flex justify-start items-center'>
                        <MdManageAccounts />
                        <span className='ml-2'>
                            Transfer
                        </span>
                    </p>
                </div>
                <div>
                    <h5 className='uppercase text-sm mt-4 text-gray-500'>commerce</h5>
                    <NavLink to={'/product-pages'}>
                        <p className={`font-semibold text-sm mt-2 hover:text-primary cursor-pointer flex justify-start items-center ${isActive('product-pages') ? "text-primary":"text-gray-500"} `}>
                            <TiHome />
                            <span className='ml-2'>
                                Product Pages
                            </span>
                        </p>
                    </NavLink>
                    <NavLink
                        to='/invoice'
                        className='font-semibold text-sm mt-4 hover:text-primary cursor-pointer text-gray-500 flex justify-start items-center'><MdManageAccounts /> <span className='ml-2'>Invoicing</span>
                    </NavLink>
                </div>
                <div>
                    <h5 className='uppercase text-sm mt-4 text-gray-500'>settings</h5>
                    <p className={`font-semibold text-sm mt-2 hover:text-primary cursor-pointer text-gray-500 flex justify-start items-center ${isActive('payouts') ? "text-primary":"text-gray-500"} `}><TiHome /> <span className='ml-2'>Payouts</span></p>
                    <p className='font-semibold text-sm mt-4 hover:text-primary cursor-pointer text-gray-500 flex justify-start items-center'><MdManageAccounts /> <span className='ml-2'>Integrations</span></p>
                    <p className='font-semibold text-sm mt-4 hover:text-primary cursor-pointer text-gray-500 flex justify-start items-center'><MdManageAccounts /> <span className='ml-2'>Referrals</span></p>
                </div>
                <div>
                    <p className='font-semibold text-sm mt-4 hover:text-primary cursor-pointer text-gray-500 flex justify-start items-center'><MdManageAccounts /> <span className='ml-2'>Logout</span></p>
                </div>
            </div>
        </ul>
    );
};

export default Sidebar;