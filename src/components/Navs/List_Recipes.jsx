import React, { useState, useEffect } from 'react'
import DetailsRecipe from './DetailsRecipe'
import { Route, Router, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SearchForm from '../forms/SearchForm'
import ago from 's-ago'
import { BASE_URL } from '../../config/config'

const apiURL = BASE_URL + '/recipe'

function DetailsComponents() {
  const [recipes, setRecipe] = useState([])
  // const [currentPage, setCurrentPage] = useState(0)
  // const [totalPages, setTotalPages] = useState(0)
  const navigate = useNavigate()

  // const itemsPerPage = 12

  useEffect(() => {
    async function getRecipes() {
      const result = await axios(apiURL)
      setRecipe(result.data)

      console.log(result.data)
    }
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
          {recipes.map((recipe, index) => (
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
      <div className="flex justify-center space-y-2">
        <Pagination />
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
