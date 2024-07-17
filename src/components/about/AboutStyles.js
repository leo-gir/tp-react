import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AboutHeroImg = styled.img`
    margin-top: 80px;
    width: 100%;
    margin-bottom: 40px ;
`;

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 20px;
`

export const AboutWelcomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;
    padding: 20px;
    width: 70%;
    border-radius: 20px;
    border: 1px solid var(--gris-azulado);
    /* gap: 20px; */
    text-align: center;

    @media (max-width: 992px) {
        width: 100%;
    };
    `;



export const AboutImgContaniner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 30px;
    > img {
        width: 70%;
        border-radius: 20px;
    };

    @media (max-width: 992px) {
        >img{
            width: 100%;
        };
    };
`;

export const TextAboutContainer = styled(AboutImgContaniner)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    padding: 15px;
    color: var(--gris-claro);
    > p {
        text-align: center;
    };

    @media (max-width: 992px) {
        width: 100%;
    }
`;

export const TestimoniesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    width: 80%;

    @media (max-width: 992px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
`;

export const TestimoniesCards = styled(TestimoniesContainer)`
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    padding: 15px;
    background-color: var(--gris-azulado);
    width: 25%;
    border-radius: 20px;
    > p {
        text-align: left;
        color: black;
    }
    > span {
        margin-top: 10px;
        align-self: flex-end;
    }

    @media (max-width: 992px) {
        width: 70%;
    }

    @media (max-width: 576px) {
        width: 100%;
    }
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    display: flex;
    justify-self: center;
    align-self: flex-start;
    font-size: 40px;
    color: var(--gris-claro);
    text-align: left;
`;
