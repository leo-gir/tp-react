import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: auto;
    margin: 20px 20px 0 20px;
    background-color: black;

    @media(max-width: 768px){
        flex-direction: column;
    }
`

export const FooterSocial = styled(FooterContainer)`
    justify-content: center;
    width: 30%;
    gap:20px;
    @media(max-width: 768px){
        flex-direction: row;
    }
`

export const FooterLogo = styled(FooterContainer)`
    justify-content: center;
    width: 30%;
    >img{
        width:30%;
    }

    @media(max-width: 768px){
        /* width: 50%; */
        >img{
        width:50%;
        }
    }

    @media(max-width: 576px){
        >img{
        width:80%;
        }
    }
`

export const FooterDesign = styled(FooterContainer)`
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 30%;
    font-family: "Marsne", sans-serif;
    font-weight: 100;
    font-size: 25px;
    color: var(--gris-azulado);

    @media(max-width: 1200px){
        font-size: 20px;
    }

    @media(max-width: 992px){
        font-size: 20px;
    }

    @media(max-width: 768px){
        width: 80%;
        font-size: 20px;
    }

    @media(max-width: 576px){
        font-size: 15px;
    }
`

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size:60px;
    color: var(--gris-azulado);

    @media(max-width: 1200px){
        font-size: 50px;
    }

    @media(max-width: 992px){
        font-size: 40px;
    }

    @media(max-width: 768px){
        font-size: 40px;
    }
`