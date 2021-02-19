import React, { useState, useEffect } from "react"

import Sidebar from "../Sidebar"
import Navbar from "../Navbar"

import {detectMobileAndTablet, isSSR} from "../../utils/"

const Layout = ({ children }) => {
  
  const [open, setOpen] = useState(false)
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

  let navigation
  if (detectMobileAndTablet(windowWidth)) {
    navigation = (
      <>
        <div className="block md:hidden z-50">
          <header>
            <Navbar open={open} setOpen={setOpen} />
          </header>  
        </div>
        
        
        <div className="h-screen sticky top-0 z-40">
          <Sidebar open={open} setOpen={setOpen}/>
        </div>
      </>
    )
  } else {
    navigation = (
      <>
        <div className="hidden md:block">
          <div className="h-screen sticky top-0 z-40">
            <Sidebar open={!open} setOpen={setOpen}/>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="flex">
      {/* Either Sidebar or Burger Menu -- Dependent on window size */}
      {navigation}

      {/* Main Content */}
      <main className="w-screen h-screen relative md:relative md:overflow-hidden z-0">{children}</main>
    </div>
  )
}

export default Layout;
