import React from "react";
import {
  SIContainer,
  SIContainer2,
  MainContainer,
  ContentBox
} from "../../styles/SwiperInfo/styles";
import oficina4 from "../../assets/oficina4.jpeg";
import oficina5 from "../../assets/oficina5.jpeg";

export default function SwiperInfo() {
  return (
    <MainContainer>
      <SIContainer>
        <ContentBox>
          <h1>Serviços</h1>
          <p>
            Nossos serviços contam com uma equipe especializada, pronta para
            tratar de assuntos como troca de óleo, alinhamento e balanceamento
            de automóveis, etc.
          </p>
        </ContentBox>
        <img src={oficina4} alt="" height={70} width={70} />
      </SIContainer>
      <SIContainer2>
        <ContentBox>
          <h1>Produtos</h1>
          <p>Disponibilizamos ao cliente uma vasta gama de produtos mecânicos, como óleo de motor, filtros de ar, filtros de óleo, velas de ignição, correias, pastilhas, discos de freio, entre diversos outros.</p>
        </ContentBox>
        <img src={oficina5} alt="" height={70} width={70} />
      </SIContainer2>
    </MainContainer>
  );
}
