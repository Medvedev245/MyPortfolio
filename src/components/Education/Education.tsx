import React from 'react';
import {
  EducationDescr,
  EducationSection,
  FewWords,
  SpanAbout,
  Motivation,
} from './Education.styled';

const Education: React.FC = () => {
  return (
    <EducationSection>
      <FewWords>A FEW WORDS ABOUT ME.</FewWords>
      <SpanAbout>About</SpanAbout>
      <Motivation>
        "Your determination and perseverance define your future. Never give up!"
      </Motivation>
      <EducationDescr>
        Hello everyone, my name is Igor. I’m from Kyiv, Ukraine. Currently, I
        live and work at Vysočinské nemocnice in Humpolec, Czech Republic, where
        I’ve been for the past 2 years. I graduated from Medical University in
        2012 and started my medical career shortly after. However, in 2021, I
        developed an interest in single-page website development. Realizing I
        needed more structured knowledge, I took a course in HTML/CSS. What
        began as a hobby quickly became a passion and guided my decision on my
        future tech stack. I then completed a year-long Full-Stack Developer
        course from January 20, 2023, to February 14, 2024, and will receive a
        certificate. I currently have 6 projects in my portfolio, including both
        team-based and individual projects.
      </EducationDescr>
    </EducationSection>
  );
};

export default Education;
