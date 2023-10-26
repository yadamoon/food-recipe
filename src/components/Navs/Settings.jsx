import React, { useState } from 'react'
import auth from '../../services/http/auth'

const Settings = () => {
  const contents = [
    {
      title: 'Public Profile',
      content: publicProfile,
    },
    {
      title: 'Language',
      content: accountSettings,
    },
    {
      title: 'Appearance',
      content: notifications,
    },
  ]
  const [activeMenu, setActiveMenu] = useState(0)
  const ActiveContent = contents[activeMenu].content
  const handlLogout = () => {
    auth.signOut()
  }
  return (
    <div className=" w-full  bg-white">
      <div>
        {/* titel of components */}
        <h2 className="text-center text-3xl">Settings</h2>
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
                    ? 'text-white bg-teal-700 rounded '
                    : '') + '   p-2  border'
                }
                onClick={() => setActiveMenu(index)}
              >
                {item.title}
              </a>
            ))}
            <button className="border p-2" onClick={handlLogout}>
              logout
            </button>
          </nav>
        </div>

        <ActiveContent className="col-span-3 md:col-span-3 sm:col-span-1 mx-10 " />
      </div>
    </div>
  )
}

export default Settings
import { useForm } from 'react-hook-form'
const publicProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const saveToDB = (data) => {
    console.log(data) // You can handle the form data here
  }

  return (
    <div>
      <section className="bg-white">
        <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-black">
            Update product
          </h2>
          <form action="#">
            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div className="sm:col-span-2">
                <label
                  for="name"
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
              </div>
              <div className="w-full">
                <label
                  for="brand"
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
              </div>
              <div className="w-full">
                <label
                  for="price"
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
              </div>
              <div className="w-full">
                <label
                  for="brand"
                  class="block mb-2 text-sm font-medium  dark:text-black"
                >
                  Old Password
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
              </div>
              <div className="w-full">
                <label
                  for="price"
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
              </div>
              {/* <div>
                <label
                  for="category"
                  className="block mb-2 text-sm font-medium  dark:text-black"
                >
                  Address{' '}
                </label>
                <select
                  id="category"
                  className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                >
                  <option selected="">Electronics</option>
                  <option value="TV">TV/Monitors</option>
                  <option value="PC">PC</option>
                  <option value="GA">Gaming/Console</option>
                  <option value="PH">Phones</option>
                </select>
              </div> */}
              <div className="sm:col-span-2">
                <label
                  for="name"
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
                class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-teal-700"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
const accountSettings = () => {
  return <div className="">accountSettings</div>
}
const notifications = () => {
  return <div className="">notifications</div>
}
