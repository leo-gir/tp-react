import styled from "styled-components";


export const HeroContainer = styled.div`
    width: 100%;
`

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 20px;
    margin-top: 40px;
`

export const ProductCardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    flex-wrap: wrap;
    gap: 40px;
    margin-top: 40px;
    @media(max-width: 768px){
        width: 100%;
    }
`

export const BtnContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    flex-direction: row;
    width: 80%;
`

export const ProductBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 40px;
    border-radius: 10px;
    background-color: var(--amarillo);
    margin-top: 10px;
`



