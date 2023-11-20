import React, { useState } from 'react'
import Chart from '../../Layout/Chart'
import { Link } from 'react-router-dom'

export default function HeaderApp() {
  return (
    <div>
      <div className="2xl:container 2xl:mx-auto">
        <div className="bg-white  shadow-lg py-5 px-7">
          <nav className="flex justify-between">
            <div className="flex ">
              <input
                className="text-gray-600 dark:text-gray-400 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 bg-gray-200 rounded border shadow"
                placeholder="Search"
              />
            </div>

            <div className=" flex space-x-5 justify-center items-center pl-2">
              <div className="relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ">
                <Link className=" text-white bg-red-600  rounded-lg p-2">
                  {' '}
                  Logout{' '}
                </Link>
              </div>

              <img
                src="public/feveb.jpg"
                alt="profile"
                className="cursor-pointer  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 rounded-full"
                width={40}
                height={44}
              />
            </div>
          </nav>
        </div>
      </div>
      <div></div>
    </div>
  )
}
