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
import FirstPhoto from '../../Files/Project-2.jpg';

const FirstProject: React.FC = () => {
  return (
    <ProjectsElement>
      <NameProject>Doctor_Tests</NameProject>
      <ContainerElement>
        <ImgProject src={FirstPhoto} alt="#" />
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
        <Links to={'#'}>
          <StyledGithubIcon width={30} height={30} />
          GitHub
        </Links>
        <Links to={'#'}>
          <StyledSiteIcon width={30} height={30} />
          Live Page
        </Links>
      </LinksProject>
    </ProjectsElement>
  );
};

export default FirstProject;
