import React from 'react'
import Chart from './Chart'
import PieComponent from './PieComponent'
import Table from './Table'

const Dashboard = () => {
  return (
    <div className="  mx-2 bg-white rounded overflow-y-auto ">
      <div className=" ">
        <h1 className="font-bold uppercase text-2xl"> Dashboard</h1>
      </div>
      <div className=" grid grid-cols-4   w-full  gap-4 h-auto  ">
        <div className="col-span-1 bg-white w-full  border rounded-r-2xl shadow-gray-500 shadow-xl hover:scale-[103%] justify-center items-center  ">
          <p className="text-sm text-teal-800"> Earnings (Month)</p>
          <h1>$40,000</h1>
        </div>
        <div className="col-span-1 bg-white w-full  border rounded-r-2xl shadow-gray-500 shadow-xl hover:scale-[103%] justify-center items-center">
          <p className="text-sm text-teal-800"> Earnings (Month)</p>
          <h1>$40,000</h1>
        </div>
        <div className="col-span-1 bg-white w-full   border rounded-r-2xl shadow-gray-500 shadow-xl hover:scale-[103%] justify-center items-center">
          <p className="text-sm text-teal-800"> Earnings (Month)</p>
          <h1>$40,000</h1>
        </div>
        <div className="col-span-1 bg-white w-full   border rounded-r-2xl shadow-gray-500 shadow-xl hover:scale-[103%] justify-center items-center">
          <p className="text-sm text-teal-800"> Earnings (Month)</p>
          <h1 className="p-4">$40,000</h1>
        </div>
      </div>
      <div className=" mt-20 ">
        <h1 className=" text-gray-500 font-bold mx-2 text-2xl">Chart</h1>
      </div>
      <div className="grid grid-cols-4 gap-2 mt-10 h-auto mx-2 ">
        <div className="  bg-white w-full border col-span-3">
          <div className="border border-gray-300  bg-gray-100 w-full h-[35px] ">
            <p className="text-2xl text-end justify-end items-end  ml-auto  mx-5    ">
              <span className="  rounded-md pl-1  pr-1 bg-gray-400 text-white">
                :
              </span>
            </p>
          </div>
          <div className="mt-10">
            <Chart />
          </div>
        </div>

        <div className="  bg-gray  w-full border col-span-1">
          <div className="border border-gray-300 bg-gray-100 w-full h-[35px]">
            <p className="text-2xl text-end justify-end items-end  ml-auto  mx-5    ">
              <span className="  rounded-md pl-1  pr-1 bg-gray-400 text-white">
                :
              </span>
            </p>
          </div>
          <div className=" flex justify-center items-center mt-16 h-auto">
            <PieComponent />
          </div>
        </div>
      </div>
      <div className="">
        <Table />
      </div>
    </div>
  )
}

export default Dashboard
