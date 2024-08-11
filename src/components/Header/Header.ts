import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrap = styled.div`
  width: 100%;
  background-color: rgba(66, 64, 68, 1);
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  height: 70px;
  border-radius: 0 0 15px 15px;
  margin: 0 auto;
  padding: 0 20px;
  margin-bottom: 40px;
  @media screen and (max-width: 1200px) {
    max-width: 768px;
  }

  @media screen and (max-width: 767px) {
    width: 320px;
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
`;

export const LinkElement = styled.a`
  display: flex;
  height: 70px;
  text-decoration: none;
  color: var(--iq-underlining);
  font-size: var(--font-size-mobile);
  align-items: center;
  &:hover,
  &:focus {
    color: white;
  }
`;

export const ListLeng = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
`;
