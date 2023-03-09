import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import NavBar from '../Pages/Shared/NavBar/NavBar';
import Footer from '../Pages/Shared/Footer/Footer';

const DashboardLayout = () => {
    return (
        <>
           <div>
            <NavBar/>
            <div className="drawer drawer-mobile lg:px-16 bg-base-200">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-6">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-white">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to="/admin" className='font-bold'>Admin Dashboard</Link></li>    
                    </ul>

                </div>
            </div>
            <Footer/>
            </div> 
        </>
    );
};

export default DashboardLayout;