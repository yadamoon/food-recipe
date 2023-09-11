import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav className=" bg-white p-5 ">
        <ul className="flex justify-center  items-center space-x-4">
          <li>
            <Link
              to="/"
              className="text-md font-semibold text-gray-600 hover:text-gray-800"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Services"
              className="text-md font-semibold text-gray-600 hover:text-gray-800"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/RegisterForm"
              className="text-md font-semibold text-gray-600 hover:text-gray-800"
            >
              Add New Product
            </Link>
          </li>
          <li>
            <Link
              to="/help"
              className="text-md font-semibold text-gray-600 hover:text-gray-800"
            >
              Help
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
