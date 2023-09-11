import React, { useState, useEffect } from 'react'
import DetailsRecipe from './DetailsRecipe'
import { Route, Router } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SearchForm from '../forms/SearchForm'
import ago from 's-ago'

const apiURL = 'http://localhost:3000/api/v1/recipe'
function DetailsComponents() {
  const [recipes, setRecipe] = useState([])

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
                    <a className="relative block h-48 w-full overflow-hidden rounded-t">
                      <img
                        alt="ecommerce"
                        className="block h-full w-full object-cover object-center cursor-pointer"
                        src="https://dummyimage.com/421x261"
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-xs tracking-widest text-gray-500">
                        {recipe.title}
                      </h3>
                      <h2 className="title-font text-lg font-medium text-gray-900">
                        {recipe.body}
                      </h2>

                      <p className="mt-1">{ago(new Date())}</p>
                      <div className="flex  grid-cols-2 gap-4">
                        <Link
                          to="/DetailsRecipe"
                          className="bg-yellow-300 rounded-lg m-2 shadow text-center text-white text-base font-semibold w-full py-3 mt-9 uppercase"
                        >
                          Ingrident
                        </Link>
                        <br />
                        <br />
                        <button
                          className="bg-teal-700 rounded-lg m-2 shadow text-center text-white text-base font-semibold w-full py-3 mt-9 uppercase"
                          onClick={seeMore}
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}

          <div></div>
        </div>{' '}
      </div>
    </div>
  )
}

export default DetailsComponents
