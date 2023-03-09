import React from 'react';
import { Link } from 'react-router-dom';

const AdminProduct = () => {
    return (
        <>
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><Link to="/">Home</Link></li> 
                    <li><Link to="/admin">Admin Product List</Link></li> 
                </ul>
            </div>
        </>
    );
};

export default AdminProduct;