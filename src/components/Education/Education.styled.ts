import styled from 'styled-components';

export const EducationSection = styled.section`
  width: 100%;
  margin-bottom: 80px;
  /* text-align: start; */
  @media screen and (max-width: 1200px) {
    /* width: 768px;
    padding: 0 5px; */
  }

  @media screen and (max-width: 767px) {
    /* width: 320px; */
    /* padding: 0 5px; */
  }
`;

export const EducationWrap = styled.div`
  padding: 0 20px;
  width: 1200px;
  margin: 0 auto;
  /* display: flex;
  flex-direction: column;
  align-items: flex-start; */
  /* padding: 0 20px; */
  margin-bottom: 80px;
  text-align: start;
  @media screen and (max-width: 1200px) {
    width: 768px;
    padding: 0 5px;
  }

  @media screen and (max-width: 767px) {
    width: 320px;
    padding: 0 5px;
  }
`;

export const FewWords = styled.p`
  margin: 0px 0 40px 0; /* Optional: Adjust as needed */
  padding-left: 115px; /* Add padding to create space for the line */
  position: relative;
  color: #07289b;
  font-size: 25px;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 55%;
    transform: translateY(-50%);
    width: 100px;
    height: 1px;
    background-color: blue;
  }
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`;

export const SpanAll = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const Motivation = styled.p`
  font-style: italic;
  color: var(--secondary-color);
  margin-bottom: 20px;
  font-size: 28px;
`;

export const EducationDescr = styled.p`
  font-size: 25px;
  font-weight: 500;
  text-align: justify;
  line-height: 1.3;
`;

// background: linear-gradient(45deg, rgba(4, 44, 14, .48) 0%, #a9d4ce 42%, rgba(249, 239, 183, .62) 72%, #fdfcfa 100%) 0 0 / 400%;
