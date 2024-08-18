import styled from 'styled-components';
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
  margin-top: 20px;
  @media screen and (max-width: 1200px) {
  }

  @media screen and (max-width: 767px) {
  }
`;
