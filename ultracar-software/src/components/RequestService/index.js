import React, { useState, useContext } from "react";
import { RequestContainer, StyledH1, Form, WithoutImgBox, Select, Button, Option } from '../../styles/RequestService/styles';
import { services as availableServices } from "../../mocks/Services/Services";
import { EmployeesContext } from "../../context/EmployeesContext";
import formIcon from '../../assets/form-icon.png'
import { toast } from "react-toastify";

export default function RequestService() {

  const { services, setServices, employees, setEmployees } = useContext(EmployeesContext);

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    serviceType: " ",
  });

  const assignService = (newService) => {
    var minServices = Number.MAX_VALUE;
    var selectedEmployee = null;

    employees.forEach((employee, index) => {
      if (employee.services.length < minServices) {
        minServices = employee.services.length;
        selectedEmployee = index;
      }
    });

    if (selectedEmployee !== null) {
      const updatedEmployee = {
        ...employees[selectedEmployee],
        services: [...employees[selectedEmployee].services, newService],
      };

      setEmployees([
        ...employees.slice(0, selectedEmployee),
        updatedEmployee,
        ...employees.slice(selectedEmployee + 1),
      ]);
    }
  };


  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const service = {
      ...formData,
      startDate: new Date().toLocaleDateString(),
      endDate: null,
    };
    setServices([...services, service]);
    assignService(service);
    console.log("Form data submitted:", formData);
    toast.success('Seu serviço foi atribuído à um responsável com sucesso!')
  }

  return (
    <RequestContainer id='solicite'>
      <WithoutImgBox>
        <StyledH1>Solicite seu serviço: </StyledH1>
        <Form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName">Nome completo:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Telefone:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="services">Serviço: </label>
            <Select
              id='services'
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
            >
              { availableServices.map((availableService) => (
                <Option key={availableService.id} value={availableService.type}>{availableService.type}</Option>
              )) }
            </Select>
          </div>
          <Button type="submit">Enviar</Button>
        </Form>
      </WithoutImgBox>
      <img src={formIcon} alt="form icon" height={450} />
    </RequestContainer>
  );
}