import React from "react";
import styled from "styled-components";

import HeaderImg from "../../assets/my-experience.png";

import Timeline from "./Timeline";

const StyledExperience = styled.section.attrs({
  className: "bg-green-light flex justify-center items-center",
})``;

const Content = styled.div.attrs({
  className: "max-w-7xl flex justify-center items-center space-x-6",
})``;

const HeaderImage = styled.img.attrs({
  className: "h-100",
})``;

const Experience = () => {
  return (
    <StyledExperience>
      <Content>
        <HeaderImage src={HeaderImg} alt="My Experiences" />
        <Timeline />
      </Content>
    </StyledExperience>
  );
};

export default Experience;
