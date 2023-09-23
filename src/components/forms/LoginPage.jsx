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
          <h1>Add New Recipe</h1>
        </div>
        <form className="w-full space-y-3">
          <div>
            <input
              ref={fileInputRef}
              type="file"
              className="w-full hidden"
              onChange={handleFileSelect}
            />
          </div>
          <div>
            <input
              ref={fileInputRef}
              type="file"
              className="w-full hidden"
              onChange={handleFileSelect}
            />
          </div>
          <div className="space-y-3">
            <button
              className="border bg-teal-500 text-white  pl-20 pr-20 pt-3 pb-2 hover:bg-teal-600 hover:text-white rounded w-full md:w-auto"
              onClick={handleSubmit(add)}
            >
              Login
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
