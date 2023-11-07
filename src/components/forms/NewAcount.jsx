import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const NewAcount = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm()
  const handleRegister = ({ email, first_name, newPassword }) => {
    console.log(email, first_name, newPassword)
  }

  return (
    <div className="flex justify-center">
      <div className="px-16 bg-white pt-6 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:grid-cols-1">
        <div className="flex items-center justify-end">
          <div className="bg-white rounded-lg  p-8 space-y-8 col-span-1">
            <div>
              <div className="text-xl uppercase text-gray-600">
                Register to learn how to make some food!
              </div>
              <div className="text-[13px] text-gray-500">
                Fill in the form to register your self
              </div>
              <form action="" className="w-full">
                <div className="mb-5 ">
                  <input
                    type="text"
                    {...register('first_name', {
                      required: {
                        value: true,
                        message: 'Please Enter Your First Name!',
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
                    placeholder="First Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                  {errors.first_name && (
                    <span className="text-red-700 col-span-1 ">
                      {errors.first_name.message}
                    </span>
                  )}
                </div>
                <div className="mb-5">
                  <input
                    type="text"
                    {...register('last_name', {
                      required: {
                        value: true,
                        message: 'Please Enter Your Last Name!',
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
                    placeholder="Last Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280]  "
                  />
                  {errors.first_name && (
                    <span className="text-red-700 col-span-1 ">
                      {errors.first_name.message}
                    </span>
                  )}
                </div>
                <div className="mb-5">
                  <input
                    type="email"
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
                    placeholder="Enter your Email"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />

                  {errors.email && (
                    <span className="text-red-700 col-span-1 ">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="mb-5">
                  <input
                    type="text"
                    {...register('newpassword', {
                      required: {
                        value: true,
                        message: 'Please Enter New Password!',
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
                    placeholder="Enter New Password"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                  {errors.newpassword && (
                    <span className="text-red-700 col-span-1 ">
                      {errors.newpassword.message}
                    </span>
                  )}
                </div>
                <div className="mb-5">
                  <input
                    type="text"
                    {...register('confiremPassword', {
                      required: {
                        value: true,
                        message: 'Wrong!',
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
                    placeholder="Enter Confirme password"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                  {errors.confiremPassword && (
                    <span className="text-red-700 col-span-1 ">
                      {errors.confiremPassword.message}
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-6 justify-center">
                  <button
                    type="button"
                    className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    onClick={handleSubmit(handleRegister)}
                    class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-teal-700"
                  >
                    Done
                  </button>
                </div>
                <div className="text-center">
                  <span className="font-thin">
                    I have account
                    <Link to="/LoginPage" className="font-bold">
                      Login
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="justify-center col-span-1 ">
          <img
            src="public/images/test.png"
            alt="advert"
            width="300px"
            height={60}
            // className="text-center mx-36 pt-32 lg:mx-36 md:mx-24 sm:mx-0 sm:hidden"
          />
        </div>
      </div>
    </div>
  )
}

export default NewAcount
