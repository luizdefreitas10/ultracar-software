import React from "react";
import { Container, ServicesContainer, ServiceContainer, StyledH1, InsideBox, StyledContainer } from "../../styles/Services/styles";
import { services } from "../../mocks/Services/Services";

export default function Services() {
  return (
    <Container id='servicos'>
      <StyledH1>Estes são alguns de nossos serviços:</StyledH1>
      <ServicesContainer>
        {services.map((service) => (
          <ServiceContainer key={service.id}>
            <img
              src={service.imgSrc}
              alt={service.type}
              height={200}
              width={200}
              style={{ display: 'block'}}
            />
            <InsideBox>
              <h4>{service.type}</h4>
              <p>{service.description}</p>
            </InsideBox>
          </ServiceContainer>
        ))}
      </ServicesContainer>
      <StyledContainer></StyledContainer>
    </Container>
  );
}
