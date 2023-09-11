import React, { useEffect, useState } from 'react'
import SearchForm from '../forms/SearchForm'
import axios from 'axios'

const apiURL = 'http://localhost:3000/api/v1/recipe'

const DetailsRecipe = () => {
  const [title, setTitle] = useState('')
  const [time, setTime] = useState('')
  const [ingridents, setIngridents] = useState('')
  const [instruction, setInstruction] = useState('')

  useEffect(() => {
    async function getRecipes() {
      const result = await axios(apiURL)
      setTitle([result.data])
      setIngridents(result.data)
      setTime(result.time)
      setInstruction(result.data)

      console.log(result.data)
    }
    getRecipes()
  }, [])

  return (
    <div className=" w-11/12 ml-20 rounded-xl">
      <br />
      <div className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 w-full ">
        <div className="p-4 bg-white flex items-center justify-center">
          <img
            className=" w-full rounded-t-lg md:rounded-l-lg"
            src="public/images/recipeIMG.jpg"
            alt=""
          />
        </div>
        <div className="p-4 bg-white rounded ">
          <div>
            <br />
            <b className="text-2xl ">
              {/* <span className="font-bold uppercase">{details.titel}</span> */}
            </b>
            <div
              className="m-8 p-8 grid  grid-cols-2 
                     grid-flow-row gap-4 auto-rows-fr w-full"
            >
              <div className="p-4 border ">
                <h1 className="text-2xl font-bold text-center uppercase">
                  {' '}
                  ingredients
                </h1>
                <hr />
                <section>
                  <div className="">
                    <div className="grid grid-cols-2 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                      <div>
                        <img
                          className="object-cover w-full h-28 rounded-t lg:w-64"
                          src="https://dummyimage.com/421x261"
                          alt=""
                        />

                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                          <h3 className="font-medium leading-tight uppercase">
                            Garlic
                          </h3>
                          <p className="text-sm">Step details here</p>
                        </div>
                      </div>

                      <div>
                        <img
                          className="object-cover w-full h-28 rounded-t lg:w-64"
                          src="https://dummyimage.com/421x261"
                          alt=""
                        />

                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                          <h3 className="font-medium leading-tight uppercase">
                            Olive oil
                          </h3>
                          <p className="text-sm">Step details here</p>
                        </div>
                      </div>

                      <div>
                        <img
                          className="object-cover w-full h-28 rounded-t lg:w-64"
                          src="https://dummyimage.com/421x261"
                          alt=""
                        />

                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                          <h3 className="font-medium leading-tight">
                            Black pepper
                          </h3>
                          <p className="text-sm">Step details here</p>
                        </div>
                      </div>

                      <div>
                        <img
                          className="object-cover w-full h-28 rounded-t lg:w-64"
                          src="https://dummyimage.com/421x261"
                          alt=""
                        />

                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                          <h3 className="font-medium leading-tight">
                            Parmesan cheese
                          </h3>
                          <p className="text-sm">Step details here</p>
                        </div>
                      </div>

                      <div>
                        <img
                          className="object-cover w-full h-28 rounded-t lg:w-64"
                          src="https://dummyimage.com/421x261"
                          alt=""
                        />

                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                          <h3 className="font-medium leading-tight">
                            Onion (optional)
                          </h3>
                          <p className="text-sm">Step details here</p>
                        </div>
                      </div>

                      <div>
                        <img
                          className="object-cover w-full h-28 rounded-t lg:w-64"
                          src="https://dummyimage.com/421x261"
                          alt=""
                        />

                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                          <h3 className="font-medium leading-tight">TOMATO</h3>
                          <p className="text-sm">Step details here</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="p-4 bg-white  rounded">
                <span className="uppercase text-2xl">Instraction</span>
                <br />
                <br />
                <div>
                  <ol className="relative text-gray-500 border-l border-gray-200 dark:border-gray-300 dark:text-gray-400">
                    <li className="mb-10 ml-6">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-green-500 text-white hover:bg-green-700 rounded-full -left-4 ring-4 ring-white dark:ring-gray-300 ">
                        1
                      </span>
                      <h3 className="font-medium leading-tight">Step</h3>
                      <p className="text-sm">Step details here</p>
                    </li>
                    <li className="mb-10 ml-6">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-green-500 text-white hover:bg-green-700  rounded-full -left-4 ring-4 ring-white dark:ring-gray-300">
                        2
                      </span>
                      <h3 className="font-medium leading-tight">Step</h3>
                      <p className="text-sm">Step details here</p>
                    </li>
                    <li className="mb-10 ml-6">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-green-500 text-white hover:bg-green-700  rounded-full -left-4 ring-4 ring-white dark:ring-gray-300">
                        3
                      </span>
                      <h3 className="font-medium leading-tight">Step 3</h3>
                      <p className="text-sm">Step details here</p>
                    </li>
                    <li className="ml-6">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-green-500 text-white hover:bg-green-700  rounded-full -left-4 ring-4 ring-white dark:ring-gray-300">
                        n
                      </span>
                      <h3 className="font-medium leading-tight">Step n</h3>
                      <p className="text-sm">Step details here</p>
                    </li>
                  </ol>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsRecipe
