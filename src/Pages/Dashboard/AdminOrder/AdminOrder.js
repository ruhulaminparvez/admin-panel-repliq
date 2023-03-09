import React from 'react';
import { Link } from 'react-router-dom';

const AdminOrder = () => {
    return (
        <>
           <div className="text-sm breadcrumbs">
                <ul>
                    <li><Link to="/">Home</Link></li> 
                    <li><Link to="/admin">Admin Order List</Link></li> 
                </ul>
            </div> 
        </>
    );
};

export default AdminOrder;