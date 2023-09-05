import React from 'react'
import {Link } from 'react-router-dom'




const Nav = () => {
  return (
   <div>

    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
    
          <div className="flex-grow"></div>
          <nav className="flex text-center">
            <p  className="text-gray-800 hover:text-green-900 hover:text-xl px-3 py-2 rounded-md text-md font-medium  ">
            <Link to="/" >Home</Link>
            </p>
            <p  className="text-gray-800 hover:text-green-900 hover:text-xl  px-3 py-2 rounded-md  font-medium">
            <Link to="/Services">Services</Link>
            </p>
            <p  className="text-gray-800 hover:text-green-900 hover:text-xl  px-3 py-2 rounded-md  font-medium">
            <Link to="/RegisterForm">Register</Link>
            </p>
            <p className="text-gray-800 hover:text-green-900 hover:text-xl  px-3 py-2 rounded-md text-sm font-medium">
            <Link to="/help">Help</Link>
            </p>
          </nav>
        </div>
      </div>
    </nav>
      
    </div>
  )
}

export default Nav;
