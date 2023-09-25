import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function LoginPage() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm()
  const isValidate = async (email, password) => {
    console.log(`${email} , ${password}`)
  }
  return (
    <div className="flex justify-center">
      <div className=" bg-white mx-4 md:mx-0 w-full md:w-2/3 lg:w-1/3 rounded-xl h-auto p-6">
        <div className="text-2xl">
          <h1>LOGIN</h1>
        </div>
        <form className="w-full space-y-3">
          <div className="grid grid-cols-1 gap-2">
            <input
              {...register('username', {
                required: 'Enter a Title for the food please!',
              })}
              placeholder="username"
              className="border p-3 font-bold col-span-3 md:col-span-2"
            />
            {errors.username && (
              <span className="text-red-700 col-span-1 md:col-span-2 ">
                {errors.username.message}
              </span>
            )}
            <input
              {...register('password', {
                required: 'Enter a Title for the food please!',
              })}
              placeholder="password"
              className="border p-3 font-bold col-span-3 md:col-span-2"
            />
            {errors.password && (
              <span className="text-red-700 col-span-1 md:col-span-2 ">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="space-y-3 text-center">
            <button
              className="border bg-teal-500 text-white  pl-20 pr-20 pt-3 pb-2 hover:bg-teal-600 hover:text-white rounded w-full md:w-auto "
              onClick={handleSubmit(isValidate)}
            >
              Add
            </button>
          </div>
          <br />
          <br />
        </form>
      </div>
    </div>
  )
}

export default LoginPage
