import styled from 'styled-components';

export const ProjectsFooter = styled.footer`
  width: 100%;
  text-align: start;
  background-color: beige;
`;

export const FooterWrap = styled.div`
  width: 1200px;
  padding: 30px 20px 60px 20px;
  margin: 0 auto;
  @media screen and (max-width: 1200px) {
    width: 768px;
  }

  @media screen and (max-width: 767px) {
    width: 320px;
  }
`;

export const FooterAdress = styled.address`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media screen and (max-width: 1200px) {
    /* width: 768px; */
    gap: 40px 40px;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    /* width: 320px; */
  }
`;

export const FooterLink = styled.a`
  display: flex;
  gap: 10px;
  align-items: center;
  text-decoration: none;
  font-size: 24px;
  color: var(--iq-Logo);
  @media screen and (max-width: 1200px) {
    /* width: 768px; */
  }

  @media screen and (max-width: 767px) {
    font-size: 16px;
    /* width: 320px; */
  }
`;
