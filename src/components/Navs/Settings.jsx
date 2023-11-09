import React, { useState } from 'react'
import auth from '../../services/http/auth'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Settings = () => {
  const [path, setPath] = useState('')
  const contents = [
    {
      title: 'Public Profile',
      image: 'public/images/user-profile-filled-svgrepo-com.svg',
      content: publicProfile,
    },
    {
      title: 'Language',
      image: 'public/images/language-svgrepo-com.svg',
      content: accountSettings,
    },
    {
      title: 'Appearance',
      image: 'public/images/theme-opened-svgrepo-com.svg',
      content: notifications,
    },
  ]
  const [activeMenu, setActiveMenu] = useState(0)
  const ActiveContent = contents[activeMenu].content
  const handlLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout !',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Logout!',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
        })
      }
    }),
      auth.signOut()
    changePath()
  }
  const changePath = () => {
    setPath('/')
  }

  return (
    <div className=" w-full  bg-white">
      <div>
        {/* titel of components */}
        <motion.h2 className="text-center text-3xl" animate={{ x: 20 }}>
          Settings
        </motion.h2>
      </div>
      {/* <!-- Seperator --> */}
      <div className="flex items-center justify-center flex-col h-screen">
        <div className="text-sm font-bold ">
          <nav className="flex w-full justify-center space-x-3   ">
            {contents.map((item, index) => (
              <a
                key={index}
                className={
                  (index === activeMenu
                    ? 'text-white bg-teal-600 rounded '
                    : '') + '   p-2  border'
                }
                onClick={() => setActiveMenu(index)}
              >
                <span className="text-center">
                  <img
                    src={item.image}
                    width={30}
                    height={20}
                    alt={item.image}
                  />
                </span>
              </a>
            ))}

            <Link to={path} onClick={handlLogout} className="border p-2">
              <img
                src="public/images/logout-svgrepo-com.svg"
                width={30}
                height={30}
                alt=""
              />
            </Link>
          </nav>
        </div>

        <ActiveContent className="col-span-3 md:col-span-3 sm:col-span-1 mx-10 " />
      </div>
    </div>
  )
}

export default Settings

const publicProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const saveToDB = ({
    email,
    firstName,
    lastName,
    oldPassword,
    newPassword,
    confiremPassword,
  }) => {
    console.log(
      email,
      firstName,
      lastName,
      oldPassword,
      newPassword,
      confiremPassword
    )
    reset()
  }
  const cancel = () => {}

  return (
    <div>
      <div className="bg-white">
        <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-black">
            Update product
          </h2>
          <form>
            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div className="sm:col-span-2">
                <label
                  for="Email"
                  className="block mb-2 text-sm font-medium  dark:text-black"
                >
                  Email
                </label>
                <input
                  type="email"
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'Please Enter Your Email!',
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
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
                {errors.email && (
                  <span className="text-red-700 col-span-1 ">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="w-full">
                <label
                  for="firstName"
                  class="block mb-2 text-sm font-medium  dark:text-black"
                >
                  First Name
                </label>
                <input
                  type="text"
                  {...register('firstName', {
                    required: {
                      value: true,
                      message: 'Please Enter Your First Name!',
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
                  className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
                {errors.firstName && (
                  <span className="text-red-700 col-span-1 ">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div className="w-full">
                <label
                  for="lastName"
                  className="block mb-2 text-sm font-medium  dark:text-black"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  {...register('lastName', {
                    required: {
                      value: true,
                      message: 'Please Enter Last Name',
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
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
                {errors.lastName && (
                  <span className="text-red-700 col-span-1 ">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
              <div className="w-full">
                <label
                  for="Old Password"
                  class="block mb-2 text-sm font-medium  dark:text-black"
                >
                  Old Password
                </label>
                <input
                  type="password"
                  {...register('oldPassword', {
                    required: {
                      value: true,
                      message: 'Please Enter New Password!',
                    },
                    minLength: {
                      value: 6,
                      message: 'min length are at least 6',
                    },
                    maxLength: {
                      value: 8,
                      message: 'max length are at least 8',
                    },
                  })}
                  className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
                {errors.oldPassword && (
                  <span className="text-red-700 col-span-1 ">
                    {errors.oldPassword.message}
                  </span>
                )}
              </div>
              <div className="w-full">
                <label
                  for="New Password"
                  className="block mb-2 text-sm font-medium  dark:text-black"
                >
                  New Password
                </label>
                <input
                  type="password"
                  {...register('newPassword', {
                    required: {
                      value: true,
                      message: 'Please Enter New Password!',
                    },
                    minLength: {
                      value: 6,
                      message: 'min length are at least 6',
                    },
                    maxLength: {
                      value: 8,
                      message: 'max length are at least 8',
                    },
                  })}
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
                {errors.newPassword && (
                  <span className="text-red-700 col-span-1 ">
                    {errors.newPassword.message}
                  </span>
                )}
              </div>

              <div className="sm:col-span-2">
                <label
                  for="confiremPassword"
                  className="block mb-2 text-sm font-medium  dark:text-black"
                >
                  Confir Passwordem
                </label>
                <input
                  type="text"
                  {...register('confiremPassword', {
                    required: {
                      value: true,
                      message: 'Please Confirem New Password!',
                    },
                    minLength: {
                      value: 6,
                      message: 'min length are at least 6',
                    },
                    maxLength: {
                      value: 8,
                      message: 'max length are at least 8',
                    },
                  })}
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
                {errors.confiremPassword && (
                  <span className="text-red-700 col-span-1 ">
                    {errors.confiremPassword.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-6 justify-center">
              <button
                type="button"
                className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                <svg
                  className="w-5 h-5 mr-1 -ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={cancel()}
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Delete
              </button>
              <button
                type="submit"
                onClick={handleSubmit(saveToDB)}
                class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-teal-700"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
const accountSettings = () => {
  return (
    <div className=" flex justify-center">
      <div className=" w-full h-screen">
        <select name="" id="">
          <option value="Eng">Eng</option>
          <option value="Amh">Amh</option>
          <option value="Tig">Tig</option>
        </select>
      </div>
    </div>
  )
}
const notifications = () => {
  return <div className="">notifications</div>
}
