import React from "react"

import Card from "./Card"

const Coursework = () => {
  return (
    <div className="flex items-center justify-center my-12 md:my-0">
      <div className="max-w-xl">
        <div className="flex-col p-8 md:p-0">
          {/* TITLE */}
          <h1 className="text-6xl font-medium">coursework</h1>

          {/* GRID */}
          <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            <Card
              title="Introduction to Computer Science"
              description="An introduction to Computer Science course taught using the Java programming language. Taught algorithmic thinking and computational problem solving."
              languages="Java"
            />
            <Card
              title="Data Structures & Algorithms"
              description="Introduction to Data Structures and Algorithms. Learned skills such as run time analysis (Big-O Notation) and basic techniques for program design and proof of correctness."
              languages="Java"
            />
            <Card
              title="Computational Theory"
              description="Gained knowledge of several formal systems in Computer Science, such as automata, parsing algorithms, functional programming, relational algebra, and circuits. Really dove into the theoretical vs implementation."
              languages="C"
            />
            <Card
              title="Web Development"
              description="Developed an understanding of API development using Flask framework and concepts that can apply to any web development environment independent of framework."
              languages="Python, Javascript"
            />
            <Card
              title="Mobile App Development"
              description="Used Swift to develop IOS applications, covering topics from animation and graphics, to API usage, and MCV framework. Gained familiarity with Xcode and Xcode tools."
              languages="Swift"
            />
            <Card
              title="Computer Organization"
              description="Introductory course to Computer Architecture. Learned about topics ranging from binary number representation, to code optimization, to the memory heirarchy and cache organization."
              languages="C"
            />
            <Card
              title="Human-Computer Interaction"
              description="A interdisiplinary approach to building large scale applications, learning the ways in which humans interact with computers in order to build effective interfaces."
              languages="Python, C#, Javascript"
            />
            <Card
              title="Artifical Intelligence"
              description="Introduces fundamental Artificial Intelligence techniques and principles such as heuristic search, automated reasoning, handling uncertainity, and machine learning."
              languages="Java, Python"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coursework
