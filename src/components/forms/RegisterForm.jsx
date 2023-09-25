import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import UseFormState from './UseStateForm'
import { Link } from 'react-router-dom'

import { http } from './../../services/http/http'

export default function RegisterForm() {
  const [newRecipes, setNewRecipes] = useState([])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const addRecipes = async (title, description, ingridunt) => {
    const result = await http.request({
      method: 'post',
      url: 'recipe',
      data: { title, description, ingridunt },
    })
  }
  return (
    <div className="flex justify-center">
      <div className=" bg-white mx-4 md:mx-0 w-full md:w-2/3 lg:w-1/3 rounded-xl h-auto p-6">
        <div className="text-2xl">
          <h1>Add New Recipe</h1>
        </div>
        <form className="w-full space-y-3">
          {/* <div className="space-y-2">
            <input
              ref={fileInputRef}
              type="file"
              className="w-full hidden"
              onChange={handleFileSelect}
            />

            <div
              className="flex space-x-2 items-center bg-gray-200 p-3 rounded cursor-pointer hover:opacity-75"
              onClick={openFileDialog}
            >
              <div className="h-4 w-4 border rotate-45 border-gray-800"></div>
              <div>Select food picture</div>
            </div>
            {submitCount > 0 && !picture && (
              <span className="text-red-700 ">
                Select a picture for the food please!
              </span>
            )}
          </div> */}
          <div className="grid grid-cols-2 gap-2">
            <input
              {...register('username', {
                required: 'Enter a Title for the food please!',
              })}
              placeholder="userName"
              className="border p-3 fcol-span-3 md:col-span-2 uppercase"
            />

            <input
              {...register('firstName', {
                required: 'Enter a Time ',
              })}
              placeholder="first Name"
              className="border p-3 col-span-3 md:col-span-1 uppercase"
            />
            <input
              {...register('lastName', {
                required: 'Enter a Time ',
              })}
              placeholder="last name "
              className="border p-3 col-span-3 md:col-span-1 uppercase"
            />
            <input
              {...register('password', {
                required: 'Enter a Time ',
              })}
              placeholder="password "
              className="border p-3 col-span-3 md:col-span-1 uppercase"
            />
            <input
              {...register('confiremPassword', {
                required: 'Enter a Time ',
              })}
              placeholder="confirme password "
              className="border p-3 col-span-3 md:col-span-1 uppercase"
            />
          </div>

          <div className=" grid grid-cols-2 gap-3space-y-3">
            <button className="border bg-red-500 text-white  pl-20 pr-20 pt-3 pb-2 hover:bg-red-600 hover:text-white rounded w-full md:w-auto">
              Cancel
            </button>
            <button className="border bg-teal-500 text-white  pl-20 pr-20 pt-3 pb-2 hover:bg-teal-600 hover:text-white rounded w-full md:w-auto">
              Register
            </button>
          </div>
          <br />
          <br />
        </form>
      </div>

      {/* //!? from comonents shop */}
      {/* <!-- component --> */}

      {/* {} */}
    </div>
  )
}
