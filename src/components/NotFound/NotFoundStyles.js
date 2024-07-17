import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const NotFoundContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 80px;
    height: 70vh;
    width: 90%;
    gap: 40px;
    text-align: center;
`

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
        font-size:100px;
        color: var(--gris-azulado);
`