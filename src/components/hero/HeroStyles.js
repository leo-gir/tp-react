import styled from "styled-components";
import hero from "../../assets/img/hero.jpeg"


export const HeroContaniner = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;
    >img{
        width: 100%;
    }
`

export const HeroBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding: 10px;
    bottom: 50px;
    right: 50px;
    width: 230px;
    height: 60px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 30px;
    color: var(--bg);
    background-color: var(--amarillo);
    border-radius: 15px;
    
`