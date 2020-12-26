import React from "react"

const About = () => {
  return (
    <div className=" bg-green-100 overflow-hidden">
      <div className="max-w-7xl mx-auto xl:pt-20 lg:pt-16 md:pt-8 sm:pt-4 pb-0">
        <div className="relative z-10">
          <div className="text-center">
            <h1 className="font-semibold">
              <span>About</span>
            </h1>
            <br/>
          </div>
          <div className="text-left">
            <p className="text-2xl">
              For as long as I can remember, I've been fascinated by computers. Born in 1998, I was lucky enough to grow up in the digital age.
              I remember building basic HTML webpages in middle school, and always fixing my friends technology when they couldn't figure it out.
              It just came <i>naturally</i> to me.<br /><br/>
              However, I didn't really know programming until I got to college. My spring semester of my freshmen year at the University of Rochester,
              I took a course called The Art of Programming -- taught in python. I fell in love with programming and haven't looked back ever since. I
              love the challenge that it brings every single day and the reward in solving that challenge.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
