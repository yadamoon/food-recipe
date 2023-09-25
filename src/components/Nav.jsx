import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Nav = () => {
  const { signedIn } = useSelector((state) => state.auth)

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
              to="/listRecipe"
              className="text-md font-semibold text-gray-600 hover:text-gray-800"
            >
              Recipes
            </Link>
          </li>

          <li>
            <Link
              to="/Add_New_Recipe"
              className="text-md font-semibold text-gray-600 hover:text-gray-800"
            >
              Add
            </Link>
          </li>

          <li>
            <Link
              to="/settings"
              className="text-md font-semibold text-gray-600 hover:text-gray-800"
            >
              Settings
            </Link>
          </li>
          {signedIn && (
            <li>
              <Link
                to="/help"
                className="text-md font-semibold text-gray-600 hover:text-gray-800"
              >
                Log Out
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default Nav
