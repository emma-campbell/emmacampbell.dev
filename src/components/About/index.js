import React from "react";
import styled from "styled-components";

const StyledAbout = styled.section.attrs({
  className: "bg-white max-w-8xl pt-20 flex flex-col justify-center items-center",
})``;

const LeftAlignedText = styled.div.attrs({
  className: "text-left flex flex-col",
})``;

const Paragraph = styled.div.attrs({
  className: "pb-12",
})`
  & b {
    font-weight: 700;
  }
`;

const About = () => {
  return (
    <StyledAbout id="about">
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
    </StyledAbout>
  );
};

export default About;
