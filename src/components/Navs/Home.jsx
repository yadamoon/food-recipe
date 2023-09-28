import React from 'react'

export default function Home() {
  return (
    <div className="spacey-10">
      <div className="mx-10  ">
        <div className=" py-10 px-10 bg-white ">
          <div className="  ">
            <h2 className="text-5xl font-semibold text-gray-800">
              Food Recipes
            </h2>
            <h3 className="text-xl font-semibold text-gray-600 mt-4">
              ¡Únete a nuestro programa de lealtad y obtén increíbles
              recompensas!
            </h3>
            <p className="text-gray-600 mt-4">{/* //!? some landing text */}</p>
            <div class="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
              <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 class="mb-3 text-sm font-medium tracking-widest text-teal-500 uppercase title-font">
                  About
                </h2>
                <nav class="mb-10 list-none">
                  <li class="mt-3">
                    <a class="text-gray-500 cursor-pointer hover:text-gray-900">
                      Company
                    </a>
                  </li>
                  <li class="mt-3">
                    <a class="text-gray-500 cursor-pointer hover:text-gray-900">
                      Careers
                    </a>
                  </li>
                  <li class="mt-3">
                    <a class="text-gray-500 cursor-pointer hover:text-gray-900">
                      Blog
                    </a>
                  </li>
                </nav>
              </div>
              <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 class="mb-3 text-sm font-medium tracking-widest text-teal-500 uppercase title-font">
                  Support
                </h2>
                <nav class="mb-10 list-none">
                  <li class="mt-3">
                    <a class="text-gray-500 cursor-pointer hover:text-gray-900">
                      Contact Support
                    </a>
                  </li>
                  <li class="mt-3">
                    <a class="text-gray-500 cursor-pointer hover:text-gray-900">
                      Help Resources
                    </a>
                  </li>
                  <li class="mt-3">
                    <a class="text-gray-500 cursor-pointer hover:text-gray-900">
                      Release Updates
                    </a>
                  </li>
                </nav>
              </div>
              <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 class="mb-3 text-sm font-medium tracking-widest text-teal-500 uppercase title-font">
                  Platform
                </h2>
                <nav class="mb-10 list-none">
                  <li class="mt-3">
                    <a class="text-gray-500 cursor-pointer hover:text-gray-900">
                      Terms &amp; Privacy
                    </a>
                  </li>
                  <li class="mt-3">
                    <a class="text-gray-500 cursor-pointer hover:text-gray-900">
                      Pricing
                    </a>
                  </li>
                  <li class="mt-3">
                    <a class="text-gray-500 cursor-pointer hover:text-gray-900">
                      FAQ
                    </a>
                  </li>
                </nav>
              </div>
              <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 class="mb-3 text-sm font-medium tracking-widest text-teal-500 uppercase title-font">
                  Contact
                </h2>
                <nav class="mb-10 list-none">
                  <li class="mt-3">
                    <a class="text-gray-500 cursor-pointer hover:text-teal-900">
                      Send a Message
                    </a>
                  </li>
                  <li class="mt-3">
                    <a class="text-gray-500 cursor-pointer hover:text-teal-900">
                      Request a Quote
                    </a>
                  </li>
                  <li class="mt-3">
                    <a class="text-gray-500 cursor-pointer hover:text-teal-900">
                      +251-93832-0202
                    </a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div className=" items-center justify-center">
            <img
              src="public/images/Screenshot from 2023-09-23 13-41-53.png"
              alt="Imagen relacionada con el programa de fidelización"
              className="w-1/2 h-auto text-center"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
