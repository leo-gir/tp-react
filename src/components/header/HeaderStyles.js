import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";


export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: black;
    width: 100vw;
    height: 80px;
    `

export const NavLinks = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    
    
    >a{
        color: var(--amarillo);
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        
    }

    @media(max-width: 992px){
        display: none;
    }
    
`

export const NavLogo=styled.div`
    display: flex;
    justify-content: start;
    align-items: center;

    
    @media(max-width: 576px){
        >img{
            width: 75%;
        }
    }
`

export const NavIcons=styled(NavLogo)`
    gap:50px;
`

export const FontAwesomeCart=styled(FontAwesomeIcon)`
    font-size: 33px; 
    color: var(--amarillo);
    cursor: pointer;
`

export const FontAwesomeBars=styled(FontAwesomeIcon)`
    display: none;
    font-size: 33px; 
    color: var(--amarillo);

    @media(max-width: 992px){
        display: flex;
    }
    
`