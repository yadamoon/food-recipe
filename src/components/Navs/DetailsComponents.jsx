import React, { useState } from 'react'

const DetailsComponents = ({ recipes }) => {
  const [show, setShow] = useState(false)
  const seeMore = () => {
    setShow(!show)
  }
  return (
    <div>
      <h1 className="text-5xl text-center">Details Componenets</h1>
      <div class="min-h-screen flex items-center justify-center">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 p-5">
          {recipes.map((recipe) => (
            <div key={recipe.id}>
              {
                <div class="bg-gray-100 text-center rounded-lg">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full border rounded"
                  />
                  <p className="font-bold text-3xl uppercase text-center   ">
                    {recipe.title}
                  </p>
                  {!show && <p>{recipe.descripition}</p>}
                  {show && (
                    <p className="font-thin">
                      <span>5 steps ....</span>
                      <span>5 ingridents ....</span>
                    </p>
                  )}
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
