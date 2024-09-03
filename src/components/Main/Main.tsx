import Summary from 'components/About/Summary';
import Education from 'components/Education/Education';
import Projects from 'components/Projects/Projects';
import Skills from 'components/Skills/Skills';
import React from 'react';
import { MainContainer } from './Main.styled';

const Main: React.FC = () => {
  return (
    <MainContainer>
      <div id="summary">
        <Summary />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
    </MainContainer>
  );
};

export default Main;
