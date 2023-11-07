import React from 'react'
import { useForm } from 'react-hook-form'

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
    <div>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form action="https://formbold.com/s/FORM_ID" method="POST">
            <div className="mb-5">
              <input
                type="text"
                {...register('first_name', {
                  required: {
                    value: true,
                    message: 'Please Enter Your Namw!',
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

            <div>
              <button
                className="hover:shadow-form rounded-md bg-teal-600 py-3 px-8 text-base font-semibold text-white outline-none"
                onClick={handleSubmit(handleRegister)}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewAcount
