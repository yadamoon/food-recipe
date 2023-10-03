import React from 'react'

const Contact = () => {
  return (
    <div className="flex ">
      <div>
        <h1 className="">Contact US</h1>
      </div>
      <br />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:grid-cols-2 w-2/3">
          <div className=" h-auto body-font bg-gray-100 text-gray-600 rounded-t space-y-3 text-center">
            <img
              src="public/svg/call-svgrepo-com.svg"
              width={60}
              height={20}
              alt="call"
              className="flex justify-center"
            />
            <h1 className="text-2xl text-center text-teal-800 font-bold">
              {' '}
              Call Us
            </h1>
            <p>+251-932380202</p>
          </div>
          <div className=" h-auto  body-font bg-gray-100 text-gray-600 rounded-t space-y-3">
            <img
              src="public/svg/chat-round-line-svgrepo-com.svg"
              width={60}
              height={20}
              alt=""
            />
            <h1 className="text-2xl text-center text-teal-800 font-bold">
              {' '}
              Chat Live
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            </p>
            <button className="border rounded bg-green-800 text-white justify-center">
              Chat Live
            </button>
          </div>
          <div className=" h-auto body-font bg-gray-100 text-gray-600 rounded-t space-y-3">
            <img
              src="public/svg/ask-svgrepo-com.svg"
              width={60}
              height={20}
              alt=""
            />
            <h1 className="text-2xl text-center text-teal-800 font-bold">
              Ask a Question
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            </p>
            <button className="border rounded bg-green-800 text-white">
              Chat Live
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
