import React from "react"

import Logo from "../images/logo.png"

const Navbar = () => {
  return (
    <nav className="bg-white shadow fixed w-full">
      <div class="max-w-6xl mx-auto px-8">
        <div class="flex items-center justify-between h-16">
          <a class="flex-shrink-0" href="/">
            <img class="h-24 w-24" src={Logo} alt="Emma Campbell"/>
          </a>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              <a href="/#about"class="text-gray-400 hover:text-gray-800 rounded-md text-lg font-medium">
                about
              </a>
              <a href="/#projects" class="text-gray-400 hover:text-gray-800 rounded-md text-lg font-medium">
                projects
              </a>
              <a href="/#contact" class="text-gray-400 hover:text-gray-800 rounded-md text-lg font-medium">
                contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar