import React from "react"

import Headshot from "../../images/me.jpg"

const About = () => {
  return (
    <div className="flex items-center justify-center my-12 md:my-0">
      <div className="max-w-xl p-8 md:p-0">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-6xl tracking-tight">
            <span className="block inline font-medium">about</span>
          </h1>
          <p className="text-1xl max-w-xl tracking-tight">
            <span className="block inline">
              I grew up in the digital age. I remember building HTML webpages
              when I was young -- and helping my parents, friends and family
              with all their electronics. Strangely enough though, it wasn't
              until spring of my freshman year that I found programming, and
              have been in love ever since.
            </span>
          </p>
          <div className="flex items-center justify-center">
            <img
              src={Headshot}
              className="rounded-full w-64 h-64 shadow-md mt-6"
              alt="Myself!"
            />
          </div>
          <div className="max-w-xl">
            <p className="text-1xl tracking-tight font-bold mt-6">
              <span className="block inline">education</span>
            </p>
            <p className="text-1xl tracking-tight text-gray-500">
              University of Rochester, B.A. Computer Science
            </p>
            <p className="text-1xl tracking-tight font-bold mt-6">
              <span className="block inline">languages</span>
            </p>
            <p className="text-1xl tracking-tight  text-gray-500">
              C, Python, Java, Javascript, HTML, CSS
            </p>
            <p className="text-1xl tracking-tight font-bold mt-6">
              <span className="block inline">experiences</span>
            </p>
            <p className="text-1xl tracking-tight">
              Ares Sportwear - Fullstack Software Engineer Intern
            </p>
            <p className="text-1xl tracking-tight text-gray-500">
              Responsible for the development of a "t-shirt designer" web
              application for a medium-sized screen-printing and embrodiery
              company using Express and Angular.
            </p>
            <p className="text-1xl tracking-tight mt-6">
              Quillen Astrophysics Lab - Research Assistant
            </p>
            <p className="text-1xl tracking-tight text-gray-500">
              Wrote simulation scripts for arduino powered robots to study the
              details of fluid dynamics at varying Reynolds numbers with further
              implications in astronimical collisions.
            </p>
            <p className="text-1xl tracking-tight font-bold mt-6">
              <span className="block inline">other skills</span>
            </p>
            <p className="text-1xl tracking-tight text-gray-500">
              Git, Docker, SQLite, MySQL, Express, React, Bulma, Vue,
              Flask, Gatsby, Tailwind
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
