import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const Links = styled(Link)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  text-decoration: none;

  border: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  &:before {
    content: '';
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  &:active {
    color: #000;
  }

  &:active:after {
    background: transparent;
  }

  &:hover:before {
    opacity: 1;
  }

  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
  /* @keyframes pulse {
    0% {
      box-shadow: red;
    }
  } */
  @media screen and (max-width: 1200px) {
  }

  @media screen and (max-width: 767px) {
  }
`;
