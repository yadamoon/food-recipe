import React, { useState, useEffect } from 'react'
import DetailsRecipe from './DetailsRecipe'
import { Route, Router, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SearchForm from '../forms/SearchForm'
import ago from 's-ago'
import { http } from './../../services/http/http'
import ReactPaginate from 'react-paginate'

function RCPaginate({ items, itemsPerPage, setter }) {
  const [itemOffset, setItemOffset] = useState(0)
  const endOffset = itemOffset + itemsPerPage

  const currentItems = items.slice(itemOffset, endOffset)
  useEffect(() => {
    setter(currentItems)
  }, [itemOffset, endOffset])

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
        activeClassName=" text-white rounded-lg bg-gray-500"
        // pageClassName="bg-white py-1 px-2 text-sm rounded border text-gray-500  hover:text-gray-500 p-2  dark:text-gray-200 dark:hover:bg-gray-300 dark:hover:text-white"
        // pageLinkClassName=" py-1 px-1.5 text-sm rounded-lg border   dark:hover:bg-gray-400 hover:text-white"
        pageClassName=" py-1 px-1.5 text-sm rounded-lg border   dark:hover:bg-gray-400 hover:text-white"
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

  // const itemsPerPage = 12
  const getRecipes = async function () {
    const result = await http.request({ url: 'recipe' })
    setRecipe(result)

    console.log(result)
  }

  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <div>
      <h1 className="text-3xl text-center font-extrabold text-teal-800">
        Our Food Recipes
      </h1>

      <SearchForm />
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
                    src="public/images/spageti.png"
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        {/* <Pagination /> */}
        {recipes.length > 4 && (
          <RCPaginate
            items={recipes}
            itemsPerPage={4}
            setter={setRecipesDisplayed}
          />
        )}
      </div>
    </div>
  )
}

export default DetailsComponents

export function Pagination() {
  return (
    <div class="max-w-2xl mx-auto ">
      <nav>
        <ul class="inline-flex -space-x-px">
          <li>
            <a
              href="#"
              class="bg-white border border-gray-300 text-gray-500  hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3   dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>
          </li>
          <li>
            <a
              href="#"
              class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3   dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
