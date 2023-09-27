import React, { useState } from 'react'

const SearchForm = ({ recipes, setter }) => {
  const [search, setSearch] = useState()

  const SearchHandel = () => {
    console.log('Hello')
    console.log(recipes)
    console.log(search)
    const recipesFiltered = recipes.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    )
    setter(recipesFiltered)
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
