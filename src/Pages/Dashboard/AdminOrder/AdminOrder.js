import React from 'react';
import { Link } from 'react-router-dom';
import OrderTable from './OrderTable';

const AdminOrder = () => {
    return (
        <>
           <div className="text-sm breadcrumbs">
                <ul>
                    <li><Link to="/">Home</Link></li> 
                    <li><Link to="/admin">Admin Order List</Link></li> 
                </ul>
                <div>
                    <h1 className="text-3xl font-bold text-center mt-5">Admin Order List</h1>
                    <OrderTable/>
                </div>
            </div> 
        </>
    );
};

export default AdminOrder;