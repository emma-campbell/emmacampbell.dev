import React from "react"

import HeroStyles from "./hero.module.css"

const Hero = () => {
  return (
    <div className="max-w-7xl h-screen flex items-center justify-center p-4 md:p-0">
      <div className="text-center md:text-left">
        <h1 className="text-5xl lg:text-6xl tracking-tight">
          <span className="block inline">
            Hello{" "}
            <span role="img" aria-label="wave" className={HeroStyles.wave}>
              👋
            </span>
          </span>
          <br />
          <span className="block inline">
            My name is <b>Emma Campbell</b>
          </span>
        </h1>
        <p className="tracking-tight pt-3 text-1xl md:text-2xl lg:text-3xl">
          <span className="block inline">
            Computer Science student focused in Human-Computer
          </span>
          <br />
        </p>
        <p className="tracking-tight text-1xl md:text-2xl lg:text-3xl">
          <span className="block inline">Interaction</span>
        </p>
      </div>
    </div>
  )
}

export default Hero
