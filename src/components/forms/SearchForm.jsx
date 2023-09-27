import React, { useState } from 'react'

const SearchForm = (recipes) => {
  const [search, setSearch] = useState()

  const SearchHandel = ({ recipes }) => {
    console.log('Hello')
    console.log(recipes)
    console.log(search)
    return recipes.filter((item)=>
    keys.some(key => item[key].toLowerCase().includes(search))
    )
  }
  return (
    <div class=" flex justify-center">
      <div class=" grid grid-cols-4 gap-2">
        <div class="md:col-span-3 lg:col-span-3 col-span-3 g">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-3 rounded-l "
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          />
        </div>
        <div className="col-span-1">
          <button
            className="border p-3 bg-white rounded"
            onClick={SearchHandel}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchForm
