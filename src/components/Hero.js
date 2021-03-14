import React from "react"
import styled from "styled-components"

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
        
      </div>
    </div>
  )
}

export default Hero
