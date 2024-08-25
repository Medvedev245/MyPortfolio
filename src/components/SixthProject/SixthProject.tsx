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
import SecondPhoto from '../../Files/Project-5.jpg';

const SixthProject: React.FC = () => {
  return (
    <ProjectsElement>
      <NameProject>6. Image Finder</NameProject>
      <ContainerElement>
        <ImgProject src={SecondPhoto} alt="#" />
        <Element>
          <DescrProject>
            Team project. Welcome to TastyTreats, your go-to online culinary
            haven! Discover a world of delicious recipes from around the globe,
            where you can explore, create, and connect with fellow food
            enthusiasts !
          </DescrProject>
          <ProjectBoxList>
            <BoxElement>HTML 5</BoxElement>
            <BoxElement>CSS 3</BoxElement>
            <BoxElement>JavaScript</BoxElement>
            <BoxElement>Eslint</BoxElement>
            <BoxElement>Npm-package</BoxElement>
            <BoxElement>React</BoxElement>
            <BoxElement>Style-components</BoxElement>
            <BoxElement>Rest API</BoxElement>
          </ProjectBoxList>
        </Element>
      </ContainerElement>
      <LinksProject>
        <Links
          to={'https://github.com/Sergii-Drozdiuk/Tasty-Treats'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledGithubIcon />
          GitHub
        </Links>
        <Links
          to={'https://sergii-drozdiuk.github.io/Tasty-Treats/'}
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

export default SixthProject;
