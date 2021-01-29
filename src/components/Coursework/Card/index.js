import React from "react"

const Card = ({title, description}) => {
  return (
    <div class="shadow-lg rounded-2xl w-56 max-h-72 p-4 bg-white relative overflow-hidden">
      <div class="">
          <p class="text-gray-800 text-lg font-medium mb-2">
              {title}
          </p>
          <p class="text-gray-400 text-xs">
              {description}
          </p>
      </div>
    </div>
  )
}

export default Card;