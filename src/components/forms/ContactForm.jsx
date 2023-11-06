import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const handleClick = ({ name, phone, email, message }) => {
    console.log(`${name},${phone},${email},${message}`)

    reset()
  }

  return (
    <div className="w-full h-screen  pb-[120vh] lg:pb-[80vh]">
      <div className=" h-96"></div>
      <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12 ">
        <div className="w-fullrounded p-8 sm:p-12 -mt-72 border  shadow rounded">
          <p className="text-3xl font-bold leading-7 text-center text-black">
            CONTACT
          </p>
          <form action=" ">
            <div className="md:flex items-center mt-12 ">
              <div className="w-full md:w-1/2 flex flex-col">
                <label className="font-semibold leading-none text-gray-600">
                  Name
                </label>
                {/* name */}
                <input
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'Please Enter Your Name!',
                    },
                    minLength: {
                      value: 2,
                      message: 'min length are at least 6',
                    },
                    maxLength: {
                      value: 20,
                      message: 'max length are at least 32',
                    },
                  })}
                  className=" p-3 mt-4 border  rounded"
                />
                {errors.name && (
                  <span className="text-red-700 col-span-1 ">
                    {errors.name.message}
                  </span>
                )}
              </div>
              {/* phone */}
              <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="font-semibold leading-none text-gray-600">
                  Phone
                </label>
                <input
                  {...register('phone', {
                    required: {
                      value: true,
                      message: 'Please Enter Your Phone Number!',
                    },
                    minLength: {
                      value: 6,
                      message: 'min length are at least 6',
                    },
                    maxLength: {
                      value: 32,
                      message: 'max length are at least 32',
                    },
                  })}
                  className=" p-3 mt-4 border  rounded"
                />
                {errors.phone && (
                  <span className="text-red-700 col-span-1 ">
                    {errors.phone.message}
                  </span>
                )}
              </div>
            </div>

            {/* email */}
            <div className="md:flex items-center mt-8">
              <div className="w-full flex flex-col">
                <label className="font-semibold leading-none text-gray-600">
                  Email
                </label>

                <input
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'Please Enter Your correct Email!',
                    },
                    minLength: {
                      value: 6,
                      message: 'min length are at least 6',
                    },
                    maxLength: {
                      value: 32,
                      message: 'max length are at least 32',
                    },
                    pattern: {
                      value: /[@]/,
                      message: 'Enter at least one special character',
                    },
                  })}
                  className="leading-none  p-3  mt-4 border  rounded"
                />
                {errors.email && (
                  <span className="text-red-700 col-span-1 ">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>
            <div>
              {/* message */}
              <div className="w-full flex flex-col mt-8 sm:mt-0 max-h-full">
                <label className="font-semibold leading-none text-gray-600">
                  Message
                </label>
                <textarea
                  type="text"
                  {...register('message', {
                    required: {
                      value: true,
                      message: 'Please Enter Your some message!',
                    },
                    minLength: {
                      value: 6,
                      message: 'min length are at least 6',
                    },
                    maxLength: {
                      value: 32,
                      message: 'max length are at least 32',
                    },
                  })}
                  className="h-40 text-base  focus:teal-blue-700 mt-4  border rounded"
                />
                {errors.message && (
                  <span className="text-red-700 col-span-1 ">
                    {errors.message.message}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-center w-full">
                {/* button to save */}
                <button
                  onClick={handleSubmit(handleClick)}
                  className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-teal-700 rounded hover:bg-teal-600 focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 focus:outline-none"
                >
                  Send message
                </button>
              </div>

              {/* <div className="space-y-6"></div> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
