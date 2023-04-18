import React from "react";
import Header from "./components/Header";
import Swiper from "./components/Swiper";
import UltraLogo from "./components/UltraLogo";
import RequestService from "./components/RequestService";
import Services from "./components/Services";
import EmployeesService from "./components/EmployeesService";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <header>
        <UltraLogo />
        <Header />
        <Swiper />
        <Services />
        <Products />
        <EmployeesService />
        <RequestService />
        <Footer />
      </header>
  );
}

export default App;
