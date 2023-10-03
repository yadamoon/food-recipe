import React from 'react'

const ContactForm = () => {
  return (
    <div className="w-full h-screen">
      <div className=" h-96"></div>
      <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div className="w-full shadow rounded p-8 sm:p-12 -mt-72">
          <p className="text-3xl font-bold leading-7 text-center text-black">
            Contact me
          </p>
          <form action="">
            <div className="md:flex items-center mt-12">
              <div className="w-full md:w-1/2 flex flex-col">
                <label className="font-semibold leading-none text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  className="leading-none text-gray-50 p-3 focus:outline-none focus:teal-blue-700 mt-4 border-0  rounded"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="font-semibold leading-none text-gray-600">
                  Phone
                </label>
                <input
                  type="email"
                  className="leading-none text-gray-50 p-3 focus:outline-none focus:teal-blue-700 mt-4 border-0  rounded"
                />
              </div>
            </div>
            <div className="md:flex items-center mt-8">
              <div className="w-full flex flex-col">
                <label className="font-semibold leading-none text-gray-600">
                  Subject
                </label>
                <input
                  type="text"
                  className="leading-none text-gray-50 p-3 focus:outline-none focus:teal-blue-700 mt-4 border-0  rounded"
                />
              </div>
            </div>
            <div>
              <div className="w-full flex flex-col mt-8">
                <label className="font-semibold leading-none text-gray-600">
                  Message
                </label>
                <textarea
                  type="text"
                  className="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:teal-blue-700 mt-4  border-0 rounded"
                ></textarea>
              </div>
            </div>
            <div className="flex items-center justify-center w-full">
              <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-teal-700 rounded hover:bg-teal-600 focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 focus:outline-none">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
