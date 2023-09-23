import React from 'react'

const SearchForm = () => {
  return (
    <div class=" flex justify-center">
      <div class=" grid grid-cols-4 gap-2">
        <div class="md:col-span-3 lg:col-span-3 col-span-3 g">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-3 rounded-l "
          />
        </div>
        <div className="col-span-1">
          <button className="border p-3 bg-white rounded">Search</button>
        </div>
      </div>
    </div>
  )
}

export default SearchForm
