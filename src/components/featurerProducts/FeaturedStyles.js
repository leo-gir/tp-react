import styled from "styled-components";

export const FeaturedSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 20px;

    >h2{
        margin-top: 20px;
        margin-bottom: 40px;
    }

    @media(max-width: 768px){
        >h2{
            font-size: 36px;
        }
    }

    @media(max-width: 576px){
        >h2{
            font-size: 30px;
        }
    }
`

export const ProductCardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    flex-wrap: wrap;
    gap: 40px;

    @media(max-width: 768px){
        width: 100%;
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 30%;
    border: solid 1px var(--gris-azulado);
    border-radius: 20px;
    padding: 10px;
    >img{
        max-width: 50%;
        border-radius: 20px;
        margin: 20px;
    }
    >span{
        font-family: "Poppins", sans-serif;
        align-items: start;
        justify-content: start;
        font-weight: 600;
        font-size: 24px;
        color: white;
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

