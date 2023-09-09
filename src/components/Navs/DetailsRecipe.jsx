import React from 'react'

const DetailsRecipe = () => {
  return (
    <div>
      <br />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full ">
        <div class="p-4 bg-white flex items-center justify-center">
          <img
            className=" w-full rounded-t-lg md:rounded-l-lg"
            src="public/images/recipeIMG.jpg"
            alt=""
          />
        </div>
        <div class="p-4 bg-white rounded-md   ">
          <div>
            <h1 class="text-green-600 text-5xl font-bold space-y-2">
              Details View
            </h1>
            <br />
            <b className="text-2xl "> Title : </b>
            <div
              class="m-8 p-8 grid  grid-cols-2 
                     grid-flow-row gap-4 auto-rows-fr w-full"
            >
              <div class="p-4 border ">
                <span className="uppercase text-2xl">Ingridents</span>
                <br />
                <br />
                <hr />
                <div className=" grid grid-cols-2 gap-3 ">
                  <div className="border h-28"></div>
                  <div className="border"></div>
                  <div className="border h-28"></div>
                  <div className="border"></div>
                  <div className="border h-28"></div>
                  <div className="border"></div>
                  <div className="border h-28"></div>
                  <div className="border"></div>
                </div>
              </div>

              <div class="p-4 bg-white  rounded">
                <span className="uppercase text-2xl">Instraction</span>
                <br />
                <br />
                <div>
                  <ol class="relative text-gray-500 border-l border-gray-200 dark:border-gray-300 dark:text-gray-400">
                    <li class="mb-10 ml-6">
                      <span class="absolute flex items-center justify-center w-8 h-8 bg-green-500 text-white hover:bg-green-700 rounded-full -left-4 ring-4 ring-white dark:ring-gray-300 ">
                        1
                      </span>
                      <h3 class="font-medium leading-tight">Personal Info</h3>
                      <p class="text-sm">Step details here</p>
                    </li>
                    <li class="mb-10 ml-6">
                      <span class="absolute flex items-center justify-center w-8 h-8 bg-green-500 text-white hover:bg-green-700  rounded-full -left-4 ring-4 ring-white dark:ring-gray-300">
                        2
                      </span>
                      <h3 class="font-medium leading-tight">Account Info</h3>
                      <p class="text-sm">Step details here</p>
                    </li>
                    <li class="mb-10 ml-6">
                      <span class="absolute flex items-center justify-center w-8 h-8 bg-green-500 text-white hover:bg-green-700  rounded-full -left-4 ring-4 ring-white dark:ring-gray-300">
                        3
                      </span>
                      <h3 class="font-medium leading-tight">Review</h3>
                      <p class="text-sm">Step details here</p>
                    </li>
                    <li class="ml-6">
                      <span class="absolute flex items-center justify-center w-8 h-8 bg-green-500 text-white hover:bg-green-700  rounded-full -left-4 ring-4 ring-white dark:ring-gray-300">
                        4
                      </span>
                      <h3 class="font-medium leading-tight">Confirmation</h3>
                      <p class="text-sm">Step details here</p>
                    </li>
                  </ol>
                </div>
                <hr />
              </div>
              {/* <div class="p-4 bg-green-200">
                Bootstratp become replacement of CSS
              </div>
              <div class="p-4 bg-green-200">Cascading Style Sheet</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsRecipe
