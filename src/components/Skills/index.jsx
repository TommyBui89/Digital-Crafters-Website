import React from "react";
import Marquee from "react-fast-marquee";
import styled from "styled-components";
import bootstrapLogo from "../../images/LogoImages/bootstrap-logo.png";
import cssLogo from "../../images/LogoImages/css-logo.webp";
import dockerLogo from "../../images/LogoImages/docker-logo.png";
import expressJsLogo from "../../images/LogoImages/express-js-logo.png";
import figmaLogo from "../../images/LogoImages/figma-logo.png";
import firebaseLogo from "../../images/LogoImages/firebase-logo.webp";
import flutterLogo from "../../images/LogoImages/flutter-logo.png";
import gitLogo from "../../images/LogoImages/git-logo.png";
import githubLogo from "../../images/LogoImages/github-logo.png";
import htmlLogo from "../../images/LogoImages/html-logo.webp";
import javaScriptLogo from "../../images/LogoImages/javaScript-logo.png";
import nextjsLogo from "../../images/LogoImages/nextjs-logo.png";
import nodeJsLogo from "../../images/LogoImages/node.js-logo.png";
import postgresqlLogo from "../../images/LogoImages/postgresql-logo.png";
import postmanLogo from "../../images/LogoImages/postman-logo.png";
import pythonLogo from "../../images/LogoImages/python-logo.png";
import reactLogo from "../../images/LogoImages/react-logo.png";
import tailwindLogo from "../../images/LogoImages/tailwind-logo.png";
import typescriptLogo from "../../images/LogoImages/typescript-logo.png";
import cLogo from "../../images/LogoImages/c_icon.png";
import NET_logo from "../../images/LogoImages/NET_Logo.png";
import mongodb_logo from "../../images/LogoImages/mongodb_logo.webp";

// Skills Data
const skills = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", image: htmlLogo },
      { name: "CSS", image: cssLogo },
      { name: "JavaScript", image: javaScriptLogo },
      { name: "React", image: reactLogo },
      { name: "Next.js", image: nextjsLogo },
      { name: "Tailwind", image: tailwindLogo },
      { name: "Bootstrap", image: bootstrapLogo },
      { name: "Flutter", image: flutterLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", image: nodeJsLogo },
      { name: "Express.js", image: expressJsLogo },
      { name: "PostgreSQL", image: postgresqlLogo },
      { name: "Firebase", image: firebaseLogo },
      { name: "Docker", image: dockerLogo },
      { name: "Python", image: pythonLogo },
      { name: "TypeScript", image: typescriptLogo },
      { name: ".NET", image: NET_logo },
      { name: "C#", image: cLogo },
      { name: "MongoDB", image: mongodb_logo },
    ],
  },
  // {
  //   title: "Tools",
  //   skills: [
  //     { name: "Git", image: gitLogo },
  //     { name: "GitHub", image: githubLogo },
  //     { name: "Figma", image: figmaLogo },
  //     { name: "Postman", image: postmanLogo },
  //   ],
  // },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 100px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;

const Title = styled.h3`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }

  span {
    background: -webkit-linear-gradient(225deg, rgb(132, 0, 255) 0%, rgb(230, 0, 255) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 30px;
  overflow: hidden;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SkillImage = styled.img`
  width: 80px;
  height: 80px;
  margin: 10px;
  object-fit: contain;
`;

const SkillName = styled.div`
  color: white;
  font-size: 16px;
  font-weight: 500;
  margin-top: 8px;
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>
          Skills <span>&</span> Technologies
        </Title>
        <Desc>Using the latest tech this world has to offer</Desc>
        <SkillsContainer>
          {skills.map((category, index) => (
            <Marquee
              key={index}
              direction={index % 2 === 1 ? "right" : "left"}
              speed={20}
              gradient={false}
              pauseOnHover={true}
            >
              {[...category.skills, ...category.skills].map((skill, skillIndex) => (
                <SkillItem key={skillIndex}>
                  <SkillImage src={skill.image} alt={skill.name} />
                  <SkillName>{skill.name}</SkillName>
                </SkillItem>
              ))}
            </Marquee>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;