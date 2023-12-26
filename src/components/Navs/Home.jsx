import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="mx-5 bg-white  w-auto h-auto">
      <FoodForHealthy />
      <PopularVideo />
      <Sub />
    </div>
  )
}
// links of email

export const Sub = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="p-6  md:w-2/3 xl:w-auto mx-3  flex flex-col xl:items-center justify-between xl:flex-row bg-white">
        <motion.div
          className="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex  md:justify-center md:items-center"
          animate={{ y: 20 }}
        >
          <img
            src="/images/email-14-svgrepo-com.svg"
            alt="landing image"
            role="img"
            className="hidden lg:mt-0 lg:col-span-5 lg:flex w-44  "
          />
        </motion.div>
        <div className="w-full xl:w-1/2 xl:pl-40 xl:py-28 ">
          <h1 className="text-xl md:text-4xl xl:text-5xl font-bold leading-10 text-teal-800 mb-4 text-center xl:text-left md:mt-0 mt-4">
            Subscribe
          </h1>
          <p className="text-base leading-normal text-gray-600 text-center xl:text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            doloribus enim aliquam fugit ut dolores quae! Accusamus, voluptatum
          </p>
          <div className="flex items-stretch mt-12">
            <input
              className="bg-gray-50 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-2 w-4/5 border border-transparent focus:outline-none focus:border-gray-500"
              type="email"
              placeholder="Your Email"
            />

            <button className="w-32 rounded-l-none hover:bg-teal-600 bg-teal-700 rounded text-base font-medium leading-none text-white p-2 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-700">
              subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
// helathy food
export const FoodForHealthy = () => {
  return (
    <div div className=" mx-5">
      <section className="bg-white ">
        <div className="text-center items-center  text-teal-700 text-3xl space-y-6 font-bold">
         
          Welcome to Our Website!
        </div>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className=" lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/images/test.png" alt="food recipe" />
          </div>
          <div className="mr-auto place-self-center lg:col-span-7 mx-10">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl text-teal-700 ">
              Welcome to Our Website!
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
              Eat Healthy Live Healthy
            </p>
            <Link
              to="/"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
// popular videos

export const PopularVideo = () => {
  const popularVideo = [
    {
      title: 'pizza',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Makhsoos_%28Special%29_Pizza.jpg/800px-Makhsoos_%28Special%29_Pizza.jpg',
      alt: 'Pizza',
    },
    {
      title: 'salad',
      img: '/images/Screenshot from 2023-09-30 12-00-11.png',
      alt: 'Salad',
    },
    {
      title: 'tibs',
      img: '/images/Screenshot from 2023-09-30 12-39-20.png',
      alt: 'Tibs',
    },
    {
      title: 'shiro',
      img: '/images/Screenshot from 2023-09-27 16-09-25.png',
      alt: 'Shiro',
    },
  ]

  return (
    <div className="p-6 w-ful   xl:w-auto mx-3   xl:items-stretch bg-white    overflow-auto">
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
              <img
                src={foods.img}
                alt={foods.alt}
                className=" rounded w-full "
              />

              <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
              <div className=" absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                <svg
                  width={64}
                  height={64}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M16 10L18.5768 8.45392C19.3699 7.97803 19.7665 7.74009 20.0928 7.77051C20.3773 7.79703 20.6369 7.944 20.806 8.17433C21 8.43848 21 8.90095 21 9.8259V14.1741C21 15.099 21 15.5615 20.806 15.8257C20.6369 16.056 20.3773 16.203 20.0928 16.2295C19.7665 16.2599 19.3699 16.022 18.5768 15.5461L16 14M6.2 18H12.8C13.9201 18 14.4802 18 14.908 17.782C15.2843 17.5903 15.5903 17.2843 15.782 16.908C16 16.4802 16 15.9201 16 14.8V9.2C16 8.0799 16 7.51984 15.782 7.09202C15.5903 6.71569 15.2843 6.40973 14.908 6.21799C14.4802 6 13.9201 6 12.8 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18Z"
                      stroke="#55b054"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
