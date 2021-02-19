import React from "react"

const Card = ({title, description, languages}) => {
  return (
    <div class="shadow-lg rounded-2xl md:w-48 max-h-64 p-4 bg-white relative overflow-hidden">
      <div class="">
          <p class="text-gray-800 text-lg font-medium mb-2">
              {title}
          </p>
          <p class="text-gray-400 text-xs">
              {description}
          </p>
          <p className="text-gray-800 text-sm font-medium mt-2">
            Languages: {languages}
          </p>
      </div>
    </div>
  )
}

export default Card;