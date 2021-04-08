import React, { useState, useEffect } from "react"
import Navbar from "./Navigation"

import { detectMobileAndTablet, isSSR } from "../utils"

if (typeof(window) !== "undefined") {
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({children}) => {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    let handleWindowSizeChange
    if (!isSSR) {
      handleWindowSizeChange = () => setWindowWidth(window.innerWidth)
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleWindowSizeChange)
    return () => window.removeEventListener("resize", handleWindowSizeChange)
  }, [windowWidth])

  return (
    <div className="flex">
      <Navbar/>
      <div className="w-screen h-screen flex-col items-center justify-center">
        {children}
      </div>
    </div>
  )
}

export default Layout