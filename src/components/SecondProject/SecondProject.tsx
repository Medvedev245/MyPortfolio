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
import SecondPhoto from '../../Files/Project-2.jpg';

const FirstProject: React.FC = () => {
  return (
    <ProjectsElement>
      <NameProject>2. Doctor_Tests</NameProject>
      <ContainerElement>
        <ImgProject src={SecondPhoto} alt="#" />
        <Element>
          <DescrProject>
            Aweasome Pet project. Website for taking and studying tests. Has
            header, main, footer. The header contains the logo and navigation,
            the main contains the main content, and the footer contains links to
            social networks. <br></br> To date, the page has been accessed
            24.300 times, according to Google Search Console !
          </DescrProject>
          <ProjectBoxList>
            <BoxElement>HTML</BoxElement>
            <BoxElement>CSS</BoxElement>
            <BoxElement>JavaScript</BoxElement>
            <BoxElement>TypeScript</BoxElement>
            <BoxElement>React.js</BoxElement>
            <BoxElement>Redux.js</BoxElement>
            <BoxElement>React-routes</BoxElement>
            <BoxElement>React Hooks</BoxElement>
            <BoxElement>Style components</BoxElement>
            <BoxElement>Material UI</BoxElement>
          </ProjectBoxList>
        </Element>
      </ContainerElement>
      <LinksProject>
        <Links
          to={'https://github.com/Medvedev245/Doctor_Tests'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledGithubIcon />
          GitHub
        </Links>
        <Links
          to={'https://medvedev245.github.io/Doctor_Tests/'}
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
