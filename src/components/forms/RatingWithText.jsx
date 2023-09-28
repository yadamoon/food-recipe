import React from 'react'
import Rating from 'react-rating'

const RatingWithText = () => {
  return (
    <div className="flex items-center gap-2">
      <Rating start={0} stop={4} className="font-medium text-yellow-300" />
    </div>
  )
}

export default RatingWithText
