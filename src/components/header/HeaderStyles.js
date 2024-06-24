import styled from "styled-components";


export const NavContainer = styled.div`
    display: flex;
    justify-content: space-around;
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
    
`

export const NavLogo=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    >img{
        height: 75px;
    }
`

export const NavIcons=styled(NavLogo)`
    gap:50px;
`