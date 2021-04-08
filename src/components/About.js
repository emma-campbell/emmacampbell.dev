import React from "react"
import styled from "styled-components"

import HeadShot from "../images/me.jpg"
import Arrow from "../images/down-arrow.svg"

const StyledArrow = styled.div`
  padding-top: 0;
  margin-top: 0;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #273036;
  position: relative;
  margin: auto;
`

const About = () => {
  return (
    <div
      id="about"
      class="bg-black flex flex-col items-center justify-center pt-24"
    >
      {/* DESKTOP */}

      <div class="max-w-3xl mx-auto bg-white p-8 pt-12 rounded-xl shadow-xl hidden md:block">
        <div class="flex-col">
          <div class="flex items-center justify-between">
            <img class="h-64" src={HeadShot} alt="headshot" />
            <div class="flex-col text-left space-x-4">
              <h1 class="pl-4 pb-2 text-3xl font-bold">about</h1>
              <p class="pb-2 text-sm text-gray-400">
              I grew up wanting to be an astronaut. The idea of space,
              extraterrestrial planets, and rockets enamored me. However, as I
              began to mature I found that I was claustrophobic. My dreams of
              being an astronaut were nixed, but luckily, I found software. Ever since 
              I have been coding whatever I can, whenever I can, and have been pursuing
              a B.A. in Computer Science.
              </p>
              <p class="text-md font-bold">
                If you're looking for a hardworking, creative thinker and
                problem solver who is eager to learn and quick to help out, we
                should get in touch.
              </p>
            </div>
          </div>
          <div class="flex justify-end">
            <a href="#contact">
              <button class="bg-blue-100 py-2 px-4 rounded-full text-center text-base text-lg font-bold text-white">
                CONTACT
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div class="shadow-lg rounded-2xl w-80 bg-white md:hidden">
        <div class="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" class="block relative">
            <img
              alt="headshot"
              src={HeadShot}
              class="mx-auto object-cover rounded-full h-32 w-32 "
            />
          </a>
          <h1 class="pb-2 text-3xl font-bold">about</h1>
          <div class="text-center">
            <p class="pb-2 text-sm text-gray-400">
              I grew up wanting to be an astronaut. The idea of space,
              extraterrestrial planets, and rockets enamored me. However, as I
              began to mature I found that I was claustrophobic. My dreams of
              being an astronaut were nixed, but luckily, I found software. Ever since 
              I have been coding whatever I can, whenever I can, and have been pursuing
              a B.A. in Computer Science.
            </p>
            <p class="text-md font-bold pb-2">
              If you're looking for a hardworking, creative thinker and problem
              solver who is eager to learn and quick to help out, we should get
              in touch.
            </p>
          </div>
          <div class="flex items-center justify-center">
            <a href="#contact">
              <button class="bg-blue-100 py-2 px-4 rounded-full text-center text-base text-lg font-bold text-white">
                CONTACT
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* DOWN ARROW */}
      <StyledArrow>
        <a href="/#projects">
          <img src={Arrow} class="w-8 h-8" alt="arrow" />
        </a>
      </StyledArrow>
    </div>
  )
}

export default About
