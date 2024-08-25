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
import SecondPhoto from '../../Files/Project-4.jpg';

const SixthProject: React.FC = () => {
  return (
    <ProjectsElement>
      <NameProject>Je le ferai</NameProject>
      <ContainerElement>
        <ImgProject src={SecondPhoto} alt="#" />
        <Element>
          <DescrProject>
            A team project built with pure (vanilla) HTML and CSS, with minimal
            use of JavaScript. <br></br>Indulge in the finest handcrafted
            chocolates and have a variety of exquisite flavors delivered right
            to your door.
          </DescrProject>
          <ProjectBoxList>
            <BoxElement>HTML 5</BoxElement>
            <BoxElement>CSS 3</BoxElement>
            <BoxElement>JavaScript</BoxElement>
            <BoxElement>Eslint</BoxElement>
            <BoxElement>Npm-package</BoxElement>
          </ProjectBoxList>
        </Element>
      </ContainerElement>
      <LinksProject>
        <Links
          to={'https://github.com/Irulik/group-project-13-je-le-ferai'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledGithubIcon />
          GitHub
        </Links>
        <Links
          to={'https://irulik.github.io/group-project-13-je-le-ferai/'}
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
