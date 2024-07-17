import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContactHero = styled.img`
    margin-top: 80px;
    margin-bottom: 40px;
    width: 100%;
`

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--gris-azulado);
    border-radius: 20px;
    width: 80%;
    padding: 20px;
    margin-top: 40px;
    color: var(--gris-claro);
    
    @media (max-width: 576px){
        width: 90%;
    }
`

export const FormContainer =styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
    margin-bottom: 30px;

    >iframe{
        display: flex;
        align-items: end;
        align-self: end;
        width:60%;
        height:550px;
        border:0;
    }

    
    @media (max-width: 768px){
        flex-direction: column;

        > iframe{
            width: 100%;
            align-items: center;
            align-self: center;
            height: 400px;
        }
    }
`

export const Form =styled.form`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 15px;
    margin-right: 40px;
    width: 35%;
    >h4{
        align-self: flex-start;
        font-size: 30px;
    }
    >label{
        align-self: start;
        font-family: "Poppins", sans-serif;
    }
    
    >input, textarea{
        align-self: start;
        font-family: "Poppins", sans-serif;
        border-radius: 5px;
        padding: 5px;
        width: 100%;
    }

    >textarea{
        height: 130px;
        resize: none;
    }

    >button{
        margin-top: 15px;
        align-self: center;
        width: 180px;
    }

    @media (max-width: 768px){
        width: 90%;
        margin-bottom: 30px;
    }
    
    @media (max-width: 576px){
        width: 100%;
        margin-right:0;
        >h4{
            font-size: 25px;
            text-align: center;
        }
}
    `

export const ContactDataContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
    >span{
        display: flex;
        align-items: center;
    }

    @media (max-width: 576px){
        >span {
            font-size: 12px;
        }
    }
`
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size:50px;
    color: var(--gris-azulado);
    margin-right: 15px;
`