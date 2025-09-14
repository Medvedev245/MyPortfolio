import React from 'react';
import {
  EducationDescr,
  EducationSection,
  FewWords,
  SpanAll,
  Motivation,
  EducationWrap,
} from './Education.styled';
import { useTranslation } from 'react-i18next';

const Education: React.FC = () => {
  const { t } = useTranslation();
  return (
    <EducationSection>
      <EducationWrap>
        <FewWords>{t('education.title')}</FewWords>
        <SpanAll>{t('education.about')}</SpanAll>
        <Motivation>{t('education.motivation')}</Motivation>
        <EducationDescr>{t('education.description')}</EducationDescr>
      </EducationWrap>
    </EducationSection>
  );
};

export default Education;
