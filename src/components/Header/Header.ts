import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrap = styled.div`
  width: 100%;
  background-color: rgba(66, 64, 68, 1);
`;

export const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  height: 70px;
  margin: 0 auto;
  padding: 0 20px;
  margin-bottom: 40px;
  @media screen and (max-width: 1200px) {
    max-width: 768px;
    justify-content: space-evenly;
  }

  @media screen and (max-width: 767px) {
    height: 50px;
    width: 320px;
    margin-bottom: 110px;
  }
`;

export const NavBar = styled.nav`
  @media screen and (max-width: 1200px) {
    /* max-width: 768px; */
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    position: absolute;
    top: 70px;
    left: 0px;

    background-color: rgba(114, 71, 117, 0.27);
    border-radius: 35px;
  }
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 24px;
  font-style: italic;
  line-height: 1.17;
  color: var(--iq-Logo);
`;

export const ListNav = styled.ul`
  height: 70px;
  display: flex;
  gap: 15px;
  list-style: none;
  align-items: center;
  @media screen and (max-width: 1200px) {
    gap: 10px;
    justify-content: space-evenly;
  }

  @media screen and (max-width: 767px) {
    gap: 5px;
  }
`;

export const LinkElement = styled.a`
  display: flex;
  height: 70px;
  text-decoration: none;
  color: var(--iq-underlining);
  font-size: var(--font-size-mobile);
  align-items: center;
  transition: color 0.3s ease;
  &:hover,
  &:focus {
    color: white;
  }
  @media screen and (max-width: 1200px) {
    font-size: 12px;
  }

  @media screen and (max-width: 767px) {
    color: black;
  }
`;

export const ListLeng = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
`;

export const ContainerLeng = styled.div`
  @media screen and (max-width: 1200px) {
    display: none;
  }

  @media screen and (max-width: 767px) {
  }
`;
