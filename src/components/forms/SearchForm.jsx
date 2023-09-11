import React from 'react'

const SearchForm = () => {
  return (
    <div class="left-0 w-full  z-40 select-none">
      <div class="w-1/3  relative mx-auto mt-10">
        <div class="bg-white w-full h-16 rounded-xl mb-3 shadow-t p-2  grid-cols-2 flex">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-3 rounded"
          />
        </div>
      </div>
    </div>
  )
}

export default SearchForm
