import styled from 'styled-components';
export const EducationSection = styled.section`
  width: 1200px;
  /* display: flex;
  flex-direction: column;
  align-items: flex-start; */
  text-align: start;
  @media screen and (max-width: 1200px) {
    width: 768px;
  }

  @media screen and (max-width: 767px) {
    width: 320px;
  }
`;

export const FewWords = styled.p`
  margin: 0; /* Optional: Adjust as needed */
  padding-left: 70px; /* Add padding to create space for the line */
  position: relative;
  color: blue;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100px;
    height: 1px;
    background-color: blue;
  }
`;

export const SpanAbout = styled.span``;

export const Motivation = styled.p``;

export const EducationDescr = styled.p``;

// background: linear-gradient(45deg, rgba(4, 44, 14, .48) 0%, #a9d4ce 42%, rgba(249, 239, 183, .62) 72%, #fdfcfa 100%) 0 0 / 400%;
