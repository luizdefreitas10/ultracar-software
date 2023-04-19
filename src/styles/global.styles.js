import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    .Toastify__toast-container {
      z-index: 9999999999999;
    }

    *::after{
        box-sizing: border-box;
    }
    *::before{
        box-sizing: border-box;
    }
    *:focus{
        outline:0;
    }

    body{
        background: #fff;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    button{
        cursor: pointer;
    }

    /* .swiper-pagination-bullet {
      opacity: 0.3 !important;
      background-color: #FFF !important;
      width: 10px;
      height: 10px;
      transition: 0.2s;
    }
    .swiper-pagination-bullet-active {
     opacity: 1 !important;
     background-color: #FFF !important;
     width: 30px;
     border-radius: 8px;
    } */

    /* add custom scrollbar in global project 👇🏼👇🏼👻 */
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: aliceblue;
    }

    ::-webkit-scrollbar-thumb {
      background: #551a8b;
      border-radius: 20px;
    }

    /* Cor do Texto selecionado 👇🏼👇🏼👻 */
    ::-moz-selection {
      color: white;
      background: #0E1020;
    }

    ::selection {
      color: white;
      background: #0E1020;
    }
`;

export default GlobalStyles;