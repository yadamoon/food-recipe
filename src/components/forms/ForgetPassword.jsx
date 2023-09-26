import React from 'react'
import { useForm } from 'react-hook-form'

export default function ForgetPassword() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm()

  return (
    <>
      <div className="flex justify-center">
        <div className=" bg-white mx-4 md:mx-0 w-full md:w-2/3 lg:w-1/3 rounded-xl h-auto p-6">
          <div className="text-2xl">
            <h1>Forget password</h1>
          </div>
          <form className="w-full space-y-3">
            <div className="grid grid-cols-1 gap-2">
              <input
                {...register('email', {
                  required: ' please Enter your Email',
                })}
                placeholder="Email"
                className="border p-3 col-span-1 md:col-span-1 "
              />
              {errors.email && (
                <span className="text-red-700 col-span-1 ">
                  {errors.email.message}
                </span>
              )}
              <input
                {...register('newpassword', {
                  required: 'Enter new Password',
                })}
                placeholder="New Password "
                className="border p-3 col-span-3 md:col-span-1 "
              />
              {errors.password && (
                <span className="text-red-700 col-span-1">
                  {errors.password.message}
                </span>
              )}
              <input
                {...register('confiremPassword', {
                  required: 'Password and Confirm Password Field do not match ',
                })}
                placeholder="confirme password "
                className="border p-3 col-span-3 md:col-span-1 "
              />
              {errors.confiremPassword && (
                <span className="text-red-700 col-span-1  ">
                  {errors.confiremPassword.message}
                </span>
              )}
              <input
                {...register('EmailSMS', {
                  required: ' plese enter code  ',
                })}
                placeholder="Code "
                className="border p-3 col-span-3 md:col-span-1 "
              />
              {errors.confiremPassword && (
                <span className="text-red-700 col-span-1  ">
                  {errors.confiremPassword.message}
                </span>
              )}
            </div>

            <div className=" grid grid-cols-2 gap-3space-y-3">
              <button className="border bg-red-500 text-white  pl-20 pr-20 pt-3 pb-2 hover:bg-red-600 hover:text-white rounded w-full md:w-auto">
                Back
              </button>
              <button className="border bg-teal-500 text-white  pl-20 pr-20 pt-3 pb-2 hover:bg-teal-600 hover:text-white rounded w-full md:w-auto">
                Done
              </button>
            </div>
            <br />
            <br />
          </form>
        </div>
      </div>
    </>
  )
}
