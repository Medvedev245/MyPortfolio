import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  background-color: rgba(136, 85, 187, 1);
  @media screen and (max-width: 1200px) {
    max-width: 768px;
  }

  @media screen and (max-width: 767px) {
    width: 320px;
  }
`;

export const LogoLink = styled(Link)`
  color: red;
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;
