import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { http } from '../../services/http/http'
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Add_New_Recipe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, submitCount },
    reset,
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
      duration: '',
    },
  })
  const fileInputRef = useRef()
  const [image, setImage] = useState()
  const [pictureUrl, setPictureUrl] = useState()
  const openFileDialog = (event) => {
    fileInputRef.current.click()
  }

  const handleFileSelect = (event) => {
    setImage(event.target.files[0])
    console.log({ image })
    setPictureUrl(URL.createObjectURL(event.target.files[0]))
    const [message, setMessage] = useState('')
  }

  const addRecipes = async (item) => {
    const data = new FormData()
    const keys = Object.keys(item)
    data.append('picture', image)
    keys.forEach((key) => data.append(key, item[key]))

    console.log(image)
    const result = await http.upload({
      method: 'post',
      url: 'recipe',
      data,
    })
    if (!result.isError) {
      reset()
      setPictureUrl()
      Swal.fire({
        title: 'error!',
        icon: 'error',
        title: 'wrong! please try',
        confirmButtonText: 'Cool',
      })
    }
    Swal.fire({
      title: 'Success!',
      icon: 'success',
      title: 'Successfuly add ',
      timer: 1000,

      showCancelButton: false,
    })
    console.log(result)
  }
  return (
    <div className="flex justify-center">
      <div className=" bg-white mx-4 md:mx-0 w-full md:w-2/3 lg:w-1/3 rounded-xl h-auto p-6">
        <div className="text-2xl">
          <h1>Add New Recipe</h1>
        </div>
        <form className="w-full space-y-3">
          <div className="flex justify-center w-full">
            <div
              className={
                'bg-gray-100  w-full h-52 flex items-center justify-center relative z-0 group' +
                (pictureUrl ? '' : ' p-3')
              }
            >
              {!pictureUrl && (
                <div
                  className="w-6 h-6  hover:bg-teal-700 hover:text-white rounded  text-black  "
                  onClick={openFileDialog}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                    />
                  </svg>
                </div>
              )}
              {pictureUrl && (
                <>
                  <img src={pictureUrl} className="w-full h-full z-10" />
                  <div className="absolute top-0 left-0 right-0 bottom-0 items-center justify-center z-30 hidden group-hover:flex">
                    <div
                      className="px-2 text-sm py-1 rounded-full cursor-pointer bg-teal-700 text-white opacity-100"
                      onClick={openFileDialog}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 right-0 bottom-0 z-20 bg-black opacity-60 hidden group-hover:block"></div>
                </>
              )}

              <input
                ref={fileInputRef}
                type="file"
                className="w-full hidden"
                onChange={handleFileSelect}
              />

              {submitCount > 0 && !image && (
                <span className="text-red-700 ">
                  Select a picture for the food please!
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <input
              {...register('title', {
                required: 'Enter a Title for the food please!',
              })}
              placeholder="Title"
              className="border p-3 font-bold col-span-3 md:col-span-2"
            />

            <input
              {...register('duration', {
                required: 'Enter a Time ',
              })}
              placeholder="duration"
              className="border p-3 col-span-3 md:col-span-1"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {/* //todo Errors Display pleace */}
            <p>
              {errors.title && (
                <span className="text-red-700 col-span-1 md:col-span-2 ">
                  {errors.title.message}
                </span>
              )}
            </p>
            <p className="col-span-1 md:col-span-2 text-right ml-5">
              {errors.duration && (
                <span className="text-red-700  ">
                  {errors.duration.message}
                </span>
              )}
            </p>
          </div>
          <textarea
            {...register('description', {
              required: 'Enter Descrption for the food please!',
            })}
            className="border w-full p-3"
            rows={3}
            placeholder="Description"
          />
          {errors.descrption && (
            <span className="text-red-700  ">{errors.description.message}</span>
          )}

          <div className="space-y-3">
            <button
              className="border bg-teal-500 text-white  pl-20 pr-20 pt-3 pb-2 hover:bg-teal-600 hover:text-white rounded w-full md:w-auto"
              onClick={handleSubmit(addRecipes)}
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

export default Add_New_Recipe
