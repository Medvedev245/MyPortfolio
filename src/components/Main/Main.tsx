import About from 'components/About/About';
import Education from 'components/Education/Education';
import Experience from 'components/Experience/Experience';
import Projects from 'components/Projects/Projects';
import Skills from 'components/Skills/Skills';
import React from 'react';
import { MainContainer } from './Main.styled';

const Main: React.FC = () => {
  return (
    <MainContainer>
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
    </MainContainer>
  );
};

export default Main;
