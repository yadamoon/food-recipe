import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import UseFormState from './UseStateForm'
import { Link } from 'react-router-dom'

import { http } from './../../services/http/http'

export default function RegisterForm() {
  const {
    register,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confiremPassword: '',
    },
  })
  const addNewUser = async ({ username, firstName, lastName, password }) => {
    const result = await http.request({
      method: 'post',
      url: 'users',
      data: { username, firstName, lastName, password },
    })
    if (!result.isError) {
      reset()
    }
    console.log(result)
  }

  return (
    <div className="flex justify-center">
      <div className=" bg-white mx-4 md:mx-0 w-full md:w-2/3 lg:w-1/3 rounded-xl h-auto p-6">
        <div className="text-2xl">
          <h1 className="font-bold">Create New Account</h1>
        </div>
        <form className="w-full space-y-3">
          <div className="grid grid-cols-1 gap-2">
            <input
              {...register('username', {
                required: 'Enter a Title for the food please!',
              })}
              placeholder="USERNAME"
              className="border p-3 col-span-1 md:col-span-1 "
            />
            {errors.username && (
              <span className="text-red-700 col-span-1 ">
                {errors.username.message}
              </span>
            )}

            <input
              {...register('firstname', {
                required: 'Enter First Name ',
              })}
              placeholder="FIRSR NAME"
              className="border p-3 col-span-1 md:col-span-1 "
            />
            {errors.firstname && (
              <span className="text-red-700 col-span-1 ">
                {errors.firstname.message}
              </span>
            )}
            <input
              {...register('lastname', {
                required: 'Enter Last Name ',
              })}
              placeholder="LAST NAME "
              className="border p-3 col-span-3 md:col-span-1 "
            />
            {errors.lastname && (
              <span className="text-red-700 col-span-1  ">
                {errors.lastname.message}
              </span>
            )}

            <input
              {...register('email', {
                required: ' please Enter your Email',
              })}
              placeholder="EMAIL"
              className="border p-3 col-span-1 md:col-span-1 "
            />
            {errors.email && (
              <span className="text-red-700 col-span-1 ">
                {errors.email.message}
              </span>
            )}

            <input
              {...register('password', {
                required: 'Enter Password',
              })}
              placeholder="PASSWORD "
              className="border p-3 col-span-3 md:col-span-1 "
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
              placeholder="CONFIRME PASSWORD "
              className="border p-3 col-span-3 md:col-span-1 "
            />
            {errors.confiremPassword && (
              <span className="text-red-700 col-span-1  ">
                {errors.confiremPassword.message}
              </span>
            )}
          </div>

          <div className=" grid grid-cols-2 gap-3 space-y-3">
            <button className="border bg-teal-500 text-white 2 hover:bg-teal-600 hover:text-white rounded w-full md:w-auto">
              Cancel
            </button>
            <button
              className="border bg-teal-500 text-white  pl-20 pr-20 pt-3 pb-2 hover:bg-teal-600 hover:text-white rounded w-full md:w-auto"
              onClick={handleSubmit(addNewUser)}
            >
              Register
            </button>
          </div>
          <br />
          <br />
        </form>
      </div>
    </div>
  )
}
