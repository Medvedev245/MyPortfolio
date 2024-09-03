import styled from 'styled-components';

export const AboutSection = styled.section`
  width: 100%;
  margin-bottom: 80px;
  @media screen and (max-width: 1200px) {
  }

  @media screen and (max-width: 767px) {
    width: 320px;
  }
`;
export const AboutWrap = styled.div`
  margin: 0 auto;
  width: 1200px;
  padding: 0 20px;
  @media screen and (max-width: 1200px) {
    max-width: 768px;
  }

  @media screen and (max-width: 767px) {
    width: 320px;
    padding: 0 5px;
  }
`;

export const AboutText = styled.h1`
  margin-bottom: 25px;
  font-size: 45px;
  @media screen and (max-width: 1200px) {
    margin-bottom: 20px;
    /* font-size: 20px; */
  }

  @media screen and (max-width: 767px) {
  }
`;
export const AboutDesc = styled.h2`
  font-size: 30px;
  margin-bottom: 15px;

  @media screen and (max-width: 1200px) {
    font-size: 28px;
  }
`;

export const Text = styled.p`
  font-size: 25px;
  font-weight: 500;
  text-align: justify;
  line-height: 1.3;
  @media screen and (max-width: 1200px) {
    font-size: 20px;
  }
`;

export const PhotoWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 70px;
  margin: 0 auto;
  align-items: flex-start;

  @media screen and (max-width: 1200px) {
    align-items: center;
    gap: 20px;
    flex-direction: column;
  }

  @media screen and (max-width: 767px) {
  }
`;

export const Img = styled.img`
  width: 450px;
  border-radius: 20px;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-1px); /* Приподнимает изображение на 10px */
  }
  @media screen and (max-width: 1200px) {
    width: 410px;
    height: 490px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 767px) {
    width: 280px;
    height: 325px;
  }
`;

export const Descr = styled.div`
  /* height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; */
  @media screen and (max-width: 1200px) {
    /* font-size: 20px; */
  }
`;

// export const AboutSection = styled.section``;

// export const AboutSection = styled.section``;

// export const AboutSection = styled.section``;

// export const AboutSection = styled.section``;

// export const AboutSection = styled.section``;
