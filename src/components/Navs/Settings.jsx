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
    <div className="">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-center">
          Settings
        </h2>
      </div>
      {/* <!-- Seperator --> */}
      <div>
        <div></div>
        <div className=" ">
          <nav className=" w-2/3">
            {contents.map((item, index) => (
              <a
                key={index}
                className={
                  (index === activeMenu ? 'text-white bg-teal-700' : '') +
                  ' inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  h-9 px-4 py-2 justify-start w-full border'
                }
                onClick={() => setActiveMenu(index)}
              >
                {item.title}
              </a>
            ))}
            <button
              className="hover:text-white hover:bg-teal-700 inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  h-9 px-4 py-2 justify-start w-auto border"
              onClick={handlLogout}
            >
              logout
            </button>
          </nav>
        </div>
        <ActiveContent />
      </div>
    </div>
  )
}

export default Settings
import { useForm } from 'react-hook-form'
const publicProfile = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm()

  // const saveToDB = (data) => {
  //   console.log(data) // You can handle the form data here
  // }

  return (
    <div>
      {/* <form action="">
        <div className=" ">
          <div className="w-full  col-span-1">
            <label className="font-semibold leading-none text-gray-600">
              First Name
            </label>

            <input
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
              className=" p-3 mt-4 border  rounded"
            />
            {errors.firstName && (
              <span className="text-red-700 col-span-1 ">
                {errors.firstName.message}
              </span>
            )}
          </div>

          <div className="w-full   col-span-1">
            <label className="font-semibold leading-none text-gray-600">
              Last Name
            </label>
            <input
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
              className=" p-3 mt-4 border  rounded"
            />
            {errors.lastName && (
              <span className="text-red-700 col-span-1 ">
                {errors.lastName.message}
              </span>
            )}
          </div>

          <div className="w-full  col-span-1">
            <label className="font-semibold leading-none text-gray-600">
              Phone
            </label>

            <input
              {...register('phone', {
                required: {
                  value: true,
                  message: 'Please Enter Your Phone Number!',
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
              className=" p-3 mt-4 border  rounded"
            />
            {errors.phone && (
              <span className="text-red-700 col-span-1 ">
                {errors.phone.message}
              </span>
            )}
          </div>
        </div>

        <div className="md:flex items-center mt-8">
          <div className="w-full flex flex-col">
            <label className="font-semibold leading-none text-gray-600">
              Email
            </label>

            <input
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
              className="leading-none  p-4  mt-4 border  rounded"
            />
            {errors.email && (
              <span className="text-red-700 col-span-1 ">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>
        <div>
          <div className="md:flex items-center mt-12 ">
            <div className="w-full md:w-1/2 flex flex-col">
              <label className="font-semibold leading-none text-gray-600">
                Old Password
              </label>

              <input
                type="password"
                {...register('oldPassword', {
                  required: {
                    value: true,
                    message: 'Please Enter Old Your Password!',
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
                className=" p-3 mt-4 border  rounded"
              />
              {errors.oldPassword && (
                <span className="text-red-700 col-span-1 ">
                  {errors.oldPassword.message}
                </span>
              )}
            </div>
            <div className="w-full md:w-1/2 flex flex-col mx-8">
              <label className="font-semibold leading-none text-gray-600">
                New Password
              </label>

              <input
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
                className=" p-3 mt-4 border  rounded"
              />
              {errors.newPassword && (
                <span className="text-red-700 col-span-1 ">
                  {errors.newPassword.message}
                </span>
              )}
            </div>
            <div className="w-full md:w-1/2 flex flex-col md:ml-0 md:mt-0 mt-4">
              <label className="font-semibold leading-none text-gray-600">
                Confirem Password
              </label>

              <input
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
                className=" p-3 mt-4 border  rounded"
              />
              {errors.confiremPassword && (
                <span className="text-red-700 col-span-1 ">
                  {errors.confiremPassword.message}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button
            className="mt-9 font-semibold leading-none text-white py-4 bg-red-700 rounded hover:bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-red-700 focus:outline-none col-span-1 "
            onClick={handleSubmit(saveToDB)}
          >
            Don't Save
          </button>
          <button
            className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-teal-700 rounded hover:bg-teal-600 focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 focus:outline-none col-span-1 "
            onClick={handleSubmit(saveToDB)}
          >
            Save
          </button>
        </div>
      </form> */}

      {/* test */}
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
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required=""
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
                  name="brand"
                  id="brand"
                  className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required=""
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
                  type="number"
                  name="price"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required=""
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
                  name="brand"
                  id="brand"
                  className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required=""
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
                  type="number"
                  name="price"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required=""
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
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required=""
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                type="submit"
                class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Update product
              </button>
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
