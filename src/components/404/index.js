import React from "react"

const Error404 = () => {
  return (
    <div className="max-w-7xl h-screen flex items-center justify-center">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-9xl tracking-tight font-bold">
          <span className="block inline">
            404.
          </span>
        </h1>
        <p className="text-2xl tracking-tight">
          Sorry, this page doesn't exist!
        </p>
      </div>
    </div>
  )
}

export default Error404;