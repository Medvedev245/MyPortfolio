import React from 'react';
import {
  ProjectsElement,
  NameProject,
  DescrProject,
  LinksProject,
  Links,
  Element,
  ProjectBoxList,
  ImgProject,
  ContainerElement,
  StyledGithubIcon,
  StyledSiteIcon,
} from '../FirstProject/FirstProject.styled';
import { BoxElement } from 'components/Skills/Skills.styled';
import FirstPhoto from '../../Files/Project-3.jpg';

const FirstProject: React.FC = () => {
  return (
    <ProjectsElement>
      <NameProject>TaskPro</NameProject>
      <ContainerElement>
        <Element>
          <DescrProject>
            Team project. "TaskPro" web application with user registration.
            Works with the server database to store tasks. Adaptive layout.
            Role: developer - FrontEnd.
            <br></br>
            "TaskPro" is a user-friendly task board that helps teams organize
            tasks and track progress effortlessly. Its intuitive design enhances
            collaboration and productivity, making project management smooth and
            efficient.
          </DescrProject>
          <ProjectBoxList>
            <BoxElement>HTML</BoxElement>
            <BoxElement>CSS</BoxElement>
            <BoxElement>JavaScript</BoxElement>
            <BoxElement>Axios</BoxElement>
            <BoxElement>Rest API</BoxElement>
            <BoxElement>Webpack</BoxElement>
            <BoxElement>React.js</BoxElement>
            <BoxElement>Redux.js</BoxElement>
            <BoxElement>React-routes</BoxElement>
            <BoxElement>React Hooks</BoxElement>
            <BoxElement>Style components</BoxElement>
            <BoxElement>Material UI</BoxElement>
          </ProjectBoxList>
        </Element>
        <ImgProject src={FirstPhoto} alt="#" />
      </ContainerElement>
      <LinksProject>
        <Links
          to={'https://github.com/Oleksii81/project-TeamBoard'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledGithubIcon />
          GitHub
        </Links>
        <Links
          to={'https://oleksii81.github.io/project-TeamBoard/'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledSiteIcon />
          Live Page
        </Links>
      </LinksProject>
    </ProjectsElement>
  );
};

export default FirstProject;
