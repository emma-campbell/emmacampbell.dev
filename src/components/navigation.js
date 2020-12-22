import React from "react"
import { Link } from "gatsby"

import navStyles from "./navigation.module.css"

const Nav = () => {
  return (
    <nav className="bg-green-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* LOGO */}
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-white">
                <b>ec.</b>
              </h1>
            </div>
          </div>

          {/* LINKS */}
          <div className="hidden md:block">
            <div className="flex lg:space-x-6 md:space-x-4">
              <Link className={navStyles.navlink} to="/#about">
                <h2 className="text-white">about</h2>
              </Link>
              <Link className={navStyles.navlink} to="/#portfolio">
                <h2 className="text-white">portfolio</h2>
              </Link>
              <Link className={navStyles.navlink} to="/#blog">
                <h2 className="text-white">blog</h2>
              </Link>
              <Link className={navStyles.navlink} to="/#contact">
                <h2 className="text-white">contact</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
