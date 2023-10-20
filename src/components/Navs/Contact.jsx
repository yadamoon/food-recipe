import React from 'react'

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
    <div className="bg-white">
      <h1 className="text-center">ContactUs</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        molestias inventore, et a hic repudiandae, unde rerum perferendis facere
        consectetur alias est reiciendis eum? Neque iusto doloremque qui
        nesciunt dolores.
      </p>
      <div className=" grid grid-cols-3 gap-3">
        <div className="border rounded text-center w-1/3 h-1/4 col-span-1">
          <h1>Phone</h1>
          <p>+25132380202</p>
        </div>
        <div className="border rounded text-center w-1/3 h-1/4 col-span-1 ">
          <h1>Email</h1>
          <p>yared241993@gmail.com</p>
        </div>
        <div className="border rounded text-center w-1/3 h-1/4 col-span-1 ">
          <h1>Address</h1>
          <p>Ethiopia , AdissAbeba , Mekelle</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
