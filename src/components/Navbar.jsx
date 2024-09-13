import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = ({size,setShow}) => {
  return (
    <nav className="bg-gray-900 py-1 px-8  shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <a href="/">
            <img src="logo.png" alt="Logo" className="h-16 scale-150 inline-block mr-2" />
            NexCart
          </a>
        </div>
        <div className="relative">
          <FaShoppingCart onClick={()=>{setShow(false)}} className="text-white text-2xl cursor-pointer" />
          <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
            {size}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
