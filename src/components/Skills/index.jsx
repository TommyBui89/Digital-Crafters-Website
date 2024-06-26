import React from 'react';
import './Skills.css';
import bootstrapLogo from '../../images/LogoImages/bootstrap-logo.png';
import cssLogo from '../../images/LogoImages/css-logo.webp';
import dockerLogo from '../../images/LogoImages/docker-logo.png';
import expressJsLogo from '../../images/LogoImages/express-js-logo.png';
import figmaLogo from '../../images/LogoImages/figma-logo.png';
import firebaseLogo from '../../images/LogoImages/firebase-logo.webp';
import flutterLogo from '../../images/LogoImages/flutter-logo.png';
import gitLogo from '../../images/LogoImages/git-logo.png';
import githubLogo from '../../images/LogoImages/github-logo.png';
import htmlLogo from '../../images/LogoImages/html-logo.webp';
import javaScriptLogo from '../../images/LogoImages/javaScript-logo.png';
import nextjsLogo from '../../images/LogoImages/nextjs-logo.png';
import nodeJsLogo from '../../images/LogoImages/node.js-logo.png';
import postgresqlLogo from '../../images/LogoImages/postgresql-logo.png';
import postmanLogo from '../../images/LogoImages/postman-logo.png';
import pythonLogo from '../../images/LogoImages/python-logo.png';
import reactLogo from '../../images/LogoImages/react-logo.png';
import tailwindLogo from '../../images/LogoImages/tailwind-logo.png';
import typescriptLogo from '../../images/LogoImages/typescript-logo.png';
import vueLogo from '../../images/LogoImages/vue-logo.png';

const skills = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', image: htmlLogo },
      { name: 'CSS', image: cssLogo },
      { name: 'JavaScript', image: javaScriptLogo },
      { name: 'React', image: reactLogo },
      { name: 'Vue', image: vueLogo },
      { name: 'Next.js', image: nextjsLogo },
      { name: 'Tailwind', image: tailwindLogo },
      { name: 'Bootstrap', image: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', image: nodeJsLogo },
      { name: 'Express.js', image: expressJsLogo },
      { name: 'PostgreSQL', image: postgresqlLogo },
      { name: 'Firebase', image: firebaseLogo },
      { name: 'Docker', image: dockerLogo },
      { name: 'Python', image: pythonLogo },
      { name: 'TypeScript', image: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', image: gitLogo },
      { name: 'GitHub', image: githubLogo },
      { name: 'Figma', image: figmaLogo },
      { name: 'Postman', image: postmanLogo },
      { name: 'Flutter', image: flutterLogo },
    ],
  },
];

const Skills = () => (
  <div className="container" id="skills">
    <div className="wrapper">
      <div className="primary__title">
        Skills & Technologies
      </div>
      <div className="text__muted description">Using the latest tech this world has to offer</div>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-group" key={index}>
            <div className={`skill-list ${skill.title === 'Backend' ? 'skill-list-left' : ''}`}>
              {[...Array(3)].flatMap((_, repeatIndex) => (
                skill.skills.map((item, idx) => (
                  <div className="skill-item" key={`${repeatIndex}-${idx}`}>
                    <img className="skill-image" src={item.image} alt={item.name} />
                  </div>
                ))
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Skills;
