import React from 'react';
import { FewWords, SpanAll } from 'components/Education/Education.styled';
import {
  ProjectsSection,
  ProjectsWrap,
  ProjectsList,
  // ProjectsElement,
  // NameProject,
  // DescrProject,
  // LinksProject,
  // Links,
  // Element,
  // ProjectBoxList,
  // ImgProject,
} from './Projects.styled';
// import { ReactComponent as GithubIcon } from '../../Files/github-svgrepo-com.svg';
// import { ReactComponent as SiteIcon } from '../../Files/site-svgrepo-com.svg';
// import { BoxElement } from 'components/Skills/Skills.styled';
// import FirstPhoto from '../../Files/Project-1.jpg';
import FirstProject from 'components/FirstProject/FirstProject';

const Projects: React.FC = () => {
  return (
    <ProjectsSection>
      <ProjectsWrap>
        <FewWords>My Projects</FewWords>
        <SpanAll>Portfolio</SpanAll>
        <ProjectsList>
          {/* <ProjectsElement>
            <Element>
              <NameProject>Site Name</NameProject>
              <DescrProject>
                Descr Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Exercitationem, repudiandae beatae doloribus ratione id quis
                perferendis sunt quas consequuntur, cumque tempora numquam ex
                voluptatem nam culpa quaerat quo sequi porro?
              </DescrProject>
              <ProjectBoxList>
                <BoxElement>HTML</BoxElement>
                <BoxElement>CSS</BoxElement>
                <BoxElement>JavaScript</BoxElement>
                <BoxElement>React.js</BoxElement>
                <BoxElement>Redux.js</BoxElement>
                <BoxElement>REST API</BoxElement>
                <BoxElement>TypeScript</BoxElement>
              </ProjectBoxList>
              <LinksProject>
                <Links to={'#'}>
                  <GithubIcon width={30} height={30} />
                  GitHub
                </Links>
                <Links to={'#'}>
                  <SiteIcon width={30} height={30} />
                  Live Page
                </Links>
              </LinksProject>
            </Element>
            <ImgProject src={FirstPhoto} alt="#" />
          </ProjectsElement> */}
          <li>
            <FirstProject />
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ProjectsList>
      </ProjectsWrap>
    </ProjectsSection>
  );
};

export default Projects;
