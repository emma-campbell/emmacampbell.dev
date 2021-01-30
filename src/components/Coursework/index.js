import React from "react"

import Card from "./Card"

const Coursework = () => {
  return (
    <div className="flex items-center justify-center max-w-7xl">  
      <div className="flex-col mx-6 my-6">
        <h1 className="text-3xl font-bold">
          Relevant Courses
        </h1>
        <div className="flex h-screen items-centered justify-center">
          <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4">
            <Card title="Introduction to Computer Science" description="Hands-on introduction to programming using the Java programming language. Teaches fundamentals of programming and more advanced topics. Emphasizes algorithmic thinking and computational problem solving and provides an introduction to the concepts and methods used in Computer Science."/>
            <Card title="Data Structures & Algorithms" description="Abstract data types (e.g., sets, mappings, and graphs) and their implementation as concrete data structures in Java. Analysis of the running times of programs operating on such data structures, and basic techniques for program design, analysis, and proof of correctness (e.g., induction and recursion)"/>
            <Card title="Computational Theory" description="Investigation of several formal systems influential in computer science, and also some of their applications (e.g. inspiring and providing the foundation for a computer programming style, or providing the basis for solving important practical problems like communications protocols, compiling, systems analysis, graphics ...)"/>
            <Card title="Web Development" description="Along this journey, you will learn influential Web technologies such as HTTP, HTML, JavaScript, CSS, the LAMP stack, XML, JSON, Ajax, WebSockets, and modern MVC frameworks. Even though you will be doing a lot of programming in this course, its purpose is not to teach you to become an expert in any particular language or framework."/>
            <Card title="Mobile App Development" description="Coursework covers user interface designs and functional algorithms for mobile devices and unique user interactions using multi-touch technologies. Object-oriented design including model-view-controller paradigm, memory management."/>
            <Card title="Computer Organization" description="Introduction to computer architecture and the layering of hardware/software systems. Topics include instruction set design; logical building blocks; computer arithmetic; processor organization; the memory hierarchy (registers, caches, main memory, and secondary storage); I/Obuses, devices, and interrupts; microcode and assembly language; virtual machines; the roles of the assembler, linker, compiler, and operating system; technological trends and the future of computing hardware."/>
            <Card title="Human-Computer Interaction" description="The course will explore the design, implementation, and evaluation of user-driven prototypes to be used by real users. Students will study the theoretical methods for design and evaluation, including requirements gathering, survey design, ethnography, rapid prototyping, and evaluation techniques."/>
            <Card title="Artifical Intelligence" description="Introduces fundamental principles and techniques from Artificial Intelligence, including heuristic search, automated reasoning, handling uncertainty, and machine learning, to prepare students for advanced AI courses."/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coursework;