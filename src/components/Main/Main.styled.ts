import styled from 'styled-components';

export const MainContainer = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;

  /* width: 1200px; */
  /* padding: 0 20px; */
  @media screen and (max-width: 1200px) {
    /* width: 768px;
    padding: 0 5px; */
  }

  @media screen and (max-width: 767px) {
    /* width: 320px; */
  }
`;
