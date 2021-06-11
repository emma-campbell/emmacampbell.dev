import React from "react";
import styled from "styled-components";

import BannerImg from "../../assets/banner-img.png";

// STYLED DIVS
// =============================================================================

const StyledHero = styled.section.attrs({
  className: "bg-green-light max-w-8xl pt-24",
})`
  position: relative;
`;

const HeroContent = styled.div.attrs({
  className: "flex items-center justify-center space-x-8",
})``;

const Slant = styled.div.attrs({
  className: "bg-green-light h-full",
})`
  & svg {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10vw;
    fill: #f2f8fd;

    & polygon {
        width: 100%;
    }
  }
`;

const HeroText = styled.div.attrs({
  className: "z-30",
})``;

const ButtonLinks = styled.div.attrs({})``;

const BannerImage = styled.img.attrs({
  className: "h-110 z-30",
})``;
// =============================================================================

const Hero = () => {
  return (
    <StyledHero>
      <Slant>
        <svg viewBox="0,0,100,100" preserveAspectRatio="none">
          <polygon width="100%" points="0,80 100,20 100,100 0,100" />
        </svg>
      </Slant>
      <HeroContent>
        <HeroText>
          {" "}
          {/* BANNER TEXT */}
          <h1 className="text-5xl text-white">Hi, my name is Emma!</h1>
          <p className="text-xl text-white">
            Developer focused on engineering highly beautiful
          </p>
          <p className="text-xl text-white">and functional web experiences.</p>
          {/* BANNER LINKS */}
          <ButtonLinks></ButtonLinks>
        </HeroText>
        <BannerImage src={BannerImg} alt="banner-img" />
      </HeroContent>
    </StyledHero>
  );
};

export default Hero;
