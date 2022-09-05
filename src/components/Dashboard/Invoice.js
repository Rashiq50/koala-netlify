import React from 'react';
import InvoiceCard from './InvoiceCard';
import { BiCreditCard } from 'react-icons/bi';
import { FiLoader } from 'react-icons/fi'
import { GiProgression } from 'react-icons/gi'
import { TbNotes } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Invoice = () => {
    return (
        <div className='mx-8'>
            <div className='flex justify-between my-10'>
                <h3 className='text-2xl font-semibold'>Invoicing</h3>
                <button className='btn btn-primary text-white'><Link to='createInvoice'>+ New Invoice</Link></button>
            </div>
            <p className='text-xl font-semibold'>Stats</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-12'>
                <InvoiceCard title='Amount Received' icon={<FiLoader />} />
                <InvoiceCard title='Amount Pending' icon={<BiCreditCard />} />
                <InvoiceCard title='Total Invoice Amount' icon={<GiProgression />} />
            </div>
            <h3 className='text-2xl font-semibold'>Invoices</h3>
            <ul className="menu menu-horizontal p-0 text-2xl">
                <li><a>All</a></li>
                <li><a>Drafts</a></li>
                <li><a>Outstanding</a></li>
                <li><a>Overdue</a></li>
                <li><a>Paid</a></li>
            </ul>
            <hr />
            <div className="text-center py-32 px-48 mt-5 mb-32 rounded shadow-lg">
                <TbNotes className='mx-auto text-7xl' />
                <h2 className='text-2xl font-semibold'>Create Your first invoice</h2>
                <p className='my-5'>Send a customisable invoice to your customers in a few clicks. We'll email them a link to quickly and securely pay online.</p>
                <button className='btn btn-primary text-white'><Link to='createInvoice'>+ New Invoice</Link></button>
            </div>
        </div>
    );
};

export default Invoice;