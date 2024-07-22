import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const NavContainer = styled.div`
    display: flex;
    position: fixed;
    z-index: 2;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: black;
    width: 100vw;
    height: 80px;
    right: 0;
`;

export const NavLinks = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;

    > a {
        color: var(--amarillo);
        font-family: "Poppins", sans-serif;
        font-weight: 600;
    }

    @media (max-width: 992px) {

        width: 50%;
        height: calc(100vh - 300px);
        position: absolute;
        top: 80px;
        right: 0;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0;
        border-radius: 0 0 10px 10px;
        gap: 40px;
        background: rgba(0, 0, 0, 0.786);
        transform: translateX(150%);
        transition: all 0.5s ease;
        &.active {
            display: flex;
            transform: translateX(0%);
            transition: all 0.5s ease;
            z-index: 2;
        }
    }
`;

export const NavLogo = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;

    @media (max-width: 576px) {
        > img {
            width: 75%;
        }
    }
`;

export const NavIcons = styled(NavLogo)`
    gap: 50px;
`;

export const FontAwesomeCart = styled(FontAwesomeIcon)`
    font-size: 33px;
    color: var(--amarillo);
    cursor: pointer;
`;

export const FontAwesomeBars = styled(FontAwesomeIcon).attrs({id: 'faBars'})`
    display: none;
    font-size: 33px;
    color: var(--amarillo);
    

    @media (max-width: 992px) {
        display: flex;
    }
`;


export const Overlay = styled.div`
    position: absolute;
    top: 80px;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 1;
    background: rgba(141, 139, 115, 0.322);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9px);
    -webkit-backdrop-filter: blur(12.9px);
    display: none;

    &.showOverlay {
        display: block;
    }
`