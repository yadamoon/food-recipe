import React from 'react'
import { useForm } from 'react-hook-form'

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const handleClick = ({ name, phone, email, message }) => {
    console.log(`${name},${phone},${email},${message}`)
  }
  return (
    <div className="w-full h-screen">
      <div className=" h-96"></div>
      <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div className="w-fullrounded p-8 sm:p-12 -mt-72">
          <p className="text-3xl font-bold leading-7 text-center text-black">
            Contact me
          </p>
          <form action="">
            <div className="md:flex items-center mt-12">
              <div className="w-full md:w-1/2 flex flex-col">
                <label className="font-semibold leading-none text-gray-600">
                  Name
                </label>

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
                  placeholder=" Name"
                  className=" p-3 mt-4 border  rounded"
                />
                {errors.name && (
                  <span className="text-red-700 col-span-1 ">
                    {errors.name.message}
                  </span>
                )}
              </div>
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
                  placeholder="Phone Number"
                  className=" p-3 mt-4 border  rounded"
                />
                {errors.phone && (
                  <span className="text-red-700 col-span-1 ">
                    {errors.phone.message}
                  </span>
                )}
              </div>
            </div>

            <div className="md:flex items-center mt-8">
              <div className="w-full flex flex-col">
                <label className="font-semibold leading-none text-gray-600">
                  Email
                </label>

                <input
                  {...register('email', {
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
                    pattern: {
                      value: /[@]/,
                      message: 'Enter at least one special character',
                    },
                  })}
                  placeholder=" Email"
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
              <div className="w-full flex flex-col mt-8">
                <label className="font-semibold leading-none text-gray-600">
                  Message
                </label>
                <textarea
                  type="text"
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
                  placeholder="Phone Number"
                  className="h-40 text-base  focus:teal-blue-700 mt-4  border rounded"
                />
                {errors.phone && (
                  <span className="text-red-700 col-span-1 ">
                    {errors.phone.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center justify-center w-full">
              <button
                onClick={handleSubmit(handleClick)}
                className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-teal-700 rounded hover:bg-teal-600 focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 focus:outline-none"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
