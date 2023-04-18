import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: green;
  z-index: 9999;
  width: 100%;
  margin-top: -10rem;

`;

export const SIContainer = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.6);
  position: relative;
  width: 30%;
  height: 8rem;
  top: 70%;
  padding: 10px;
  border-radius: 5px;
  gap: 10px;

  & h1 {
    text-align: center;
    color: #fff;
    font-weight: 200;
    font-size: 1.5rem;
  }

  & p {
    text-align: justify;
    font-size: small;
    color: #fff;
  }

  & img {
    width: 40%;
    height: 100%;
    border-radius: 5px;
  }
`;

export const SIContainer2 = styled(SIContainer)`
  /* right: 35%; */
`;

export const SIContainer3 = styled(SIContainer)`
  right: 0;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;