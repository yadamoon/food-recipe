import React from 'react'

export default function Home() {
  return (
    <div className="spacey-10">
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen overflow-auto">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="w-4/5">
            <h1 className="mt-32 text-gray-500 text-6xl font-bold">
              Find Your Tasty and Healthy Food
              <br />
              <span className="text-gray-600">
                on this Food Recipe Application.
              </span>
            </h1>
          </div>
          <div className="w-5/6 my-10 ml-6">
            <h3 className="text-gray-600">
              Create, edit & deploy fullstack apps with <br />
              <strong className="">
                faster package installations & greater security
              </strong>
              <br />
              than even local environments.
            </h3>
          </div>
          <div className="hidden sm:block opacity-50 z-0">
            <div className="shadow-2xl w-96 h-96 rounded-full -mt-72 bg-teal-700"></div>
            <div className="shadow-2xl w-96 h-96 rounded-full -mt-96 bg-teal-200"></div>
            <div className="shadow-xl w-80 h-80 rounded-full ml-8 -mt-96 bg-teal-400"></div>
          </div>
          <div className=" space-y-3 grid grid-cols-3 gap-2">
            <div className="border rounded">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              rem. In reiciendis ducimus molestias laboriosam accusantium minus
              id vero distinctio eaque facere corrupti dolores excepturi, beatae
              optio illo soluta tempora.
            </div>
            <div className="border border-teal-200 rounded ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              provident expedita architecto officia quia consequuntur
              reprehenderit harum iusto. Rem unde est repellat ea delectus
              consequuntur tenetur ipsum eaque eum sit?{' '}
            </div>
            <div className="border rounded">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              necessitatibus corporis voluptatem! Eius eum praesentium quos
              dicta rerum perspiciatis fugit earum sit cupiditate. Vero ad,
              provident pariatur eligendi voluptate minima.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
