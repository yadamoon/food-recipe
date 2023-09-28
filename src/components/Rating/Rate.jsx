import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

let Rate = () => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  return (
    <div className="flex">
      {[...Array(5)].map((star, index) => {
        let currentRating = index + 1
        return (
          <label
            onClick={() => {
              console.log('handler', rating)
              setRating(currentRating)
            }}
          >
            {/* <input
              type="radio"
              name="rating"
              value={currentRating}
              
            /> */}
            <FaStar
              key={index}
              size={20}
              value={currentRating}
              color={
                currentRating <= hover || (currentRating <= rating && !hover)
                  ? 'orange'
                  : 'gray'
              }
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        )
      })}
    </div>
  )
}

export default Rate
