import React from "react";
import styled from "styled-components";

import HeaderImg from "../../assets/my-experience.png";

import Timeline from "./Timeline";

const StyledExperience = styled.section.attrs({
  className: "bg-green-light max-w-7xl w-full flex items-center justify-center",
})``;

const Content = styled.div.attrs({
  className: " ",
})``;

const HeaderImage = styled.img.attrs({
  className: "h-100",
})``;

const Experience = () => {
  return (
    <StyledExperience>
      <HeaderImage src={HeaderImg} alt="My Experiences" />
      <Timeline />
    </StyledExperience>
  );
};

export default Experience;
