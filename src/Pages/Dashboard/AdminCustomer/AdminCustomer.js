import React from 'react';
import { Link } from 'react-router-dom';
import CustomerTable from './CustomerTable';
import AdminCustomerModal from './AdminCustomerModal';

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
                        <label htmlFor="admin-customer-modal" className="btn btn-primary btn-sm">Add Customer</label>
                        <AdminCustomerModal/>
                    </div>
                    <h1 className="text-3xl font-bold text-center mt-5">Admin Customer List</h1>
                    <CustomerTable/>
                </div>
            </div> 
        </>
    );
};

export default AdminCustomer;