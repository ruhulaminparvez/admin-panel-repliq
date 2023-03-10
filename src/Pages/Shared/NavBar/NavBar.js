import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/logo/logos.png';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const NavBar = () => {
  const navItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
    </React.Fragment>
  );
  return (
    <>
      <div className="navbar bg-base-100 mx lg:px-16">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <Link to="" className="normal-case text-xl">
            <img src={logo} alt="Logo" className="h-16" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn btn-primary mr-2">LogIn</Link>
          <Link to="/admin" className="btn btn-primary mr-2">Admin Panel</Link>
          <Link to="/cart" className="btn btn-primary">
            <AiOutlineShoppingCart className="text-xl" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;