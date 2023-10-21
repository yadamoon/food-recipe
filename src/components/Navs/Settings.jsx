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
    <div className="hidden space-y-6 p-10 pb-16 md:block bg-white mx-5 rounded justify-center">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight text-center">
          Settings
        </h2>
      </div>
      {/* <!-- Seperator --> */}
      <div className="grid grid-cols-3 gap-4">
        <div className="shrink-0 bg-border h-[1px] w-full col-span-3"></div>
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const saveToDB = (data) => {
    console.log(data) // You can handle the form data here
  }

  return (
    <div className="bg-white justify-center flex ml-12">
      <form action="">
        <div className=" grid grid-cols-3 ">
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
      </form>
    </div>
  )
}
const accountSettings = () => {
  return <div className="">accountSettings</div>
}
const notifications = () => {
  return <div className="">notifications</div>
}
