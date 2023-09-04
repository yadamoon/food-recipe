import React from 'react'
import {Link } from 'react-router-dom'




const Nav = () => {
  return (
    <div className="hidden sm:flex flex-row items-center space-x-6">
          <nav className='flex text-center items-center '>
      <ul>
        <li className='text-black font-bold'>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/Services">Services</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
      </ul>
    </nav>
      
    </div>
  )
}

export default Nav;
