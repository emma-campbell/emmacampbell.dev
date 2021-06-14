import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav.attrs({
  className: "bg-green-dark shadow fixed w-full z-50",
})``;

const NavigationContent = styled.div.attrs({
  className: "mx-auto px-8 flex items-center justify-between h-20",
})``;

const Links = styled.div.attrs({
  className: "hidden md:block ml-10 flex items-baseline space-x-8",
})``;

const Link = styled.a.attrs({
  className: "text-white rounded-md text-lg font-bold",
})`
  position: relative;
  text-decoration: none;
  display: inline-block;

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  &:hover:after {
    width: 100%;
    left: 0;
  }
`;

const Navigation = () => {
  return (
    <StyledNav>
      <NavigationContent>
        <a className="flex-shrink-0" href="/">
          <h1 className="text-5xl text-white">EC</h1>
        </a>
        <Links>
          <Link href="/#about">about</Link>
          <Link href="/#experience">experience</Link>
          <Link href="/#projects">projects</Link>
          <Link href="/#contact">contact</Link>
        </Links>
      </NavigationContent>
    </StyledNav>
  );
};

export default Navigation;
