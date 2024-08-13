import React from 'react';
import {
  AboutSection,
  PhotoWrap,
  Img,
  AboutText,
  Descr,
  AboutWrap,
  AboutDesc,
  Text,
} from './About.styled';
import MyPhoto from '../../Files/me.jpg';
const About: React.FC = () => {
  return (
    <AboutSection>
      <AboutWrap>
        {/* <AboutText>About</AboutText> */}
        <PhotoWrap>
          <Img src={MyPhoto} alt="MyPhoto" />

          <Descr>
            <AboutText>Ihor Medvediev</AboutText>
            <AboutDesc>Full-stack developer</AboutDesc>
            <Text>
              Experienced IT professional with a strong background in analytical
              problem- solving. Front-End developer with knowledge of HTML, CSS,
              JavaScript, React and Node.js. All projects were completed using
              the Agile/Scrum methodology and strict adherence to deadlines.
              Excellent interpersonal skills and a proactive approach to
              problem-solving. Fast learner, responsible and always up for a
              challenges. Looking for opportunities to contribute to a dynamic
              and innovative IT team.
            </Text>
          </Descr>
        </PhotoWrap>
      </AboutWrap>
    </AboutSection>
  );
};

export default About;
