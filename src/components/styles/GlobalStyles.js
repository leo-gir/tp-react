import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: "Titillium Web", sans-serif;
    };

    

    :root {
        --bg:#1d1e25;
        --amarillo: #fecc03;
        --gris-claro: #d4d4e5;
        --gris-oscuro: #8d90a3;
        --gris-azulado: #7890a8;
    };

    html {
        scroll-behavior: smooth;
        scroll-padding-top: 85px;
    };

    body {
        background-color: #1d1e25;
    };

    h2{
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-size: 50px;
        color: var(--amarillo);
    };

    h3 {
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-size: 25px;
        color: var(--gris-claro);
    };
    
    h4 {
        font-family: "Poppins", sans-serif;
        font-weight: 200;
        font-size: 20px;
        color: var(--gris-claro);
    };

    p{
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-size: 20px;
    }
`
