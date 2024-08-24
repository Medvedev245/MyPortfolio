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
} from './FirstProject.styled';
import { BoxElement } from 'components/Skills/Skills.styled';
import FirstPhoto from '../../Files/Project-1.jpg';

const FirstProject: React.FC = () => {
  return (
    <ProjectsElement>
      <NameProject>MyMovies</NameProject>
      <ContainerElement>
        <Element>
          <DescrProject>
            Pet project. Website fors watching movies. Has header, main, footer.
            The header contains the logo and navigation, the main contains the
            main content, and the footer contains links to social networks. On
            the site you can view not only information on the selected film, but
            also actors and reviews.
          </DescrProject>
          <ProjectBoxList>
            <BoxElement>HTML</BoxElement>
            <BoxElement>CSS</BoxElement>
            <BoxElement>JavaScript</BoxElement>
            <BoxElement>React.js</BoxElement>
            <BoxElement>Redux.js</BoxElement>
            <BoxElement>React-routes</BoxElement>
            <BoxElement>React Hooks</BoxElement>
            <BoxElement>REST API</BoxElement>
            <BoxElement>Style components</BoxElement>
            <BoxElement>Material UI</BoxElement>
          </ProjectBoxList>
        </Element>
        <ImgProject src={FirstPhoto} alt="#" />
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
