import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import UseFormState from './UseStateForm'
import { BASE_URL } from '../../config/config'

const apiURL = BASE_URL + '/recipe'

function RegisterForm() {
  const [newRecipes, setNewRecipes] = useState([])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const addRecipes = async (title, description, ingridunt) => {
    // const obj = { title, description , ingridunt }
    // const { data: recipes } = await axios.post(apiURL, obj)
    // setNewRecipes(recipes)

    axios
      .post(apiURL, title, description, ingridunt)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
    console.log(title, description, ingridunt)
  }
  return (
    <div className=" flex justify-center py-6">
      <div className="flex flex-wrap w-1/3 items-center justify-center min-h-full bg-white p-4 rounded">
        <h1 className="flex flex-wrap text-2xl text-center font-bold">
          Register new Recipes
        </h1>
        <br />
        <form
          className="space-y-2 flex flex-wrap"
          onSubmit={handleSubmit(addRecipes)}
        >
          <div class="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
            <input
              {...register('title', { required: 'Enter Title of recipe' })}
              class="peer block w-full border-0 p-2 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
              placeholder="title"
            />
            <label
              html="title"
              class="block transform text-xs font-bold  text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0"
            >
              Title
            </label>
          </div>
          {errors.title && (
            <span className="text-red-300 font-extrabold">
              {errors.title.message}
            </span>
          )}

          <div class="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
            <input
              {...register('description', {
                required: 'Enter description of recipes',
              })}
              class="peer block w-full border-0 p-2 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
              placeholder="Description"
            />
            <label
              html="Description"
              class="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0"
            >
              Description
            </label>
          </div>
          {errors.description && (
            <span className="text-red-300 font-extrabold">
              {errors.description.message}{' '}
            </span>
          )}

          <div class="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
            <input
              {...register('ingridunt', {
                required: 'Enter Ingridunts and steps ',
              })}
              class="peer block w-full border-0 p-2 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
              placeholder="Ingridunts"
            />
            <label
              html="Ingridunts"
              class="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0"
            >
              Ingridunts
            </label>
          </div>
          {errors.ingridunt && (
            <span className="text-red-300 font-extrabold">
              {errors.ingridunt.message}{' '}
            </span>
          )}

          <div class="mt-10 flex items-center justify-center gap-x-6">
            <button class="text-sm font-semibold text-white border rounded p-2 pl-12 pr-12 bg-teal-600">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
