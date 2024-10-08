import React from 'react';
import {
  EducationDescr,
  EducationSection,
  FewWords,
  SpanAll,
  Motivation,
  EducationWrap,
} from './Education.styled';

const Education: React.FC = () => {
  return (
    <EducationSection>
      <EducationWrap>
        <FewWords>A FEW WORDS ABOUT ME.</FewWords>
        <SpanAll>About</SpanAll>
        <Motivation>
          "Your determination and perseverance define your future. Never give
          up!"
        </Motivation>
        <EducationDescr>
          Hello everyone, my name is Igor. I’m from Kyiv, Ukraine. Currently, I
          live and work at Vysočinské nemocnice in Humpolec, Czech Republic,
          where I’ve been for the past 2 years. I graduated from Medical
          University in 2012 and started my medical career shortly after.
          However, in 2021, I developed an interest in single-page website
          development. Realizing I needed more structured knowledge, I took a
          course in HTML/CSS. What began as a hobby quickly became a passion and
          guided my decision on my future tech stack. I then completed a
          year-long Full-Stack Developer course from January 20, 2023, to
          February 14, 2024, and will receive a certificate. At the moment, I
          have more than a year of practice and have 8 projects in my portfolio,
          both team and individual.
        </EducationDescr>
      </EducationWrap>
    </EducationSection>
  );
};

export default Education;
