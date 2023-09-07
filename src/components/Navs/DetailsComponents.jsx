import React, { useState } from 'react'

const DetailsComponents = ({ recipes }) => {
  const [show, setShow] = useState(false)
  const seeMore = () => {
    setShow(!show)
  }
  return (
    <div>
      <h1 className="text-5xl text-center">Details Componenets</h1>
      <div class="w-full  flex items-center justify-center">
        <div class=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 sm:grid-cols-1 p-5">
          {recipes.map((recipe) => (
            <div key={recipe.id}>
              {
                <div class="bg-gray-100 text-center rounded-lg">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full border rounded text-3xl"
                  />
                  <p className="font-bold uppercase text-center   ">
                    {recipe.title}
                  </p>

                  {!show && (
                    <p className="font-thin">
                      <span>5 steps ....</span>
                      <span>5 ingridents ....</span>
                    </p>
                  )}
                  <div>{show && <p>{recipe.body}</p>}</div>
                  <button
                    className="text-white p-2 border rounded bg-teal-700 text-center"
                    onClick={seeMore}
                  >
                    see More
                  </button>
                </div>
              }
            </div>
          ))}

          <div></div>
        </div>
      </div>

      {/* //todo new card */}
    </div>
  )
}

export default DetailsComponents
