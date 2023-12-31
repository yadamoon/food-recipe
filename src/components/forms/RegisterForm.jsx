import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

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
                required: {
                  value: true,
                  message: 'Enter username!',
                },
                minLength: { value: 6, message: 'min length are at least 6' },
                maxLength: { value: 32, message: 'max length are at least 32' },
              })}
              placeholder="USERNAME"
              className="border p-3 col-span-1 md:col-span-1 lowercase"
            />
            {errors.username && (
              <span className="text-red-700 col-span-1 ">
                {errors.username.message}
              </span>
            )}

            <input
              {...register('firstname', {
                required: { value: true, message: 'Enter First Name ' },
                minLength: { value: 6, message: 'min length are at least 6' },
                maxLength: { value: 32, message: 'max length are at least 32' },
              })}
              placeholder="FIRSR NAME"
              className="border p-3 col-span-1 md:col-span-1 lowercase "
            />
            {errors.firstname && (
              <span className="text-red-700 col-span-1 ">
                {errors.firstname.message}
              </span>
            )}
            <input
              {...register('lastname', {
                required: { value: true, message: 'Enter Last Name ' },
                minLength: { value: 6, message: 'min length are at least 6' },
                maxLength: { value: 32, message: 'max length are at least 32' },
              })}
              placeholder="LAST NAME "
              className="border p-3 col-span-3 md:col-span-1 lowercase"
            />
            {errors.lastname && (
              <span className="text-red-700 col-span-1  ">
                {errors.lastname.message}
              </span>
            )}

            <input
              {...register('email', {
                required: {
                  value: true,
                  message: 'Enter Your  Email',
                },
                pattern: {
                  value: /[@]/,
                  message: 'Enter at least one special character',
                },
              })}
              placeholder="Email"
              className="border p-3 col-span-1 md:col-span-1 lowercase"
            />
            {errors.email && (
              <span className="text-red-700 col-span-1 ">
                {errors.email.message}
              </span>
            )}

            <input
              {...register('password', {
                required: {
                  value: true,
                  message: 'Enter Password',
                },
                minLength: {
                  value: 6,
                  message: 'min length are at least 6',
                },
                maxLength: {
                  value: 32,
                  message: 'Max length are at least 32',
                },
              })}
              placeholder="Password "
              className="border p-3 col-span-3 md:col-span-1 lowercase "
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
              className="border p-3 col-span-3 md:col-span-1 lowercase "
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
