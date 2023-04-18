import React, { createContext, useState } from "react";
import funcionario1 from '../assets/funcionario1.png'
import funcionario2 from '../assets/funcionario2.png'
import funcionario3 from '../assets/funcionario3.png'
import funcionario4 from '../assets/funcionario4.png'

const EmployeesContext = createContext({});

const EmployeesProvider = ({ children }) => {
  const [employees, setEmployees] = useState([
    {
      name: "Roberto Souza",
      img: funcionario1,
      services: [
        {
          fullName: "Luiz Neto",
          phoneNumber: "81998765432",
          email: "luiz@example.com",
          serviceType: "Revisão",
          startDate: "17/04/2023",
          endDate: "18/04/2023",
        },
      ],
    },
    {
      name: "Luciano Cruz",
      img: funcionario2,
      services: [
        {
          fullName: "Carlos Roberto",
          phoneNumber: "81998765432",
          email: "carlos@example.com",
          serviceType: "Geometria veicular",
          startDate: "17/04/2023",
          endDate: "18/04/2023",
        },
      ],
    },
    {
      name: "Carlos Eduardo",
      img: funcionario3,
      services: [
        {
          fullName: "Bruna Melo",
          phoneNumber: "81998765454",
          email: "brunamelo@example.com",
          serviceType: "Suspensão",
          startDate: "17/04/2023",
          endDate: "18/04/2023",
        },
      ],
    },
    {
      name: "Gabriela Meireles",
      img: funcionario4,
      services: [
        {
          fullName: "Ana Luiza",
          phoneNumber: "81998765432",
          email: "analuiza@example.com",
          serviceType: "Geometria Veicular",
          startDate: "17/04/2023",
          endDate: "18/04/2023",
        },
      ],
    },
  ]);

  const [services, setServices] = useState([]);

  return (
    <EmployeesContext.Provider
      value={{ employees, setEmployees, services, setServices }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};

export { EmployeesContext, EmployeesProvider };
