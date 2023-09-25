import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import auth from '../../services/http/auth'
import { useDispatch } from 'react-redux'
import { setStatus, setUser } from '../../store/slices/authSlice'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const [passwordType, setPasswordType] = useState('password')
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm()

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
    } else {
      console.log({ error: result.error })
    }
  }
  const handleCkeckBox = () => {
    if (passwordType === 'password') {
      setPasswordType('text')
      return
    }
    setPasswordType('password')
  }
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
            <label htmlFor="showPassword">
              <input
                type="checkBox"
                {...register('showPassword', {})}
                onClick={handleCkeckBox}
              />
              Show Password
            </label>
          </div>
          <div className="space-y-3">
            <div
              className="border bg-teal-500 uppercase text-center text-white w-full  pl-20 pr-20 pt-3 pb-2 hover:bg-teal-600 hover:text-white rounded md:w-auto "
              onClick={handleSubmit(handleLogin)}
            >
              log in
            </div>
          </div>
          <div class="relative flex items-center mt-8">
            <div class="border h-0 w-2/4 border-stone-300"></div>
            <div class=" text-stone-300 px-4 text-sm font-normal">OR</div>
            <div class=" border h-0 w-2/4 border-stone-300"></div>
          </div>
          <button class="border border-indigo-900 rounded-lg  text-center  text-indigo-900 bg-white text-base font-semibold w-full py-3 mt-9">
            Signup now
          </button>
          <br />
          <br />
        </form>
      </div>
    </div>
  )
}

export default LoginPage
