import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import auth from '../../services/http/auth'
import { useDispatch } from 'react-redux'
import { setStatus, setUser } from '../../store/slices/authSlice'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function LoginPage() {
  const [passwordType, setPasswordType] = useState('password')
  const {
    register,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogin = async ({ username, password }) => {
    const result = await auth.signIn({
      method: 'post',
      url: 'auth/login',
      data: { username, password },
    })
    if (!result.isError) {
      dispatch(setStatus({ status: true }))
      dispatch(setUser({ user: result.user }))
      navigate('/')
      Swal.fire({
        title: 'Success!',
        icon: 'success',
        title: 'Login Successfully',
        showConfirmButton: false,
        timer: 2000,
      })
      reset()
      handleLoginSuccessful()
    } else {
      console.log({ error: result.error })
      Swal.fire({
        title: 'Error!',
        icon: 'error',
        title: 'Wrong please try again',
        timer: 2000,
        showConfirmButton: false,
      })
    }
  }
  const handleCkeckBox = () => {
    if (passwordType === 'password') {
      setPasswordType('text')
      return
    }
    setPasswordType('password')
  }
  const handleLoginSuccessful = () => {
    // If login is successful
    toast.success('Login successful!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000, // Auto close after 3 seconds
      hideProgressBar: true,
    })
  }

  // const notify = () => toast.info('Succefullys')

  return (
    <div className="flex justify-center">
      <div className=" bg-white mx-4 md:mx-0 w-full md:w-2/3 lg:w-1/3 rounded-xl h-auto p-6">
        <div className="text-2xl">
          <h1>LOGIN</h1>
        </div>
        <form className="w-full space-y-3">
          <div className="grid grid-cols-1 gap-6">
            <input
              {...register('username', {
                required: 'Enter Your username please!',
              })}
              placeholder="username"
              className="border p-3 font-bold col-span-3 md:col-span-2"
            />
            {errors.username && (
              <span className="text-red-700 col-span-1 md:col-span-2 ">
                {errors.username.message}
              </span>
            )}
            <input
              type={passwordType}
              {...register('password', {
                required: 'Enter your psssword please!',
              })}
              placeholder="password"
              className="border p-3 font-bold col-span-3 md:col-span-2"
            />

            {errors.password && (
              <span className="text-red-700 col-span-1 md:col-span-2 ">
                {errors.password.message}
              </span>
            )}
            <label htmlFor="showPassword" className="font-bold space-x-3">
              <input
                type="checkBox"
                {...register('showPassword', {})}
                onClick={handleCkeckBox}
              />
              <span> Show Password </span>
            </label>
          </div>
          <div>
            <Link
              to="/ForgetPassword"
              class="mt-6 text-indigo-900 flex justify-end text-sm font-normal underline"
            >
              Forgot password?
            </Link>
          </div>
          <div className="space-y-3">
            <div
              className="border bg-teal-500 uppercase text-center text-white w-full  pl-20 pr-20 pt-3 pb-2 hover:bg-teal-600 hover:text-white rounded md:w-auto "
              onClick={handleSubmit(handleLogin)}
            >
              log in
            </div>
          </div>
          <div className="relative flex items-center mt-8">
            <div className="border h-0 w-2/4 border-stone-300"></div>
            <div className=" text-stone-300 px-4 text-sm font-normal">OR</div>
            <div className=" border h-0 w-2/4 border-stone-300"></div>
          </div>
          <div className="border border-green-600 uppercase text-center text-black w-full  pl-20 pr-20 pt-3 pb-2 hover:bg-teal-600 hover:text-white rounded md:w-auto ">
            <Link to="/Create New Account">Create New Acc </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
