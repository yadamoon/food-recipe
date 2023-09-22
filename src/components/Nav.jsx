import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav className=" bg-white p-5 ">
        <ul className="flex w-full justify-center  sm:text-sm items-center space-x-4 uppercase">
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
              to="/listRecipe"
              className="text-md font-semibold text-gray-600 hover:text-gray-800"
            >
              Lists
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
          <li>
            <Link
              to="/Login"
              className="text-md font-semibold text-gray-600 hover:text-gray-800"
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
