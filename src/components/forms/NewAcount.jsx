import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { http } from '../../services/http/http'

const NewAcount = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      phoneNumber: '',
    },
  })
  const addNewUser = async ({
    username,
    firstname,
    lastname,
    email,
    password,
    phoneNumber,
  }) => {
    const result = await http.request({
      method: 'post',
      url: 'users',
      data: { firstname, lastname, username, email, password, phoneNumber },
    })

    if (!result.isError) {
      dispatch(setStatus({ status: true }))
      dispatch(setUser({ user: result.user }))
      navigate('/')
      Swal.fire({
        title: 'Success!',
        icon: 'success',
        title: ' Successfully you r created new account',
        showConfirmButton: false,
        timer: 2000,
      })
      reset()
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

  return (
    <div className=" mx-5 mt-10 rounded">
      <div className="font-mono bg-white">
        <div className="container mx-auto">
          <div className="flex justify-center px-6 my-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              <div className="w-full h-auto bg-white hidden lg:block lg:w-5/12 bg-cover rounded-l-lg">
                <img
                  src="public/images/test.png"
                  className="bg-cover h-auto"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 className="pt-4 text-2xl text-center">
                  Create an Account!
                </h3>
                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        for="firstName"
                      >
                        First Name
                      </label>
                      <input
                        className="w-full px-1 pr-24 py-3 text-sm  text-gray-700 border rounded   "
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                        {...register('firstname', {
                          required: {
                            value: true,
                            message: 'Please Enter First Name!',
                          },
                          minLength: {
                            value: 2,
                            message: 'min length are at least 2',
                          },
                          maxLength: {
                            value: 32,
                            message: 'max length are at least 12',
                          },
                        })}
                      />
                      {errors.firstname && (
                        <span className=" text-sm  text-red-500 col-span-1 ">
                          {errors.firstname.message}
                        </span>
                      )}
                    </div>
                    <div className="md:ml-2">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        for="lastName"
                      >
                        Last Name
                      </label>
                      <input
                        className="w-full px-1 pr-20 py-3 text-sm  text-gray-700 border rounded   "
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                        {...register('lastname', {
                          required: {
                            value: true,
                            message: 'Please Enter Last Name!',
                          },
                          minLength: {
                            value: 2,
                            message: 'min length are at least 2',
                          },
                          maxLength: {
                            value: 32,
                            message: 'max length are at least 12',
                          },
                        })}
                      />
                      {errors.lastname && (
                        <span className="text-sm  text-red-500  col-span-1 ">
                          {errors.lastname.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      for="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full px-1 py-3 mb-3 text-sm  text-gray-700 border rounded    "
                      id="email"
                      type="email"
                      placeholder="Email"
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
                    />
                    {errors.email && (
                      <span className="text-sm  text-red-500  col-span-1 ">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      for="username"
                    >
                      Username
                    </label>
                    <input
                      className="w-full px-1 py-3 mb-3 text-sm  text-gray-700 border rounded    "
                      id="username"
                      type="text"
                      placeholder="Username"
                      {...register('username', {
                        required: {
                          value: true,
                          message: 'Please Enter Username!',
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
                    />
                    {errors.username && (
                      <span className="text-sm  text-red-500  col-span-1 ">
                        {errors.username.message}
                      </span>
                    )}
                  </div>

                  <div className="mb-4 md:flex md:justify-between flex ">
                    <select className="bg-gray-100 border border-gray-300 rounded-l px-2 py-3">
                      <option value="+251">+251</option>
                      <option value="+61">+61</option>
                      {/* Add more country codes as needed */}
                    </select>
                    <input
                      type="phoneNumber"
                      className="w-full px-1 py-3 text-sm  text-gray-700 border rounded"
                      placeholder="Phone number"
                      {...register('phoneNumber', {
                        required: {
                          value: true,
                          message: 'Please Enter Phone Number!',
                        },
                        minLength: {
                          value: 8,
                          message: 'min length are at least 6',
                        },
                        maxLength: {
                          value: 32,
                          message: 'max length are at least 32',
                        },
                        pattern: {
                          value: new RegExp('^(0[0-9]{9}|9[0-9]{8})$'),
                          message: 'Invalid phone number',
                        },
                      })}
                    />
                    {errors.phoneNumber && (
                      <span className="text-sm  text-red-500  col-span-1 ">
                        {errors.phoneNumber.message}
                      </span>
                    )}
                  </div>
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        for="password"
                      >
                        Password
                      </label>
                      <input
                        className="w-full px-1 pr-24 py-3  mb-3 text-sm  text-gray-700 border  rounded   "
                        id="password"
                        type="password"
                        placeholder="******************"
                        {...register('password', {
                          required: {
                            value: true,
                            message: 'Please Enter Your correct password!',
                          },
                          minLength: {
                            value: 8,
                            message: 'min length are at least 6',
                          },
                          maxLength: {
                            value: 32,
                            message: 'max length are at least 32',
                          },
                        })}
                      />
                      {errors.password && (
                        <span className="text-sm  text-red-500  col-span-1">
                          {errors.password.message}
                        </span>
                      )}
                    </div>
                    <div className="md:ml-2">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        for="c_password"
                      >
                        Confirm Password
                      </label>
                      <input
                        className="w-full px-1 pr-24 py-3  mb-3 text-sm  text-gray-700 border rounded    "
                        id="c_password"
                        type="password"
                        placeholder="******************"
                        {...register('confirmePassword', {
                          required: {
                            value: true,
                            message:
                              'Please Enter Your correct Confirme Password!',
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
                      />
                      {errors.confirmePassword && (
                        <span className="text-sm  text-red-500  col-span-1">
                          {errors.confirmePassword.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-teal-500 rounded hover:bg-teal-700  "
                      type="button"
                      onClick={handleSubmit(addNewUser)}
                    >
                      Register Account
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />

                  <Link to="/Login" className="text-center">
                    <a
                      className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      href="#"
                    >
                      Already have an account? Login!
                    </a>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewAcount
