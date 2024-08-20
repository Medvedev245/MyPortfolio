import { FewWords, SpanAll } from 'components/Education/Education.styled';
import React from 'react';
import {
  ProjectsSection,
  ProjectsWrap,
  ProjectsList,
  ProjectsElement,
  NameProject,
  DescrProject,
  LinksProject,
  Links,
  Element,
  ProjectBoxList,
} from './Projects.styled';
import { ReactComponent as GithubIcon } from '../../Files/github-svgrepo-com.svg';
import { ReactComponent as SiteIcon } from '../../Files/site-svgrepo-com.svg';
import { BoxElement } from 'components/Skills/Skills.styled';

const Projects: React.FC = () => {
  return (
    <ProjectsSection>
      <ProjectsWrap>
        <FewWords>My Projects</FewWords>
        <SpanAll>Portfolio</SpanAll>
        <ProjectsList>
          <ProjectsElement>
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
            <img
              src="https://plus.unsplash.com/premium_photo-1721769390364-f6029aceeba4?q=80&w=1783&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="#"
              width={300}
              height={300}
            />
          </ProjectsElement>
          <ProjectsElement>
            <div>
              <span>2</span>
              <p></p>
              <div></div>
              <div></div>
            </div>
            <img src="#" alt="#" />
          </ProjectsElement>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ProjectsList>
      </ProjectsWrap>
    </ProjectsSection>
  );
};

export default Projects;
