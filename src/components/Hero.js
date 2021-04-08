import React from "react"

const Hero = () => {
  return (
    <div className="h-3/6 flex items-center justify-center pb-0 mb-0">
      <div class="max-w-6xl pt-32">
        <div className="text-center md:text-left">
          <h1 className="text-5xl lg:text-6xl tracking-tight">
            <span className="block inline">
              Hello{" "}
              <span role="img" aria-label="wave">
                👋
              </span>
            </span>
            <br />
            <span className="block inline">
              My name is <b>Emma Campbell</b>
            </span>
          </h1>
          <p className="tracking-tight pt-3 text-1xl md:text-2xl lg:text-3xl">
            <span className="text-gray-400 block inline">
              Computer Science student focused in Human-Computer
            </span>
            <br />
          </p>
          <p className="tracking-tight text-1xl md:text-2xl lg:text-3xl">
            <span className="text-gray-400 block inline">Interaction</span>
          </p>
        </div>
        <div class="flex items-center justify-center pt-2 md:justify-end space-x-4">
          <a href="https://github.com/emma-campbell">
            <button class="bg-blue-100 py-2 px-4 rounded-full text-center text-base text-lg font-medium text-white">Github</button>
          </a>
          <a href="https://www.linkedin.com/in/ec-campbell/">
            <button class="bg-blue-100 py-2 px-4 rounded-full text-center text-base text-lg font-medium text-white">Linkedin</button>
          </a>
          <a href="https://drive.google.com/file/d/1_xccNiXLW_O744iJG-m-Hls0WGQDAreR/view?usp=sharing">
            <button class="bg-blue-100 py-2 px-4 rounded-full text-center text-base text-lg font-medium text-white">Resume</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
