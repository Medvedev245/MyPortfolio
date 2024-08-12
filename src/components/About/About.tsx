import React from 'react';
import { AboutSection, PhotoWrap, Img } from './About.styled';
import MyPhoto from '../../Files/me.jpg';
const About: React.FC = () => {
  return (
    <AboutSection>
      <h1>About</h1>
      <PhotoWrap>
        <Img src={MyPhoto} alt="MyPhoto" />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
          soluta, accusantium, ut praesentium commodi blanditiis explicabo
          doloremque voluptatem est unde perferendis inventore quam eum, amet
          quas ipsum? Quam, maxime dolorem.
        </p>
      </PhotoWrap>
    </AboutSection>
  );
};

export default About;
