import styled from "styled-components";

export const FeaturedContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 80%;
    height: 500px;
`
export const CardsContainer = styled(FeaturedContainer)`
flex-direction: row;
width: 100%;
`

export const FeaturedCards = styled(FeaturedContainer)`
        justify-content: flex-start;
    width: 30%;
    height: 400px;
    border: solid 1px var(--gris-azulado);
    border-radius: 20px;
    >img{
        max-width: 80%;
        border-radius: 20px;
        margin: 20px;
    }
    >span{
        font-family: "Poppins", sans-serif;
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
    justify-content: space-around;
    width: 120px;
    height: 40px;
    border-radius: 10px;
    background-color: var(--amarillo);
    margin-top: 10px;
`