import React from "react"
import styled from "styled-components"

import EmmaCampbell from "../images/emmacampbell.dev.png"
import Othello from "../images/othello.png"
import ParkTest from "../images/Parktest.png"
import CSPSolver from "../images/csp-solver.png"
import SimpleBMPFilter from "../images/BMPFilter.png"
import Matrix2048 from "../images/matrix-2048.png"


const Card = styled.div`
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`

const Projects = () => {
  return (
    <div id="projects" class="flex-col items-center justify-center pb-24">
      <div class="max-w-4xl mx-auto">
        <div class="text-center">
          <h1 class="text-4xl font-bold pb-12">projects</h1>
          <div class="sm:flex flex-wrap justify-center items-center text-center gap-8 space-y-8">
            <Card className="overflow-hidden shadow-lg rounded-2xl h-90 w-64 m-auto">
              <img alt="eggs" src={EmmaCampbell} class="rounded-t-lg" />
              <div class="bg-white w-full p-4 relative">
                <a href="https://github.com/emma-campbell/emmacampbell.dev">
                  <button
                    aria-label="Go to repo"
                    type="button"
                    class="absolute rounded-full bg-blue-100 text-white w-12 h-12 right-8 -top-6"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      width="24"
                      height="24"
                      class="h-6 w-6 text-white mx-auto"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </button>
                </a>
                <p class="text-gray-800 text-xl font-medium mb-2 mt-2">
                  emmacampbell.dev
                </p>
                <p class="text-gray-600 text-xs">
                  My personal portfolio website built using Gatsby (React-based)
                  and Javascript. Utilized skills learned in Introduction to Web
                  Development.
                </p>
                <div class="flex flex-wrap justify-starts items-center mt-6">
                  <div class="text-xs mb-2 mr-2 py-1.5 px-4 text-white bg-blue-100 rounded-2xl">
                    #javascript
                  </div>
                  <div class="text-xs mb-2 mr-2 py-1.5 px-4 text-white bg-blue-100 rounded-2xl">
                    #tailwind
                  </div>
                  <div class="text-xs mb-2 py-1.5 px-4 text-white bg-blue-100 rounded-2xl">
                    #gatsby
                  </div>
                </div>
              </div>
            </Card>
            <Card className="overflow-hidden shadow-lg rounded-2xl h-90 w-64 m-auto">
              <img alt="eggs" src={Othello} class="rounded-t-lg" />
              <div class="bg-white w-full p-4 relative">
                <a href="https://github.com/emma-campbell/othello">
                  <button
                    aria-label="Go to repo"
                    type="button"
                    class="absolute rounded-full bg-blue-100 text-white w-12 h-12 right-8 -top-6"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      width="24"
                      height="24"
                      class="h-6 w-6 text-white mx-auto"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </button>
                </a>
                <p class="text-gray-800 text-xl font-medium mb-2">othello</p>
                <p class="text-gray-600 text-xs">
                  AI-Powered, terminal-based implementation of the popular game
                  Reversi. Built using Java, allows the user to play against an
                  intelligent agent.
                </p>
                <div class="flex flex-wrap justify-starts items-center mt-6">
                  <div class="text-xs mb-2 mr-2 py-1.5 px-4 text-white bg-blue-100 rounded-2xl">
                    #tui
                  </div>
                  <div class="text-xs mb-2 mr-2 py-1.5 px-4 text-white bg-blue-100 rounded-2xl">
                    #java
                  </div>
                  <div class="text-xs mb-2 py-1.5 px-4 text-white bg-blue-100 rounded-2xl">
                    #artificial intelligence
                  </div>
                </div>
              </div>
            </Card>
            <Card className="overflow-hidden shadow-lg rounded-2xl h-90 w-64  m-auto">
              <img alt="eggs" src={ParkTest} class="rounded-t-lg" />
              <div class="bg-white w-full p-4 relative">
                <a href="https://sites.google.com/u.rochester.edu/park-vizualization/home">
                  <button
                    aria-label="Go to repo"
                    type="button"
                    class="absolute rounded-full bg-blue-100 text-white w-12 h-12 right-8 -top-6"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="h-6 w-6 text-white mx-auto"
                    >
                      <path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z" />
                    </svg>
                  </button>
                </a>
                <p class="text-gray-800 text-xl font-medium mb-2">
                  parktest.net
                </p>
                <p class="text-gray-600 text-xs">
                  Parktest.net is an AI powered Parkinson's detection system,
                  aimed at serving those who cannot reach a neurologist. I was
                  part of the team in charge of designing the visiualization of
                  data and diagnosing information.
                </p>
                <div class="flex flex-wrap justify-starts items-center mt-6">
                  <div class="text-xs mb-2 mr-2 py-1.5 px-4 text-white bg-blue-100 rounded-2xl">
                    #react
                  </div>
                  <div class="text-xs mb-2 mr-2 py-1.5 px-4 text-white bg-blue-100 rounded-2xl">
                    #javascript
                  </div>
                  <div class="text-xs mb-2 py-1.5 px-4 text-white bg-blue-100 rounded-2xl">
                    #user centered design
                  </div>
                </div>
              </div>
            </Card>
            <Card className="overflow-hidden shadow-lg rounded-2xl h-90 w-64  m-auto">
              <img alt="eggs" src={CSPSolver} class="rounded-t-lg" />
              <div class="bg-white w-full p-4 relative">
              <a href="https://github.com/emma-campbell/csp-solver">
                  <button
                    aria-label="Go to repo"
                    type="button"
                    class="absolute rounded-full bg-blue-100 text-white w-12 h-12 right-8 -top-6"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      width="24"
                      height="24"
                      class="h-6 w-6 text-white mx-auto"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </button>
                </a>
                <p class="text-gray-800 text-xl font-medium mb-2">csp-solver</p>
                <p class="text-gray-600 text-xs">
                  Implementation of Constraint Satisfaction Problems as defined
                  by <i>Artificial Intelligence: A Modern Approach</i> by Russel &
                  Norvig (3 ed). Currently features a backtracking algorithm
                  that implements forward checking.
                </p>
                <div class="flex flex-wrap justify-starts items-center mt-6">
                  <div class="text-xs mb-2 mr-2 py-1.5 px-4 text-white bg-blue-100 rounded-2xl">
                    #java
                  </div>
                  <div class="text-xs mb-2 mr-2 py-1.5 px-4 text-white bg-blue-100 rounded-2xl">
                    #csp
                  </div>
                  <div class="text-xs mb-2 py-1.5 px-4 text-white bg-blue-100 rounded-2xl">
                    #artificial intelligence
                  </div>
                </div>
              </div>
            </Card>
            <Card className="overflow-hidden shadow-lg rounded-2xl h-90 w-64  m-auto">
              <img alt="eggs" src={SimpleBMPFilter} class="rounded-t-lg" />
              <div class="bg-white w-full p-4 relative">
              <a href="https://github.com/emma-campbell/simple-bmp-filter">
                  <button
                    aria-label="Go to repo"
                    type="button"
                    class="absolute rounded-full bg-blue-100 text-white w-12 h-12 right-8 -top-6"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      width="24"
                      height="24"
                      class="h-6 w-6 text-white mx-auto"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </button>
                </a>
                <p class="text-gray-800 text-xl font-medium mb-2 mt-2">
                  simple-bmp-filter
                </p>
                <p class="text-gray-600 text-xs">
                  A command line program written in C++ which takes a 24-bit BMP image as a parameter
                  and filters the image so there is only one color, while the rest is grayscale.
                </p>
                <div class="flex flex-wrap justify-starts items-center mt-6">
                  <div class="text-xs mb-2 mr-2 py-1.5 px-4 text-white bg-blue-100 rounded-2xl">
                    #C++
                  </div>
                  <div class="text-xs mb-2 py-1.5 px-4 text-white bg-blue-100 rounded-2xl">
                    #command line utility
                  </div>
                </div>
              </div>
            </Card>
            <Card className="overflow-hidden shadow-lg rounded-2xl h-90 w-64  m-auto">
              <img alt="eggs" src={Matrix2048} class="rounded-t-lg" />
              <div class="bg-white w-full p-4 relative">
              <a href="https://github.com/emma-campbell/matrix-2048">
                  <button
                    aria-label="Go to repo"
                    type="button"
                    class="absolute rounded-full bg-blue-100 text-white w-12 h-12 right-8 -top-6"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      width="24"
                      height="24"
                      class="h-6 w-6 text-white mx-auto"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </button>
                </a>
                <p class="text-gray-800 text-xl font-medium mb-2 mt-2">
                  matrix-2048
                </p>
                <p class="text-gray-600 text-xs">
                  Java implementation of the popular web and mobile game 2048. Utilized concepts of OOP, 
                  Java generics, and GUI components.
                </p>
                <div class="flex flex-wrap justify-starts items-center mt-6">
                  <div class="text-xs mb-2 mr-2 py-1.5 px-4 text-white bg-blue-100 rounded-2xl">
                    #java
                  </div>
                  <div class="text-xs mb-2 mr-2 py-1.5 px-4 text-white bg-blue-100 rounded-2xl">
                    #oop
                  </div>
                  <div class="text-xs mb-2 py-1.5 px-4 text-white bg-blue-100 rounded-2xl">
                    #gui
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
