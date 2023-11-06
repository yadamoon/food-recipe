import React from 'react'
import { useForm } from 'react-hook-form'
// import NewPasswordForm from './NewPasswordForm'

export default function ForgetPassword() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm()

  const handleForgotPassword = ({ email }) => {
    let timerInterval
    Swal.fire({
      title: 'please wait just a sec!',
      // html: 'I will close in <b></b> milliseconds.',
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
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  }

  return (
    <>
      <div className="flex justify-center">
        <div className=" bg-white mx-4 md:mx-0 w-full md:w-2/3 lg:w-1/3 rounded-xl h-auto p-6">
          <div className="text-2xl space-y-2">
            <h1 className="space-y-2 font-bold">Forget password</h1>
          </div>

          <form className="w-full space-y-3 pb-5">
            <div className="grid grid-cols-1 gap-2">
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
            <div className=" grid grid-cols-2 gap-3 pb-5">
              <button
                className="border bg-teal-500 text-white  p-2 hover:bg-teal-600 hover:text-white rounded w-full md:w-auto"
                onClick={handleSubmit(handleForgotPassword)}
              >
                send reset code
              </button>
            </div>
            <br />
            <br />
          </form>
        </div>
      </div>
      {/* <NewPasswordForm /> */}
    </>
  )
}
