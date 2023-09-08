import React, { useState } from 'react'

const DetailsComponents = ({ recipes }) => {
  const [show, setShow] = useState(false)
  const seeMore = () => {
    setShow(!show)
  }
  return (
    <div>
      <h1 className="text-5xl text-center font-extrabold text-teal-800">
        Our Food Recipes
      </h1>
      <div class="w-full  flex items-center justify-center">
        <div class=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 sm:grid-cols-1 p-5">
          {recipes.map((recipe) => (
            <div key={recipe.id}>
              {
                <div class="bg-gray-100 text-center rounded-lg">
                  <img
                    src="public/images/recipeIMG.jpg"
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
                    className="text-white p-2 pl-20 pr-20 border rounded-xl bg-yellow-300 text-center uppercase "
                    onClick={seeMore}
                  >
                    Ingrident
                  </button>
                  <br />
                  <br />
                  <button
                    className="text-white pl-24 pr-24 border rounded-xl p-2  bg-teal-700 text-center"
                    onClick={seeMore}
                  >
                    View Details
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
