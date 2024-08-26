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
import SecondPhoto from '../../Files/Project-6.jpg';

const SixthProject: React.FC = () => {
  return (
    <ProjectsElement>
      <NameProject>6. Image Finder</NameProject>
      <ContainerElement>
        <ImgProject src={SecondPhoto} alt="#" />
        <Element>
          <DescrProject>
            Pet project: a website for browsing and searching images based on a
            given theme. The site features API integration and pagination,
            offering a beautiful, lightweight, and elegant project for my
            portfolio.!
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
            <BoxElement>Yup</BoxElement>
            <BoxElement>Formik</BoxElement>
          </ProjectBoxList>
        </Element>
      </ContainerElement>
      <LinksProject>
        <Links
          to={'https://github.com/Medvedev245/images-04'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledGithubIcon />
          GitHub
        </Links>
        <Links
          to={'https://medvedev245.github.io/images-04/'}
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
