import React from "react";
import styled from "styled-components";

const StyledAbout = styled.section.attrs({
  className:
    "bg-white pt-20",
})`
  position: relative;
`;

const Content = styled.div.attrs({
  className: "max-7xl flex flex-col justify-center items-center"
})``;

const LeftAlignedText = styled.div.attrs({
  className: "text-left flex flex-col lg:pb-40 pb-20",
})``;

const Paragraph = styled.div.attrs({
  className: "pb-12",
})`
  & b {
    font-weight: 700;
  }

  & a {
    font-weight: 700;
    text-decoration: underline;
  }

  & a:hover {
    color: #e76f51;
    transition: 0.25s ease-in;
  }
`;

const Slant = styled.div.attrs({
  className: "bg-white",
})`
  & svg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10vw;
    fill: #299d8f;

    & polygon {
      width: 100%;
    }
  }
`;

const About = () => {
  return (
    <StyledAbout id="about">
      <Content>

        <LeftAlignedText>
          <Paragraph>
            <p className="text-3xl font-light">
              I was born in <b>Columbus, OH</b> and went to college at the{" "}
              <b>University of Rochester</b> where I
            </p>
            <p className="text-3xl font-light">
              studied <b>Computer Science</b> with a focus in{" "}
              <b>Human-Computer Interaction</b>.
            </p>
          </Paragraph>
          <Paragraph>
            <p className="text-3xl font-light">
              Outside of <b>coding</b> and <b>designing</b>, I enjoy
            </p>
            <ul className="list-disc pl-8">
              <li>
                <p className="text-3xl font-light">
                  Playing and coaching soccer ⚽️
                </p>
              </li>
              <li>
                <p className="text-3xl font-light">Obsessing over dogs 🐶</p>
              </li>
              <li>
                <p className="text-3xl font-light">Learning about astronomy 🔭</p>
              </li>
              <li>
                <p className="text-3xl font-light">Playing the guitar 🎸</p>
              </li>
            </ul>
          </Paragraph>
          <Paragraph>
            <p className="text-3xl font-light">
              I enjoy working on projects that <b>make an impact</b> on the people
              that they're built for, and
            </p>
            <p className="text-3xl font-light">
              working on tools that <b>change the world</b>. Sound like a good
              match? Check out my
            </p>
            <p className="text-3xl font-light">
              <a>projects</a> or <a>contact me</a>.
            </p>
          </Paragraph>
        </LeftAlignedText>
      </Content>
      <Slant>
        <svg viewBox="0,0,100,100" preserveAspectRatio="none">
          <polygon points="0,20 100,80 100,100 0,100" />
        </svg>
      </Slant>
    </StyledAbout>
  );
};

export default About;
