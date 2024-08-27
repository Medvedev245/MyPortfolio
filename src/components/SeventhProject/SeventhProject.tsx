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
import FirstPhoto from '../../Files/Project-7.jpg';

const SeventhProject: React.FC = () => {
  return (
    <ProjectsElement>
      <NameProject>7. MyPhoneBook</NameProject>
      <ContainerElement>
        <Element>
          <DescrProject>
            Pet project. A phonebook for recording phone numbers with options to
            create and edit entries. It also includes a search feature. The
            project is built with React using hooks.
          </DescrProject>
          <ProjectBoxList>
            <BoxElement>HTML</BoxElement>
            <BoxElement>CSS</BoxElement>
            <BoxElement>JavaScript</BoxElement>
            <BoxElement>React.js</BoxElement>
            <BoxElement>Redux.js</BoxElement>
            <BoxElement>React Hooks</BoxElement>
            <BoxElement>Style components</BoxElement>
            <BoxElement>Material UI</BoxElement>
            <BoxElement>axios</BoxElement>
            <BoxElement>formik</BoxElement>
            <BoxElement>Yup</BoxElement>
            <BoxElement>notiflix</BoxElement>
          </ProjectBoxList>
        </Element>
        <ImgProject src={FirstPhoto} alt="#" />
      </ContainerElement>
      <LinksProject>
        <Links
          to={'https://github.com/Medvedev245/MyPhoneBook/tree/main'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledGithubIcon />
          GitHub
        </Links>
        <Links
          to={'https://medvedev245.github.io/MyPhoneBook/'}
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

export default SeventhProject;
