import React from 'react'
import Table from '../Layout/Table'

const ListUser = () => {
  return (
    <div className="w-full h-screen justify-center items-center">
      <div className="flex  p-2 mb-4 rounded bg-gray-100">
        <p className="text-2xl text-gray-400 dark:text-gray-500">
          List Of Users
        </p>
      </div>
      <Table />
    </div>
  )
}

export default ListUser
