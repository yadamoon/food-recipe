import React, { useState } from 'react'
import Chart from '../../Layout/Chart'

export default function HeaderApp() {
  return (
    <div>
      <div className="2xl:container 2xl:mx-auto">
        <div className="bg-white  shadow-lg py-5 px-7">
          <nav className="flex justify-between">
            <div className="flex items-center space-x-3 lg:pr-16 pr-6">
              <h2 className="font-normal text-2xl leading-6 text-gray-800">
                Dashboard
              </h2>
            </div>

            <div className="flex ">
              <input
                className="text-gray-600 dark:text-gray-400 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 bg-gray-200 rounded border shadow"
                placeholder="Search"
              />
            </div>

            <div className=" flex space-x-5 justify-center items-center pl-2">
              <div className="relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ">
                {/* <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="animate-ping w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto duration-200" />
                <div className=" w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto shadow-lg" /> */}
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
          {/* for smaller devcies */}
        </div>
      </div>
      <div>
        <Chart />
      </div>
    </div>
  )
}
