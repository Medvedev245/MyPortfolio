import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ImgProject = styled.img`
  width: 300px;
  height: 300px;
  transition: transform 0.3s ease, background-color 0.3s ease;
  @media screen and (max-width: 1200px) {
  }

  @media screen and (max-width: 767px) {
  }
`;

export const Links = styled(Link)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  text-decoration: none;
  padding: 10px;
  cursor: pointer;
  background: #c5bfcb52;
  border-radius: 10px;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: #4b168052;
    transform: translateY(-3px);
  }

  @media screen and (max-width: 1200px) {
  }

  @media screen and (max-width: 767px) {
  }
`;

export const ProjectsSection = styled.section`
  width: 100vw;
  text-align: start;
  margin-bottom: 80px;
  @media screen and (max-width: 1200px) {
    /* width: 768px; */
  }

  @media screen and (max-width: 767px) {
    /* width: 100%; */
  }
`;

export const ProjectsWrap = styled.div`
  width: 1200px;
  /* height: 70px; */
  margin: 0 auto;
  /* padding: 0 20px; */
  @media screen and (max-width: 1200px) {
    /* padding: 0 5px; */
    width: 768px;
  }

  @media screen and (max-width: 767px) {
    width: 320px;
  }
`;

export const ProjectsList = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 20px;

  @media screen and (max-width: 1200px) {
  }

  @media screen and (max-width: 767px) {
  }
`;

export const ProjectsElement = styled.li`
  display: flex;
  padding: 20px;
  width: 768px;
  flex-direction: row;
  gap: 20px;
  text-align: justify;
  background-color: rgba(243, 244, 246, 1);
  border-radius: 10px;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: rgba(209, 214, 224, 1);
    transform: scale(1.05);

    /* Ховер-эффект на ссылки внутри ProjectsElement */
    ${ImgProject} {
      transform: rotate(5deg); /* Увеличивает и поднимает изображение */
      /* background-color: #4d4c5c52; */
    }
  }

  @media screen and (max-width: 1200px) {
    width: 700px;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (max-width: 767px) {
  }
`;

export const Element = styled.div`
  @media screen and (max-width: 1200px) {
    width: 340px;
  }

  @media screen and (max-width: 767px) {
  }
`;

export const ProjectBoxList = styled.ul`
  flex-wrap: wrap;
  gap: 16px 12px;
  display: flex;

  @media screen and (max-width: 1200px) {
  }

  @media screen and (max-width: 767px) {
  }
`;

export const NameProject = styled.p`
  margin-bottom: 15px;
  @media screen and (max-width: 1200px) {
  }

  @media screen and (max-width: 767px) {
  }
`;

export const DescrProject = styled.p`
  margin-bottom: 15px;
  @media screen and (max-width: 1200px) {
  }

  @media screen and (max-width: 767px) {
  }
`;

export const LinksProject = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;

  @media screen and (max-width: 1200px) {
  }

  @media screen and (max-width: 767px) {
  }
`;
