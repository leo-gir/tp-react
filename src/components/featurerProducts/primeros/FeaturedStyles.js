import styled from "styled-components";

export const SectionTitleContainer = styled.div `
display: flex;
justify-content: center;
align-items: center;
    width: 120%;
    background-color: var(--gris-azulado);
    height: 15px;
    >h3{
        color: var(--amarillo);
    }
`

export const FeaturedContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 100%;
    padding: 20px;

`
export const CardsContainer = styled(FeaturedContainer)`
    flex-direction: row;
    width: 90%;

    /* height: 800px; */
`

export const FeaturedCards = styled(FeaturedContainer)`
    

    width: 30%;
    border: solid 1px var(--gris-azulado);
    border-radius: 20px;
    padding: 20px;
    >img{
        max-width: 80%;
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