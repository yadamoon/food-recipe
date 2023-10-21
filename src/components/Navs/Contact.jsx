import React from 'react'
import ContactForm from '../forms/ContactForm'

const Contact = () => {
  return (
    // <div className="flex w-full text-center justify-center ">
    //   <div className="grid grid-cols-1   md:grid-cols-1 lg:grid-cols-3 gap-8  p-3 w-full ">
    //     <div className=" h-5/5 body-font bg-white text-gray-600 rounded-t">
    //       <div className=" flex justify-center">
    //         <div className="mt-4 w-full ">
    //           <div>
    //             <img
    //               src="public/svg/chat-round-line-svgrepo-com.svg"
    //               width={20}
    //               height={20}
    //               alt=""
    //               className="justify-center"
    //             />
    //           </div>
    //           <p>
    //             Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    //             Pariatur explicabo, repellendus repellat quasi architecto
    //             dignissimos officia? Soluta vel tempore, animi corporis, libero
    //             debitis asperiores iusto neque saepe voluptatem illo et.
    //           </p>
    //           <div className="title-font text-white  font-medium bg-teal-700 p-2 rounded-xl w-2/3 mx-20 hover:bg-teal-800 ">
    //             Chat Live
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className=" h-5/5 body-font bg-white text-gray-600 rounded-t">
    //       <div className="">
    //         <div className="mt-4 w-full ml-2">
    //           <div>
    //             <img
    //               src="public/svg/call-svgrepo-com.svg"
    //               width={20}
    //               height={20}
    //               alt=""
    //             />
    //           </div>
    //           <p>
    //             Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    //             Pariatur explicabo, repellendus repellat quasi architecto
    //             dignissimos officia? Soluta vel tempore,
    //           </p>
    //           <spa>
    //             <address>+251932380202</address>
    //           </spa>
    //           <div className="title-font text-white  font-medium bg-teal-700 p-2 rounded-xl w-2/3 mx-20 hover:bg-teal-800 ">
    //             Call now{' '}
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className=" h-5/5 body-font bg-white text-gray-600 rounded-t">
    //       <div className="">
    //         <div className="mt-4 w-full ml-2  ">
    //           <div>
    //             <img
    //               src="public/svg/ask-svgrepo-com.svg"
    //               width={20}
    //               height={20}
    //               alt=""
    //               className="justify-center"
    //             />
    //           </div>
    //           <p>
    //             Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    //             Pariatur explicabo, repellendus repellat quasi architecto
    //             dignissimos officia? Soluta vel tempore, animi corporis, libero
    //             debitis asperiores iusto neque saepe voluptatem illo et.
    //           </p>
    //           <div className="title-font text-white  font-medium bg-teal-700 p-2 rounded-xl w-2/3 mx-20 hover:bg-teal-800 ">
    //             Ask Me !
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-white  mx-3">
      <h1 className="text-center text-2xl font-bold">CONTACT US</h1>

      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 sm:grid-cols-2 p-6 ">
        <div className=" rounded text-center w-full h-auto col-span-1 p-6 border  shadow hover:bg-gray-50">
          <span className="text-2xl text-teal-800">
            <i class="fa fa-phone" aria-hidden="true"></i>
          </span>
          <h1 className="font-bold">Phone</h1>
          <p className="font-thin">+25132380202</p>
        </div>
        <div className=" rounded text-center w-full h-auto col-span-1 p-6 border  shadow hover:bg-gray-50">
          <span className="text-2xl text-teal-800">
            <i class="fa fa-envelope" aria-hidden="true"></i>
          </span>
          <h1 className="font-bold">Email</h1>
          <p className="font-thin">yared241993@gmail.com</p>
        </div>
        <div className=" rounded text-center w-full h-5/5 col-span-1 p-6 border  shadow  hover:bg-gray-50">
          <span className="text-2xl text-teal-800">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
          </span>
          <h1 className="font-bold">Address</h1>
          <p className="font-thin">Ethiopia , AdissAbeba , Mekelle</p>
        </div>
      </div>
      <ContactForm />
    </div>
  )
}

export default Contact
