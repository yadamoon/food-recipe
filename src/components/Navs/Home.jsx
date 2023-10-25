import { motion } from 'framer-motion'
import React from 'react'

export default function Home() {
  return (
    <div className="md:mx-28 w-full">
      <FoodForHealthy />
      <PopularVideo />
      <Sub />
    </div>
  )
}

export const Sub = () => {
  return (
    <>
      <div className="p-6  md:w-2/3 xl:w-auto mx-3  flex flex-col xl:items-stretch justify-between xl:flex-row bg-white">
        <motion.div
          className="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center"
          animate={{ y: 20 }}
        >
          <img
            src="public/images/email-14-svgrepo-com.svg"
            alt="Envelope with a newsletter"
            role="img"
            className="w-1/3 "
          />
        </motion.div>
        <div className="w-full xl:w-1/2 xl:pl-40 xl:py-28 ">
          <h1 className="text-xl md:text-4xl xl:text-5xl font-bold leading-10 text-teal-800 mb-4 text-center xl:text-left md:mt-0 mt-4">
            Subscribe
          </h1>
          <p className="text-base leading-normal text-gray-600 text-center xl:text-left">
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son add.
          </p>
          <div className="flex items-stretch mt-12">
            <input
              className="bg-gray-50 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500"
              type="email"
              placeholder="Your Email"
            />
            <button className="w-32 rounded-l-none hover:bg-teal-600 bg-teal-700 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-700">
              subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export const FoodForHealthy = () => {
  return (
    <>
      <div className="p-6  md:w-2/3 xl:w-auto mx-3  flex flex-col xl:items-stretch justify-between xl:flex-row bg-white ">
        <div className="xl:w-1/2 md:mb-14 xl:mb-0 relative flex items-center justify-center">
          <motion.img
            src="public/images/test.png"
            alt="Envelope with a newsletter"
            role="img"
            className="h-2/3 xl:w-full lg:w-1/2 w-full bg-white rounded-2xl md:w-1/2 "
            animate={{ x: 20 }}
          />
        </div>
        <motion.div
          className="w-full xl:w-1/2 xl:pl-40 xl:py-28 "
          animate={{ y: 30 }}
        >
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-teal-800 mb-4 text-center xl:text-left md:mt-0 mt-4">
            Eat Healthy <br />
            Live Healthy
          </h1>
          <p className="text-base leading-normal text-gray-600 text-center xl:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aperiam
            atque a laborum? Facere eligendi vitae tenetur at doloremque, sequi
            esse est neque debitis reiciendis autem officiis libero ducimus
            fugiat?
          </p>
          <div className="grid grid-cols-1 w-full items-center sm:w-2/3 sm:mx-16 space-y-10">
            <button className="bg-teal-600 text-white pe-7 p-2  rounded ">
              Get Startd
            </button>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export const PopularVideo = () => {
  const popularVideo = [
    {
      title: 'pizza',
      img: 'public/images/burger.png',
      alt: 'some burger food',
    },
    {
      title: 'Burger',
      img: 'public/images/bur.png',
      alt: 'some burger food',
    },
    {
      title: 'shiro',
      img: 'public/images/bur.png',
      alt: 'some burger food',
    },
    {
      title: 'salad',
      img: 'public/images/bur.png',
      alt: 'some burger food',
    },
  ]

  return (
    <div className="  bg-gradient-to-br p-6  md:w-2/3 xl:w-auto mx-3  flex flex-col xl:items-stretch bg-white    overflow-auto">
      {/* //!? from tilawind Componenets */}
      <div className=" 2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
        <motion.div className=" text-center" animate={{ y: 20 }}>
          <h2 className=" font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-teal-800 md:w-full w-9/12 mx-auto">
            Popular videos
          </h2>
        </motion.div>

        <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:grap-8 md:gap-6 gap-4 mt-10">
          {popularVideo.map((foods) => (
            <motion.div
              key={foods.id}
              className="relative group"
              animate={{ x: 5, y: 10 }}
            >
              <img src={foods.img} alt={foods.alt} className="  " />
              <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
              <div className=" absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                <svg
                  width={64}
                  height={64}
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42.6665 10.6665H21.3332C15.4421 10.6665 10.6665 15.4421 10.6665 21.3332V42.6665C10.6665 48.5575 15.4421 53.3332 21.3332 53.3332H42.6665C48.5575 53.3332 53.3332 48.5575 53.3332 42.6665V21.3332C53.3332 15.4421 48.5575 10.6665 42.6665 10.6665Z"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32 40C36.4183 40 40 36.4183 40 32C40 27.5817 36.4183 24 32 24C27.5817 24 24 27.5817 24 32C24 36.4183 27.5817 40 32 40Z"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M44 20V20.001"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-center font-bold text-teal-800">
                {foods.title}
              </p>{' '}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
