import React from 'react';
import { Link } from 'react-router-dom';

const AdminCustomer = () => {
    return (
        <>
           <div className="text-sm breadcrumbs">
                <ul>
                    <li><Link to="/">Home</Link></li> 
                    <li><Link to="/admin">Admin Customer List</Link></li> 
                </ul>
            </div> 
        </>
    );
};

export default AdminCustomer;