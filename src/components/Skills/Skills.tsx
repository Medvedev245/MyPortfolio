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

const Skills: React.FC = () => {
  return (
    <SkillsSection>
      <SkillsWrap>
        <FewWords>My strengths and abilities.</FewWords>
        <SpanSkill>My skills</SpanSkill>
        <SkillsBox>
          <Box>
            <BoxSpan>Tech Skills</BoxSpan>
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
            <BoxSpan>Soft Skills</BoxSpan>
            <BoxList>
              <BoxElement>Problem-solving</BoxElement>
              <BoxElement>Teamwork</BoxElement>
              <BoxElement>Creativity</BoxElement>
              <BoxElement>Responsibility</BoxElement>
              <BoxElement>Communication</BoxElement>
              <BoxElement>Attention to details</BoxElement>
              <BoxElement>Time management</BoxElement>
              <BoxElement>Agile/Scrum methodologies</BoxElement>
            </BoxList>
          </Box>
          <Box>
            <BoxSpan>Languages</BoxSpan>
            <BoxList>
              <BoxElement>Czech Advanced</BoxElement>
              <BoxElement>English - Upper-Intermediate</BoxElement>
              <BoxElement>Ukrainian - Native</BoxElement>
              <BoxElement>Russian - Native</BoxElement>
            </BoxList>
          </Box>
        </SkillsBox>
      </SkillsWrap>
    </SkillsSection>
  );
};

export default Skills;
