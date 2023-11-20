import React from 'react'

const Dashboard = () => {
  return (
    <div className="  mx-2 bg-white">
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
    </div>
  )
}

export default Dashboard
