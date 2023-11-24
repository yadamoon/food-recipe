import React from 'react'
import Table from '../Layout/Table'

const ListUser = () => {
  return (
    <div
      className="w-full h-screen
     justify-center items-center"
    >
      <div className="flex  p-2 mb-4 rounded bg-gray-100">
        <p className="text-2xl text-gray-400 dark:text-gray-500">
          List Of Users
        </p>
      </div>
      <Table />
      <div className="mt-10">
        <PaginationComponent />
      </div>
    </div>
  )
}

export default ListUser

import { Pagination } from 'flowbite-react'
import { useState } from 'react'

export function PaginationComponent() {
  const [currentPage, setCurrentPage] = useState(1)

  const onPageChange = (page) => setCurrentPage(page)

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination
        currentPage={currentPage}
        totalPages={100}
        onPageChange={onPageChange}
      />
    </div>
  )
}
