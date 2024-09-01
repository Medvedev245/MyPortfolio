import Summary from 'components/About/Summary';
import Education from 'components/Education/Education';

import Projects from 'components/Projects/Projects';
import Skills from 'components/Skills/Skills';
import React from 'react';
import { MainContainer } from './Main.styled';

const Main: React.FC = () => {
  return (
    <MainContainer>
      <Summary />
      <Education />
      <Skills />
      <Projects />
    </MainContainer>
  );
};

export default Main;
