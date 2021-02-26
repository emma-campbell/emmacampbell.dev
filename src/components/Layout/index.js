import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Sidebar from "../Sidebar"
import Navbar from "../Navbar"

import { detectMobileAndTablet, isSSR } from "../../utils/"

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]')
}

const StyledMain = styled.div`
  margin: 0;
  padding: 0;
  transform: ${({ open }) => (open ? "translateX(16rem)" : "translateX(0)")};
  filter: ${({ open }) => (open ? "blur(10px)" : "blur(0px)")};
`

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
          <Sidebar open={open} setOpen={setOpen} />
        </div>
      </>
    )
  } else {
    navigation = (
      <>
        <div className="hidden md:block">
          <div className="h-screen sticky top-0 z-40">
            <Sidebar open={!open} setOpen={setOpen} />
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
      <div className="w-screen h-screen relative overflow-y-scroll z-0">
        <StyledMain>{children}</StyledMain>
      </div>
    </div>
  )
}

export default Layout
