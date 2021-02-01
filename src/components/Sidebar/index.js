import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"

import sidebarStyles from "./sidebar.module.css"

const StyledBar = styled.div`
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  display: ${({ open }) => (open ? "block" : "none")};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
`;

const Sidebar = ({open, setOpen}) => {
  return (
    <StyledBar open={open} aria-hidden={!open}>
      <div className="z-30 h-screen lg:block-4 shadow-lg relative w-64 my-12 md:my-0">
        <div className="flex flex-col h-full rounded-2xl">
          <div className="ml-6 pt-6 pb-10">
            <Link to="/">
              <h1 class="font-bold text-5xl">
                <span>EC.</span>
              </h1>
            </Link>
          </div>
          <nav className="ml-6">
            <Link className={sidebarStyles.navlink} to="/about">
              <h1 className="text-lg font-normal text-gray-400 hover:text-gray-600 focus:text-gray-600"><span>about</span></h1>
            </Link>
            <Link className={sidebarStyles.navlink} to="/coursework">
              <h1 className="text-lg font-normal text-gray-400 hover:text-gray-600 focus:text-gray-600">coursework</h1>
            </Link>
            <Link className={sidebarStyles.navlink} to="/projects">
              <h1 className="text-lg font-normal text-gray-400 hover:text-gray-600 focus:text-gray-600">projects</h1>
            </Link>
            <div className="flex my-6">
              <div className="grid grid-cols-3 gap-16">
                <a className="flex items-center justify-center" href="https://github.com/emma-campbell">
                  <svg alt="github" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://linkedin.com/ecampbellur">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
                </a>
                <a href="https://drive.google.com/file/d/1pvA0tKpRvcvxEXkcw2KuSn7ZLRT7S_YY">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-10v-1h10v1zm0 2h-10v1h10v-1zm0 3h-10v1h10v-1z"/></svg>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </StyledBar>
  )
}

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
}

export default Sidebar;
