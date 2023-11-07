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
    <div className="bg-white mx-10 rounded">
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <h1 className="text-center justify-center font-thin text-3xl space-y-3">
            Create New Account
          </h1>
          <br />
          <form action="https://formbold.com/s/FORM_ID" method="POST">
            <div className="mb-5">
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
              <span>
                i have account <Link to="/LoginPage">sign in</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewAcount
