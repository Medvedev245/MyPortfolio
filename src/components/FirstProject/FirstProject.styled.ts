import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as GithubIcon } from '../../Files/github-svgrepo-com.svg';
import { ReactComponent as SiteIconSVG } from '../../Files/site-svgrepo-com.svg';

export const ImgProject = styled.img`
  width: 300px;
  height: 300px;
  transition: transform 0.3s ease, background-color 0.3s ease;
  @media screen and (max-width: 1200px) {
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const ProjectsElement = styled.li`
  /* display: flex; */
  padding: 20px;
  width: 768px;
  flex-direction: column;
  /* gap: 20px; */
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
    flex-direction: column;
  }

  @media screen and (max-width: 767px) {
    width: 340px;
    flex-direction: column;
    ${ImgProject} {
      transform: rotate(1deg); /* Увеличивает и поднимает изображение */
      /* background-color: #4d4c5c52; */
    }
  }
`;

export const ContainerElement = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  @media screen and (max-width: 1200px) {
    /* width: 340px; */
  }

  @media screen and (max-width: 767px) {
  }
`;

export const Element = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 1200px) {
    /* width: 340px; */
  }

  @media screen and (max-width: 767px) {
  }
`;

export const NameProject = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 15px;
  @media screen and (max-width: 1200px) {
  }

  @media screen and (max-width: 767px) {
  }
`;

export const DescrProject = styled.p`
  margin-bottom: 15px;
  font-size: 18px;
  @media screen and (max-width: 1200px) {
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
    margin-bottom: 40px;
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

export const Links = styled(Link)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  text-decoration: none;
  padding: 10px;
  cursor: pointer;
  background: #ffffff;
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

export const StyledSiteIcon = styled(SiteIconSVG)`
  // Стилизуем компонент под новым именем
  width: 20px;
  height: 30px;
  fill: currentColor; /* Это позволит иконке наследовать цвет текста */
  @media screen and (max-width: 1200px) {
  }

  @media screen and (max-width: 767px) {
    width: 20px;
    height: 30px;
  }
`;

export const StyledGithubIcon = styled(GithubIcon)`
  // Стилизуем компонент под новым именем
  width: 30px;
  height: 30px;
  fill: currentColor; /* Это позволит иконке наследовать цвет текста */
  @media screen and (max-width: 1200px) {
  }

  @media screen and (max-width: 767px) {
  }
`;
