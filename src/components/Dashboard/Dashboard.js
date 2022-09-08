import React from 'react'
import { BsFillLightningChargeFill } from 'react-icons/bs'
import { MdManageAccounts } from 'react-icons/md'
import { TiHome } from 'react-icons/ti'
import { NavLink, Outlet } from 'react-router-dom'
import MainContent from './MainContent'
import Navbar from './Navbar'
import logo from '../../assets/logo-white.png'
import Modal from './Modal'
import Sidebar from './Sidebar'
import CreateInvoice from './CreateInvoice'

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input
                    id="side-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content">
                    <Navbar />
                    <Outlet />
                    {/* <!-- Page content here --> */}
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="side-drawer"
                        className="drawer-overlay"
                    ></label>
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
