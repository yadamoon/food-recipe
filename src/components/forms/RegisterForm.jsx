import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const apiURL = ''

function RegisterForm() {
  const [newRecipes, setNewRecipes] = useState([])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const addRecipes = async (titel, descripition, image) => {
    const obj = { titel, descripition, image }
    const { data: recipes } = await axios.post(apiURL, obj)
    setNewRecipes(recipes)
  }
  return (
    <div className="flex justify-center py-6">
      <div className="w-1/3 items-center justify-center min-h-full bg-white p-4 rounded">
        <h1 className="text-4xl text-center font-bold">Register New Item</h1>
        <br />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('titel', { required: 'enter Titel' })}
            className="p-4 border w-full rounded bg-gray-100"
            placeholder="Enter Title"
          />
          <br />
          {errors.titel && (
            <span className="text-red-400">{errors.titel.message}</span>
          )}
          <br />
          <textarea
            {...register('descripition', {
              required: 'descripition are empty please enter',
            })}
            placeholder="enter....."
            className="p-4 w-full border rounded bg-gray-100"
          />
          <br />
          {errors.descripition && (
            <span className="text-red-300">{errors.descripition.message} </span>
          )}
          <br />
          <br />
          <label htmlFor="img" className="w-full flex space-x-2">
            Set Photo :
            <input
              type="file"
              ref={register('image', { required: 'Enter IMG' })}
              className="bg-gray-100 flex-auto"
            />
          </label>
          <br />
          <br />
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <button
              href="#"
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              back
            </button>
            <button
              class="text-sm font-semibold text-white border rounded p-2 bg-teal-600"
              onClick={handleSubmit(addRecipes)}
            >
              Save <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
