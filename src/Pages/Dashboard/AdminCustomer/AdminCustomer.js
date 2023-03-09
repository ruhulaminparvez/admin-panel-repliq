import React from 'react';
import { Link } from 'react-router-dom';
import CustomerTable from './CustomerTable';

const AdminCustomer = () => {
    return (
        <>
           <div className="text-sm breadcrumbs">
                <ul>
                    <li><Link to="/">Home</Link></li> 
                    <li><Link to="/admin">Admin Customer List</Link></li> 
                </ul>
                <div>
                    <div className="flex justify-end">
                        <Link to="/admin/customer/add" className="btn btn-primary btn-sm">Add Customer</Link>
                    </div>
                    <h1 className="text-3xl font-bold text-center mt-5">Admin Customer List</h1>
                    <CustomerTable/>
                </div>
            </div> 
        </>
    );
};

export default AdminCustomer;