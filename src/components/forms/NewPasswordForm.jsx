import React from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const NewPasswordForm = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm()

  const handleForgotPassword = ({ newPassworod, confiremPassword }) => {
    let timerInterval
    Swal.fire({
      title: 'please wait just a sec!',
      html: `${email}`,
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const timer = Swal.getPopup().querySelector('b')
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })

    console.log(newPassworod, confiremPassword)
  }
  return (
    <div>
      <div className="flex justify-center">
        <div className=" bg-white  md:mx-0 w-full md:w-2/3 lg:w-1/3 rounded-xl h-auto p-6">
          <form className="w-full space-y-3 pb-5">
            <div className="grid grid-cols-1 gap-3">
              <div className="w-full">
                {' '}
                <input
                  type="password"
                  {...register('newPassword', {
                    required: 'Enter new Password',
                  })}
                  placeholder="New Password "
                  className="border p-3 col-span-1 md:col-span-1 "
                />
                {errors.newPassworod && (
                  <span className="text-red-700 col-span-1">
                    {errors.newPassworod.message}
                  </span>
                )}
              </div>

              <div>
                <input
                  type="password"
                  {...register('confiremPassword', {
                    required:
                      'Password and Confirm Password Field do not match ',
                  })}
                  placeholder="confirme password "
                  className="border p-3 col-span-1 md:col-span-1 "
                />
                {errors.confiremPassword && (
                  <span className="text-red-700 col-span-1  ">
                    {errors.confiremPassword.message}
                  </span>
                )}
              </div>
            </div>
            <div className=" grid grid-cols-2 gap-3 pb-5">
              <button
                className="border bg-teal-500 text-white  p-2 hover:bg-teal-600 hover:text-white rounded w-full md:w-auto"
                onClick={handleSubmit(handleForgotPassword)}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewPasswordForm
