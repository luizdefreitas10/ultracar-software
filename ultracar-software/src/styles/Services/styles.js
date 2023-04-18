import styled from "styled-components";

export const Container = styled.div`
  background-color: aliceblue;
  margin-top: 2.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & img {
    border-radius: 5px;
  }
`;

export const ServiceContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: blue; */
  min-width: 17rem;
  width: 30%;
  margin-bottom: 4rem;
  z-index: 10;

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledH1 = styled.h1`
  padding: 10px;
  margin: 1rem 0;
  color: #551a8b;
  font-weight: 200;
`;

export const InsideBox = styled.div`
  position: absolute;
  right: 20%;
  bottom: -20%;
  background-color: rgb(40, 41, 43);
  height: 8rem;
  width: 8rem;
  color: #fff;
  padding: 10px;
  z-index: 10;

  & h4 {
    font-weight: 500;
  }

  & p {
    font-weight: 200;
    font-size: 0.8rem;
  }
`;

export const StyledContainer = styled.div`
  width: 90%;
  height: 70%;
  background-color: rgba(85, 26, 139, 0.5);
  position: absolute;
  bottom: 0;
  border-radius: 5px;
`;