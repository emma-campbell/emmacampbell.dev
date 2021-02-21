import React from "react"

import Burger from "./Burger"

const Navbar = ({open, setOpen}) => {
  return (
    <nav class="bg-white shadow fixed w-full px-5 py-8 z-10">
      <div class="max-w-7xl">
        <div class=" flex items-center">
          <Burger open={open} setOpen={setOpen}/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
