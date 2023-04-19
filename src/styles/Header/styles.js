import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: aliceblue;
  padding: 10px;
`;

export const NavigationBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background-color: white; */
  width: 50%;
  max-width: 30rem;

  & a:hover {
    color: #42d2ff;
  }
`;