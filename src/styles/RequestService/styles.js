import styled from "styled-components";

export const RequestContainer = styled.div`
  /* margin-top: 3rem; */
  height: 30rem;
  display: flex;
  justify-content: space-evenly;
  background-color: aliceblue;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const StyledH1 = styled.h1`
  padding: 10px;
  margin: 1rem 0;
  text-align: center;
  color: #551a8b;
  font-weight: 200;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & input {
    border-radius: 5px;
    height: 2.3rem;
    width: 100%;
    /* border: none; */
    background-color: rgba(85, 26, 139, 0.5);
  }

  & label {
    color: #551a8b;
    font-size: 1.1rem;
  }
`;

export const WithoutImgBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
`;

export const Select = styled.select`
   border-radius: 5px;
    height: 2.3rem;
    width: 100%;
    /* border: none; */
    background-color: rgba(85, 26, 139, 0.5);
`;

export const Button = styled.button`
  border-radius: 5px;
  height: 2.3rem;
  width: 20%;
  margin: 0 auto;
  background-color: #551a8b;
  color: aliceblue;

  &:hover {
    background-color: rgba(85, 26, 139, 0.5);
    /* color: #551a8b; */
  }
`;

export const Option = styled.option`
  color: aliceblue;
  font-size: larger;
`;
