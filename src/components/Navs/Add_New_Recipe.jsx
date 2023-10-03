import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { http } from '../../services/http/http'

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
    }
    console.log(result)
  }
  return (
    <div className="flex justify-center">
      <div className=" bg-white mx-4 md:mx-0 w-full md:w-2/3 lg:w-1/3 rounded-xl h-auto p-6">
        <div className="text-2xl">
          <h1>Add New Recipe</h1>
        </div>
        <form className="w-full space-y-3">
          <div className="space-y-2">
            <div className="flex justify-center">
              <div></div>
              <div
                className={
                  'bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center relative' +
                  (pictureUrl ? '' : ' p-3')
                }
                onClick={openFileDialog}
              >
                {!pictureUrl && (
                  <i className="fa fa-user-o" style={{ fontSize: 32 }}></i>
                )}
                {pictureUrl && (
                  <img
                    src={pictureUrl}
                    className="w-full h-full rounded-full"
                  />
                )}
                <div
                  className="absolute right-0 bottom-0 rounded-full bg-blue-1 text-white w-8 h-8 flex items-center justify-center cursor-pointer hover:opacity-75"
                  onClick={openFileDialog}
                >
                  {' '}
                  <i className="fa fa-pencil"></i>
                </div>
              </div>
            </div>

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
          <div className="grid grid-cols-3 gap-2">
            <input
              {...register('title', {
                required: 'Enter a Title for the food please!',
              })}
              placeholder="Titel"
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
