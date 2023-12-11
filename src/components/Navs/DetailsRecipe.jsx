import React, { useEffect, useState } from 'react'
import SearchForm from '../forms/SearchForm'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../config/config'
import Empty from './Empty'

const apiURL = BASE_URL + '/recipe'

const DetailsRecipe = () => {
  const [data, setData] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${apiURL}/${id}`)
      setData(response.data)
    }
    fetchData()
  }, [id])

  if (!data) {
    return <Empty />
  }

  return (
    <div className="flex justify-center ">
      <div className=" bg-white mx-4  md:mx-0 rounded-xl h-auto p-6 ">
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-3 lg:col-span-1">
            <div className="col-span-3 ">
              <img
                className=" w-full rounded-t-lg hover:opacity-75 "
                src={
                  data.image
                    ? 'http://localhost:3000/uploads/recipes/' + data.image
                    : '/images/spageti.png'
                }
                alt=""
              />
              <p className="text-center font-bold text-3xl "> {data.title}</p>
            </div>
          </div>

          <div className="col-span-3 lg:col-span-2 grid  grid-cols-2 gap-4 auto-rows-fr w-full md:grid-cols-2 ">
            <div className="p-4 col-span-2 md:col-span-1">
              <h1 className="text-2xl uppercase"> ingredients</h1>

              <section className="md:grid-cols-2 lg:col-span-3">
                <div className="">
                  <div className="grid grid-cols-2 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                    <div>
                      <img
                        className="object-cover w-full h-28 rounded-t lg:w-64 hover:opacity-75"
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
                        className="object-cover w-full h-28 rounded-t lg:w-64 hover:opacity-75"
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
                        className="object-cover w-full h-28 rounded-t lg:w-64 hover:opacity-75"
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
                        className="object-cover w-full h-28 rounded-t lg:w-64 hover:opacity-75"
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
                        className="object-cover w-full h-28 rounded-t lg:w-64 hover:opacity-75"
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
                        className="object-cover w-full h-28 rounded-t lg:w-64 hover:opacity-75"
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

            <div className="p-4 col-span-2 md:col-span-1 bg-white  rounded">
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
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Autem exercitationem porro fuga asperiores aperiam nemo
                      aspernatur fugit facere voluptatum sint itaque, corrupti
                      dolorem obcaecati quam repudiandae? Dolore debitis quidem
                      quae.
                    </p>
                  </li>
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-500 text-white hover:bg-green-700  rounded-full -left-4 ring-4 ring-white dark:ring-gray-300">
                      2
                    </span>
                    <h3 className="font-medium leading-tight">Step</h3>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Autem exercitationem porro fuga asperiores aperiam nemo
                      aspernatur fugit facere voluptatum sint itaque, corrupti
                      dolorem obcaecati quam repudiandae? Dolore debitis quidem
                      quae.
                    </p>
                  </li>
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-500 text-white hover:bg-green-700  rounded-full -left-4 ring-4 ring-white dark:ring-gray-300">
                      3
                    </span>
                    <h3 className="font-medium leading-tight">Step 3</h3>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Autem exercitationem porro fuga asperiores aperiam nemo
                      aspernatur fugit facere voluptatum sint itaque, corrupti
                      dolorem obcaecati quam repudiandae? Dolore debitis quidem
                      quae.
                    </p>
                  </li>
                  <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-500 text-white hover:bg-green-700  rounded-full -left-4 ring-4 ring-white dark:ring-gray-300">
                      n
                    </span>
                    <h3 className="font-medium leading-tight">Step n</h3>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Autem exercitationem porro fuga asperiores aperiam nemo
                      aspernatur fugit facere voluptatum sint itaque, corrupti
                      dolorem obcaecati quam repudiandae? Dolore debitis quidem
                      quae.
                    </p>
                  </li>
                </ol>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsRecipe
