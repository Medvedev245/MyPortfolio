import styled from 'styled-components';

export const FormContainer = styled.div`
  background-color: aqua;
  width: 100%;
  text-align: center;
  /* margin: 0 auto; */
  font-size: var(--font-size-desktop);

  @media screen and (max-width: 1200px) {
    margin: 0 auto;
    /* width: 768px; */
    font-size: var(--font-size-tablet);
  }

  @media screen and (max-width: 767px) {
    margin: 0 auto;
    /* width: 320px; */
    font-size: var(--font-size-mobile);
  }
`;
