import React, { useContext, useState, useEffect } from "react";
import { EmployeesContext } from "../../context/EmployeesContext";
import {
  Employee,
  FlexContainer,
  EmployeeUnderline,
  EmployeeName,
  StyledH2,
  SelectedEmployeeContainer,
  ServiceContainer,
  InfoContainer,
  Container,
  ContainerBox,
  StyledBox,
  BigContainer
} from "../../styles/EmployeesService/styles";

const EmployeesService = () => {
  const { employees } = useContext(EmployeesContext);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    if (employees.length > 0) {
      setSelectedEmployee(employees[0]);
    }
  }, [employees]);

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
  };

  return (
    <BigContainer id='funcionarios'>
      <StyledH2>Funcionários e serviços: </StyledH2>
      <FlexContainer>
        <ContainerBox>
          {employees.map((employee) => {
            const isSelected = selectedEmployee?.name === employee.name;
            return (
              <Employee
                key={employee.name}
                onClick={() => handleEmployeeClick(employee)}
                className={isSelected ? "selected" : ""}
              >
                <EmployeeName>{employee.name}</EmployeeName>
                <EmployeeUnderline />
              </Employee>
            );
          })}
        </ContainerBox>
        <SelectedEmployeeContainer>
          {selectedEmployee && (
            <InfoContainer>
              <StyledBox>
                <img src={selectedEmployee.img} alt={selectedEmployee.name} width={400} height={350}/>
              </StyledBox>
              <Container>
                {selectedEmployee.services.map((service) => (
                    <ServiceContainer key={service.startDate}>
                      <h3>Cliente: {service.fullName}</h3>
                      <h3>Telefone: {service.phoneNumber}</h3>
                      <h3>Serviço: {service.serviceType}</h3>
                      <h3>Início: {service.startDate}</h3>
                      <h3>Término: {service.endDate}</h3>
                    </ServiceContainer>

                ))}
              </Container>
            </InfoContainer>
          )}
        </SelectedEmployeeContainer>
      </FlexContainer>
    </BigContainer>
  );
};

export default EmployeesService;
