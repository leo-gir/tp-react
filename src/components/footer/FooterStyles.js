import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const FooterSocial = styled(FooterContainer)`
    justify-content: center;
    width: 30%;
`

export const FooterLogo = styled(FooterContainer)`
    justify-content: center;
    width: 30%;
    >img{
        width:40%;
    }
`

export const FooterDesign = styled(FooterContainer)`
    flex-direction: column;
    justify-content: center;
    width: 30%;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 23px;
`