import React from "react";
import UcLogo from '../../assets/uc-logo.png';
import {
  MainContainer,
  NavigationBar
} from '../../styles/Header/styles'

export default function Header() {
  return (
    <MainContainer>
      <img src={UcLogo} alt="Logo UltraCar" height={80} width={80}/>
      <NavigationBar>
        <a href="#servicos">Serviços</a>
        <a href="#produtos">Produtos</a>
        <a href="#funcionarios">Funcionários e serviços</a>
        <a href="#solicite">Solicite um serviço</a>
      </NavigationBar>
    </MainContainer>
  );
};