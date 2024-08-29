import React from 'react';
import { FewWords, SpanAll } from 'components/Education/Education.styled';
import { ProjectsSection, ProjectsWrap, ProjectsList } from './Projects.styled';
import FirstProject from 'components/FirstProject/FirstProject';
import SecondProject from 'components/SecondProject/SecondProject';
import ThirdProject from 'components/ThirdProject/ThirdProject';
import FourthProject from 'components/FourthProject/FourthProject';
import FifthProject from 'components/FifthProject/FifthProject';
import SixthProject from 'components/SixthProject/SixthProject';
import SeventhProject from 'components/SeventhProject/SeventhProject';
import EighthProject from 'components/EighthProject/EighthProject';

const Projects: React.FC = () => {
  return (
    <ProjectsSection>
      <ProjectsWrap>
        <FewWords>My Projects</FewWords>
        <SpanAll>Portfolio</SpanAll>
        <ProjectsList>
          <FirstProject />
          <SecondProject />
          <ThirdProject />
          <FourthProject />
          <FifthProject />
          <SixthProject />
          <SeventhProject />
          <EighthProject />
        </ProjectsList>
      </ProjectsWrap>
    </ProjectsSection>
  );
};

export default Projects;
