import React, { useContext, useEffect, useState } from 'react';
import { IoIosFunnel, IoMdNotifications } from 'react-icons/io'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalContext';
import PrimaryButton from '../Common/PrimaryButton';
import PrimaryButtonOutline from '../Common/PrimaryOutlineButton';

const Navbar = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [state, setState] = useContext(GlobalContext);
    useEffect(() => {
        if (localStorage.getItem("token") && localStorage.getItem("user")) {
            setLoggedIn(true);
            setUser(JSON.parse(localStorage.getItem('user')));
        }
    }, [])

    const LogOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setState({...state, loggedIn:false, user:null});
        window.location.reload();
    }
    return (
        <div>
            <div className='flex justify-between justify-items-end py-4 shadow'>
                <div className="relative ml-4 flex items-center border">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" className="p-2 w-96 pl-10 text-sm flex-grow text-gray-900 bg-gray-100 rounded  focus:ring-blue-500 focus:border-blue-500 " placeholder="Search name, type, desc, slug, etc..." required />

                    <button className="text-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2"><IoIosFunnel /></button>
                </div>
                <div className='pr-4'>
                    <div className='flex items-center  space-x-6 text-gray-500'><IoMdNotifications className='text-3xl' />
                        <label htmlFor="side-drawer" tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        {loggedIn &&
                            <span> {user?.name.toUpperCase()} </span>
                        }

                        {loggedIn &&
                            <div className="avatar placeholder">
                                <div className="bg-primary text-neutral-content rounded-full w-12">
                                    <span>
                                        {`${user?.name.split(' ')[0][0].toUpperCase()}${user?.name.split(' ')[1][0].toUpperCase()}`}
                                    </span>
                                </div>
                            </div>
                        }
                        {!loggedIn &&
                            <Link to={'/login'}>
                                <PrimaryButton text='Login' />
                            </Link>
                        }
                        {!loggedIn &&
                            <Link to={'/signup'}>
                                <PrimaryButtonOutline text='Register' />
                            </Link>
                        }
                        {loggedIn &&
                            <button onClick={() => { LogOut() }}> Logout </button>
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;