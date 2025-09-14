import React from 'react';
import {
  SkillsBox,
  SkillsSection,
  SkillsWrap,
  Box,
  BoxSpan,
  BoxList,
  BoxElement,
  SpanSkill,
} from './Skills.styled';
import { FewWords } from 'components/Education/Education.styled';
import { useTranslation } from 'react-i18next';

const Skills: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SkillsSection>
      <SkillsWrap>
        <FewWords>{t('skills.title')}</FewWords>
        <SpanSkill>{t('skills.about')}</SpanSkill>
        <SkillsBox>
          <Box>
            <BoxSpan>{t('skills.tech')}</BoxSpan>
            <BoxList>
              <BoxElement>HTML</BoxElement>
              <BoxElement>CSS</BoxElement>
              <BoxElement>JavaScript</BoxElement>
              <BoxElement>TypeScript</BoxElement>
              <BoxElement>REST API</BoxElement>
              <BoxElement>Axios</BoxElement>
              <BoxElement>Styled-components</BoxElement>
              <BoxElement>Tailwind</BoxElement>
              <BoxElement>Material UI</BoxElement>
              <BoxElement>React.js</BoxElement>
              <BoxElement>Redux.js</BoxElement>
              <BoxElement>Figma</BoxElement>
              <BoxElement>Bootstrap</BoxElement>
              <BoxElement>Mobile-First strategy</BoxElement>
              <BoxElement>Node.js</BoxElement>
              <BoxElement>MongoDB</BoxElement>
              <BoxElement>GIT</BoxElement>
              <BoxElement>Trello</BoxElement>
              <BoxElement>Parcel</BoxElement>
            </BoxList>
          </Box>
          <Box>
            <BoxSpan>{t('skills.soft.soft')}</BoxSpan>
            <BoxList>
              <BoxElement>{t('skills.soft.problem')}</BoxElement>
              <BoxElement>{t('skills.soft.teamwork')}</BoxElement>
              <BoxElement>{t('skills.soft.creativity')}</BoxElement>
              <BoxElement>{t('skills.soft.responsibility')}</BoxElement>
              <BoxElement>{t('skills.soft.communication')}</BoxElement>
              <BoxElement>{t('skills.soft.attention')}</BoxElement>
              <BoxElement>{t('skills.soft.management')}</BoxElement>
              <BoxElement>{t('skills.soft.methodologies')}</BoxElement>
            </BoxList>
          </Box>
          <Box>
            <BoxSpan>{t('skills.languages.languages')}</BoxSpan>
            <BoxList>
              <BoxElement>{t('skills.languages.czech')}</BoxElement>
              <BoxElement>{t('skills.languages.english')}</BoxElement>
              <BoxElement>{t('skills.languages.ukrainian')}</BoxElement>
              <BoxElement>{t('skills.languages.russian')}</BoxElement>
            </BoxList>
          </Box>
        </SkillsBox>
      </SkillsWrap>
    </SkillsSection>
  );
};

export default Skills;
