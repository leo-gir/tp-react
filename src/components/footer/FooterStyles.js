import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: auto;
    margin-top: 30px;
    background-color: black;
`

export const FooterSocial = styled(FooterContainer)`
    justify-content: center;
    width: 30%;
    gap:35px;
`

export const FooterLogo = styled(FooterContainer)`
    justify-content: center;
    width: 30%;
    >img{
        width:30%;
    }
`

export const FooterDesign = styled(FooterContainer)`
    flex-direction: column;
    justify-content: center;
    width: 30%;
    font-family: "Poppins", sans-serif;
    font-weight: 100;
    font-size: 25px;
    color: var(--gris-azulado);
`