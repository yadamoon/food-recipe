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
  const add = () => {
    console.log('hello new user')
  }
  return (
    <div className="flex justify-center">
      <div className=" bg-white mx-4 md:mx-0 w-full md:w-2/3 lg:w-1/3 rounded-xl h-auto p-6">
        <div className="text-2xl">
          <h1>Add New Recipe</h1>
        </div>
        <form className="w-full space-y-3">
          <div className="grid grid-cols-1 gap-2">
            <input
              {...register('username', {
                required: 'Enter a Title for the food please!',
              })}
              placeholder="userName"
              className="border p-3 col-span-1 md:col-span-1 uppercase"
            />
            {errors.username && (
              <span className="text-red-700 col-span-1 ">
                {errors.username.message}
              </span>
            )}

            <input
              {...register('firstName', {
                required: 'Enter First Name ',
              })}
              placeholder="first Name"
              className="border p-3 col-span-1 md:col-span-1 uppercase"
            />
            {errors.firstName && (
              <span className="text-red-700 col-span-1 ">
                {errors.firstName.message}
              </span>
            )}
            <input
              {...register('lastName', {
                required: 'Enter Last Name ',
              })}
              placeholder="last name "
              className="border p-3 col-span-3 md:col-span-1 uppercase"
            />
            {errors.lastName && (
              <span className="text-red-700 col-span-1  ">
                {errors.lastName.message}
              </span>
            )}
            <input
              {...register('password', {
                required: 'Enter Password',
              })}
              placeholder="password "
              className="border p-3 col-span-3 md:col-span-1 uppercase"
            />
            {errors.password && (
              <span className="text-red-700 col-span-1">
                {errors.password.message}
              </span>
            )}
            <input
              {...register('confiremPassword', {
                required: 'Password and Confirm Password Field do not match ',
              })}
              placeholder="confirme password "
              className="border p-3 col-span-3 md:col-span-1 uppercase"
            />
            {errors.confiremPassword && (
              <span className="text-red-700 col-span-1  ">
                {errors.confiremPassword.message}
              </span>
            )}
          </div>

          <div className=" grid grid-cols-2 gap-3space-y-3">
            <button className="border bg-red-500 text-white  pl-20 pr-20 pt-3 pb-2 hover:bg-red-600 hover:text-white rounded w-full md:w-auto">
              Cancel
            </button>
            <button
              className="border bg-teal-500 text-white  pl-20 pr-20 pt-3 pb-2 hover:bg-teal-600 hover:text-white rounded w-full md:w-auto"
              onClick={handleSubmit(add)}
            >
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
