import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HeroProducts = styled.div`
    display: flex;
    width: 100%;
    margin-top: 80px;
    margin-bottom: 40px;

    > img {
        width: 100%;
    }
`;

export const ProductSectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 90%;
    @media (max-width: 992px) {
        flex-direction: column;
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: stretch;
    width: 80%;
    flex-wrap: wrap;
    gap: 40px;
    margin-top: 40px;

    @media (max-width: 1200px) {
        width: 70%;
    }
    @media (max-width: 992px) {
        width: 100%;
    }
`;

export const CategoriesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    align-self: flex-start;
    margin-right: 20px;
    margin-top: 40px;
    width: 20%;
    border: 1px solid black;
    padding: 15px;
    border-radius: 20px;
    > h4 {
        color: var(--amarillo);
        font-size: 27px;
    };

    @media (max-width: 1200px) {
        width: 30%;
    };

    @media (max-width: 992px) {
        width: 100%;
        justify-content: space-between;
    };

    @media (max-width: 644px){
        width: 70%;
        margin-right: 0;
        align-self: center;
    }

    @media (max-width: 576px){
        >h4{
            font-size: 23px;
        }
    }
`;

export const CatItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    > span {
        font-family: "Poppins", sans-serif;
        font-weight: 300;
        color: var(--gris-claro);
        width: 95%;
        margin-top: 15px;
        margin-right: 100px;
        padding: 5px 5px 5px 20px;
        font-size: 17px;
        cursor: pointer;
        background: rgb(17,17,18);
        background: linear-gradient(90deg, rgba(17,17,18,1) 0%, rgba(29,30,37,1) 80%);

    }
    @media (max-width: 992px) {
        width: 100%;
        flex-direction: row;
        >span{
            margin: 15px 0 0 0;
        }
    }

    @media (max-width: 768px){
        flex-direction: column;
        >span{
            font-size: 14px;
        }
    }
`

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size: 25px;
    color: var(--amarillo);

    @media (max-width: 576px){
        font-size: 20px;
    }
`;