import React from 'react'
import { useForm } from 'react-hook-form'

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div className="flex justify-center py-4">
      <div className="w-1/3 items-center justify-center min-h-full bg-white p-4 rounded">
        <h1 className="text-4xl text-center font-bold">Register New Item</h1>
        <br />
        <form onSubmit={handleSubmit(onSubmit)} className="">
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
            {...register('content', {
              required: 'content are empty please enter',
            })}
            placeholder="enter....."
            className="p-4 w-full border rounded bg-gray-100"
          />
          <br />
          {errors.content && (
            <span className="text-red-300">{errors.content.message} </span>
          )}
          <br />
          <br />
          <label htmlFor="img" className="w-full flex space-x-2">
            Set Photo :
            <input type="file" className="bg-gray-100 flex-auto" />
          </label>
          <br />
          <br />
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {' '}
              back{' '}
            </a>
            <a
              href="#"
              class="text-sm font-semibold text-white border rounded p-2 bg-teal-600"
            >
              Save <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
