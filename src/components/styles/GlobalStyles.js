import { createGlobalStyle } from "styled-components";
import Marsneveneksk from "../../assets/fonts/MARSNEVENEKSK-Clean.otf";

export const GlobalStyles = createGlobalStyle`
    @font-face {
    font-family: 'Marsne';
    src: url(${Marsneveneksk}) format('opentype');
    }
    
    
    
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
        font-family: "Marsne", sans-serif;
        font-weight: 400;
        font-size: 90px;
        color: var(--amarillo);

        @media(max-width: 768px){
            font-size: 70px;
    };

    @media(max-width: 576px){
            font-size: 55px;
}
};


    h3 {
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-size: 40px;
        color: var(--gris-claro);

        @media(max-width: 576px){
            font-size: 27px;
}
    };
    
    h4 {
        font-family: "Poppins", sans-serif;
        font-weight: 200;
        font-size: 30px;
        color: var(--gris-claro);

        @media (max-width: 1200px) {
            font-size: 25px;
        }

        @media(max-width: 576px){
            font-size: 17px;
}
    };

    p{
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-size: 18px;

        @media (max-width: 1200px) {
            font-size: 18px;
        }
        @media(max-width: 576px){
            font-size: 15px;
        }
        
    }
`;
