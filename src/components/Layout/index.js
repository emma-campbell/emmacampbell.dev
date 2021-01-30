import React from "react"

import Sidebar from "../Sidebar"

const Layout = ({children}) => {
  return (
    <div className="flex">
      <aside className="h-screen sticky top-0">
        <Sidebar/>
      </aside>

      <main className="w-screen h-screen overflow-hidden">
        {children}
      </main>
    </div>
  )
}

export default Layout;