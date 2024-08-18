import styled from 'styled-components';

export const SkillsSection = styled.section`
  width: 100vw;
  /* padding: 30px 20px; */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),
    url('https://img.freepik.com/free-vector/abstract-banner-with-low-poly-plexus-network-communications-design_1048-12914.jpg?t=st=1724011500~exp=1724015100~hmac=7073ba33b8faa8af1133daee031b2118e157e1b87c4ece00542ac650b61aa02d&w=1380');
  background-color: #2c262617;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  text-align: start;
  margin-bottom: 80px;

  @media screen and (max-width: 1200px) {
    /* width: 768px; */
  }

  @media screen and (max-width: 767px) {
    /* width: 100%; */
  }
`;

export const SkillsWrap = styled.div`
  padding: 30px 20px;
  width: 1200px;
  /* height: 70px; */
  margin: 0 auto;
  /* padding: 30px 0 30px 0; */
  @media screen and (max-width: 1200px) {
    /* padding: 0 5px; */
    width: 768px;
  }

  @media screen and (max-width: 767px) {
    width: 320px;
  }
`;

export const SpanSkill = styled.p`
  color: aliceblue;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const SkillsBox = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-around;
  @media screen and (max-width: 1200px) {
  }

  @media screen and (max-width: 767px) {
  }
`;

export const Box = styled.div`
  /* border: 1px solid black; */
  padding: 20px;

  @media screen and (max-width: 1200px) {
    padding: 5px;
  }

  @media screen and (max-width: 767px) {
    width: 310px;
  }
`;

export const BoxSpan = styled.div`
  color: aliceblue;
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 500;
  @media screen and (max-width: 1200px) {
  }

  @media screen and (max-width: 767px) {
  }
`;

export const BoxList = styled.ul`
  width: 400px;
  flex-wrap: wrap;
  gap: 16px 12px;
  display: flex;

  @media screen and (max-width: 1200px) {
    width: 700px;
  }

  @media screen and (max-width: 767px) {
    width: 295px;
  }
`;

export const BoxElement = styled.li`
  text-align: center;
  background: rgb(187 194 213 / 89%);
  border-radius: 20px;
  flex-grow: 1;
  padding: 12px;
  list-style: none;
  @media screen and (max-width: 1200px) {
  }

  @media screen and (max-width: 767px) {
  }
`;
