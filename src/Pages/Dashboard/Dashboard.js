import React from 'react';
import { Link } from 'react-router-dom';
import adminImg from '../../Assets/admin/admin.svg';

const Dashboard = () => {
    return (
        <>
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><Link to="/">Home</Link></li> 
                    <li><Link to="/admin">Admin Dashboard</Link></li> 
                </ul>
            </div>
            <div className='flex justify-center items-center'>
                <div className="card flex justify-center items-center mt-10">
                        <h2 className="card-title">Admin Dashboard</h2>
                        <img src={adminImg} alt="admin" className="w-full"/>
                </div>
            </div>
        </>
    );
};

export default Dashboard;