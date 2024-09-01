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
import SecondPhoto from '../../Files/Project-8.jpg';

const EighthProject: React.FC = () => {
  return (
    <ProjectsElement>
      <NameProject>8. MyPortfolio</NameProject>
      <ContainerElement>
        <ImgProject src={SecondPhoto} alt="#" />
        <Element>
          <DescrProject>
            Pet project: "MyPortfolio" website detailing my work experience,
            completed courses, and all my projects with links to GitHub and live
            pages.
          </DescrProject>
          <ProjectBoxList>
            <BoxElement>HTML 5</BoxElement>
            <BoxElement>CSS 3</BoxElement>
            <BoxElement>JavaScript</BoxElement>
            <BoxElement>Eslint</BoxElement>
            <BoxElement>Npm-package</BoxElement>
            <BoxElement>React</BoxElement>
            <BoxElement>Style-components</BoxElement>
            <BoxElement>TypeScript</BoxElement>
          </ProjectBoxList>
        </Element>
      </ContainerElement>
      <LinksProject>
        <Links
          to={'https://github.com/Medvedev245/MyPortfolio'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledGithubIcon />
          GitHub
        </Links>
        <Links
          to={'https://medvedev245.github.io/MyPortfolio/'}
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

export default EighthProject;
