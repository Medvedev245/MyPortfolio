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
} from './Summary.styled';
import MyPhoto from '../../Files/me.jpg';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <AboutSection>
      <AboutWrap>
        <PhotoWrap>
          <Img src={MyPhoto} alt="MyPhoto" />

          <Descr>
            <AboutText>Ihor Medvediev</AboutText>
            <AboutDesc>Full-stack developer</AboutDesc>
            <Text>
              Experienced IT professional with a strong background in analytical
              problem-solving. Full-stack developer with knowledge of HTML, CSS,
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
