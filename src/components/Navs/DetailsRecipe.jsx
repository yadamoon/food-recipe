import React from 'react'

const DetailsRecipe = () => {
  return (
    // <div className="space-y-2">
    //   <br />
    //   <div className=" flex items-center justify-center text-center bg-slate-50 space-y-6">
    //     <img
    //       className=" w-full rounded-t-lg md:rounded-l-lg"
    //       src="public/images/recipeIMG.jpg"
    //       alt=""
    //     />
    //     <div></div>
    //     <div className="flex flex-col justify-start p-6">
    //       <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-700">
    //         Card title
    //       </h5>
    //       <p className="mb-4 text-base text-neutral-600 dark:text-neutral-500">
    //         This is a wider card with supporting text below as a natural lead-in
    //         to additional content. This content is a little bit longer.
    //       </p>
    //       <p className="text-xs text-neutral-500 dark:text-neutral-500">
    //         Last updated 3 mins ago
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div>
      <br />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
        <div class="p-4 bg-white flex items-center justify-center">
          <img
            className=" w-full rounded-t-lg md:rounded-l-lg"
            src="public/images/recipeIMG.jpg"
            alt=""
          />
        </div>
        <div class="p-4 bg-white rounded-md   ">
          <div>
            <h1 class="text-green-600 text-5xl font-bold">Details View</h1>

            <b>Tailwind CSS Grid Auto Rows Class</b>
            <div
              class="m-8 p-8 grid bg-gray-600 grid-cols-2 
                     grid-flow-row gap-4 auto-rows-fr"
            >
              <div class="p-4 bg-green-200 ">
                <span className="uppercase text-2xl">Ingridents</span>
                <br />
                <br />
                <div className="flex  grid-col-2  gap-4 items-center justify-center ">
                  <div className="border border-black w-1/12">salad</div>
                  <div className="border border-black">salad</div>
                </div>
                <hr />
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
