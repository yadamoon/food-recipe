import React, { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SearchForm from '../forms/SearchForm'
import ago from 's-ago'
import { http } from './../../services/http/http'
import ReactPaginate from 'react-paginate'
import Rate from '../Rating/Rate'
function RCPaginate({ items, itemsPerPage, setter }) {
  const [itemOffset, setItemOffset] = useState(0)
  const endOffset = itemOffset + itemsPerPage
  const currentItems = items.slice(itemOffset, endOffset)

  useEffect(() => {
    setter(currentItems)
  }, [itemOffset, endOffset, items])

  const pageCount = Math.ceil(items.length / itemsPerPage)
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length
    setItemOffset(newOffset)
  }

  return (
    <div className="flex justify-center">
      <ReactPaginate
        containerClassName="flex space-x-4 items-center bg-white p-2 px-4 justify-center rounded"
        nextClassName="bg-gray-300 text-xs uppercase py-1 px-2 rounded-lg hover:opacity-75"
        previousClassName="bg-gray-300 text-xs uppercase py-1 px-2 rounded-lg hover:opacity-75"
        activeLinkClassName=" text-white bg-teal-700 border-0"
        pageLinkClassName="w-8 h-8 flex items-center justify-center text-sm rounded-full border  hover:bg-teal-500 hover:text-white"
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        initialPage={0}
        pageCount={pageCount}
        previousLabel="previous"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

function DetailsComponents() {
  const [recipes, setRecipe] = useState([])
  const [recipesDisplayed, setRecipesDisplayed] = useState([])

  const navigate = useNavigate()

  const [recipesFiltered, setRecipesFiltered] = useState([])

  const getRecipes = async function () {
    const result = await http.request({ url: 'recipe' })
    setRecipe(result)
    setRecipesFiltered(result)

    console.log(result)
  }

  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <div>
      <h1 className="text-3xl text-center font-extrabold text-teal-800">
        Our Popular Food
      </h1>

      <SearchForm recipes={recipes} setter={setRecipesFiltered} />
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:grid-cols-2 p-3 ">
          {recipesDisplayed.map((recipe, index) => (
            <div
              className=" h-5/5 body-font bg-white text-gray-600 rounded-t"
              key={recipe.id}
            >
              <div className="">
                <Link
                  to={'/recipes/' + recipe._id}
                  className="relative block h-auto w-full overflow-hidden rounded-t"
                >
                  <img
                    alt="recipe"
                    className="block h-full w-full object-cover object-center cursor-pointer hover:opacity-75"
                    src={
                      recipe.image
                        ? 'http://localhost:3000/uploads/recipes/' +
                          recipe.image
                        : 'public/images/spageti.png'
                    }
                  />
                </Link>
                <div className="mt-4 w-full ml-2">
                  <h3 className="text-lg tracking-widest text-gray-500 font-bold">
                    {recipe.title}
                  </h3>
                  <h2 className="title-font text-gray-500 font-medium">
                    {recipe.body}
                  </h2>

                  <p className="from-neutral-400 text-sm ">{ago(new Date())}</p>
                  <Rate />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        {recipes.length > 4 && (
          <RCPaginate
            items={recipesFiltered}
            itemsPerPage={4}
            setter={setRecipesDisplayed}
          />
        )}
      </div>
    </div>
  )
}

export default DetailsComponents
