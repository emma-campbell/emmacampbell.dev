import React from "react"

import heroStyles from "./hero.module.css"
import Headshot from "../images/me.jpg"

const Hero = () => {
  return (
    <div className="bg-green-200 overflow-hidden">
      <div className="max-w-7xl mx-auto xl:pt-20 lg:pt-16 md:pt-8 sm:pt-4 pb-0">
        <div className="relative z-10 flex items-center justify-center">
          <div className="grid xl:grid-cols-2 sm:grid-cols-1 sm:gap-8 flex items-center justify-center">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-5xl tracking-tight text-white">
                <span className="block inline">Hello 👋</span>
                <br />
                <span className="block inline">
                  My name is <b>Emma Campbell</b>
                </span>
              </h1>
              <p className="tracking-tight text-white pt-3">
                <span className="block inline">
                  Computer Science Student focued in Human-Computer
                </span>
                <br />
              </p>
              <p className="tracking-tight text-white">
                <span className="block inline">Interaction</span>
                <br />
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="rounded-full"
                src={Headshot}
                style={{ width: 350, height: 350 }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container max-w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className={heroStyles.topwave}
        >
          <path
            fill="#242728"
            fill-opacity="1"
            d="M0,32L20,42.7C40,53,80,75,120,96C160,117,200,139,240,170.7C280,203,320,245,360,245.3C400,245,440,203,480,202.7C520,203,560,245,600,266.7C640,288,680,288,720,282.7C760,277,800,267,840,224C880,181,920,107,960,101.3C1000,96,1040,160,1080,176C1120,192,1160,160,1200,170.7C1240,181,1280,235,1320,256C1360,277,1400,267,1420,261.3L1440,256L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
          ></path>
          <g transform="translate(0, 30)">
            <path
              fill="#A7AEAB"
              fill-opacity="1"
              d="M0,32L20,42.7C40,53,80,75,120,96C160,117,200,139,240,170.7C280,203,320,245,360,245.3C400,245,440,203,480,202.7C520,203,560,245,600,266.7C640,288,680,288,720,282.7C760,277,800,267,840,224C880,181,920,107,960,101.3C1000,96,1040,160,1080,176C1120,192,1160,160,1200,170.7C1240,181,1280,235,1320,256C1360,277,1400,267,1420,261.3L1440,256L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  )
}

export default Hero
