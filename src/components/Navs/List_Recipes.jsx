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
  const navigate = useNavigate()

  useEffect(() => {
    async function getRecipes() {
      const result = await axios(apiURL)
      setRecipe(result.data)

      console.log(result.data)
    }
    getRecipes()
  }, [])
  const seeMore = () => {
    setShow(!show)
  }
  return (
    <div>
      <h1 className="text-5xl text-center font-extrabold text-teal-800">
        Our Food Recipes
      </h1>

      <SearchForm />
      <div className="w-full  flex items-center justify-center">
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 sm:grid-cols-1 p-5">
          {recipes.map((recipe, index) => (
            <section
              className=" h-5/5 body-font bg-white text-gray-600 rounded-t"
              key={recipe.id}
            >
              <div className="container grid grid-cols">
                <div className=" flex flex-wrap">
                  <div className="">
                    <Link
                      to={'/recipes/' + recipe._id}
                      className="relative block h-48 w-full overflow-hidden rounded-t"
                      // onClick={<DetailsComponents id={recipe._id} />}
                      // onClick={() => navigate('recipes/' + recipe._id)}
                    >
                      <img
                        alt="ecommerce"
                        className="block h-full w-full object-cover object-center cursor-pointer"
                        src="https://dummyimage.com/421x261"
                      />
                    </Link>
                    <div className="mt-4">
                      <h3 className="text-lg tracking-widest text-gray-500 font-bold">
                        {recipe.title}
                      </h3>
                      <h2 className="title-font text-2sm font-medium text-gray-900">
                        {recipe.body}
                      </h2>

                      <p className="mt-1">{ago(new Date())}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
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
              class="bg-white border border-gray-300 text-gray-500  hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>
          </li>
          <li>
            <a
              href="#"
              class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              class="bg-blue-50 border border-gray-300 text-blue-600 hover:bg-blue-100 hover:text-blue-700  py-2 px-3 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
