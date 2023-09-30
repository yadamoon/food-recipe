import React from 'react'

const Contact = () => {
  return (
    <div className="flex bg-white">
      <div>
        <h1 className="">Contact US</h1>
      </div>
      <br />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:grid-cols-2 w-2/3">
          <div className=" h-auto body-font bg-white text-gray-600 rounded-t space-y-3 text-center">
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
          <div className=" h-auto  body-font bg-white text-gray-600 rounded-t space-y-3">
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
          <div className=" h-auto body-font bg-white text-gray-600 rounded-t space-y-3">
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

    // <div className="w-full h-screen">
    //   <div className=" h-96"></div>
    //   <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
    //     <div className="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
    //       <p className="text-3xl font-bold leading-7 text-center text-black">
    //         Contact me
    //       </p>
    //       <form action="" method="post">
    //         <div className="md:flex items-center mt-12">
    //           <div className="w-full md:w-1/2 flex flex-col">
    //             <label className="font-semibold leading-none text-gray-300">
    //               Name
    //             </label>
    //             <input
    //               type="text"
    //               className="leading-none text-gray-50 p-3 focus:outline-none focus:teal-blue-700 mt-4 border-0 bg-gray-800 rounded"
    //             />
    //           </div>
    //           <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
    //             <label className="font-semibold leading-none text-gray-300">
    //               Phone
    //             </label>
    //             <input
    //               type="email"
    //               className="leading-none text-gray-50 p-3 focus:outline-none focus:teal-blue-700 mt-4 border-0 bg-gray-800 rounded"
    //             />
    //           </div>
    //         </div>
    //         <div className="md:flex items-center mt-8">
    //           <div className="w-full flex flex-col">
    //             <label className="font-semibold leading-none text-gray-300">
    //               Subject
    //             </label>
    //             <input
    //               type="text"
    //               className="leading-none text-gray-50 p-3 focus:outline-none focus:teal-blue-700 mt-4 border-0 bg-gray-800 rounded"
    //             />
    //           </div>
    //         </div>
    //         <div>
    //           <div className="w-full flex flex-col mt-8">
    //             <label className="font-semibold leading-none text-gray-300">
    //               Message
    //             </label>
    //             <textarea
    //               type="text"
    //               className="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:teal-blue-700 mt-4 bg-gray-800 border-0 rounded"
    //             ></textarea>
    //           </div>
    //         </div>
    //         <div className="flex items-center justify-center w-full">
    //           <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-teal-700 rounded hover:bg-teal-600 focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 focus:outline-none">
    //             Send message
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Contact
