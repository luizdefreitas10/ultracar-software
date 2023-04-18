import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './styles/global.styles';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { EmployeesProvider } from './context/EmployeesContext';
import { ToastContainer, Slide } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EmployeesProvider>
    <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
            closeOnClick
            rtl={false}
            draggable
            pauseOnHover
            transition={Slide}
            theme={"colored"}
          />
      <GlobalStyles />
      <App />
    </EmployeesProvider>
  </React.StrictMode>
);


