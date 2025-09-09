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
            <AboutText>{t('summary.name')}</AboutText>
            <AboutDesc>Full-stack developer</AboutDesc>
            <Text>{t('summary.description')}</Text>
          </Descr>
        </PhotoWrap>
      </AboutWrap>
    </AboutSection>
  );
};

export default About;
