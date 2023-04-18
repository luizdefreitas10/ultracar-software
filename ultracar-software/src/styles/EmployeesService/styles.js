import styled from "styled-components";

export const EmployeeName = styled.h3`
  font-weight: 400;
  font-size: 1.5rem;
  padding: 20px;
  color: #551a8b;

  &:hover {
    color: rgba(85, 26, 139, 0.5);
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px;
    background-color: #551a8b;
    border-radius: 5px;
    transition: width 0.3s;
  }
`;

export const EmployeeUnderline = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background-color: #551a8b;
  border-radius: 5px;
  transition: width 0.3s;
`;

export const Employee = styled.div`
  position: relative;
  cursor: pointer;

  &:hover ${EmployeeUnderline} {
    width: 100%;
  }

  & h3 {
    font-weight: 400;
    font-size: 1.5rem;
    padding: 20px;
  }

  &.selected ${EmployeeName}::before {
    width: 100%;
  }
`;

export const FlexContainer = styled.div`
  background-color: aliceblue;
  display: flex;
  height: 483px;
  width: 90%;
  margin: 0 auto;
`;

export const StyledH2 = styled.h1`
  background-color: aliceblue  ;
  padding: 30px;
  /* margin: 1rem 0; */
  text-align: center;
  color: #551a8b;
  font-weight: 200;
`;

export const SelectedEmployeeContainer = styled.div`
  background-color: rgba(85, 26, 139, 0.5);
  width: 100%;
  height: 483px;
  border-radius: 5px;

  & h2 {
    font-weight: 400;
    text-align: center;
  }
`;

export const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 50%;
  background-color: rgb(40, 41, 43);
  padding: 10px;
  border-radius: 5px;
  z-index: 5;

  & h3 {
    font-size: 1rem;
    color: white;
    font-weight: 200;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
`;

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
width: 100%;
height: 483px;
  /* background-color: red; */
`;

export const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30rem;
  /* background-color: red; */
`;

export const BigContainer = styled.div`
  background-color: aliceblue;
`;