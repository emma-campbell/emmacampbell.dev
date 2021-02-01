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
      <div className="h-screen lg:block-4 shadow-lg relative w-64 my-12 md:my-0">
        <div className="h-full rounded-2xl">
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
