import React from 'react'

const SearchForm = () => {
  return (
    <div class=" flex justify-center">
      <div class=" grid grid-cols-1">
        <div class="md:col-span-1 lg:col-span-1">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-3 rounded "
          />
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default SearchForm
