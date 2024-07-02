import { FooterContainer, FooterSocial, FooterLogo, FooterDesign } from "./FooterStyles";
import Logo from "../../assets/img/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { StyledFontAwesomeIcon } from "./FooterStyles";

function Footer(){
    return(
        <>
            <FooterContainer>
                <FooterSocial>
                    <StyledFontAwesomeIcon icon={faFacebook}  />
                    <StyledFontAwesomeIcon icon={faEnvelope} />
                    <StyledFontAwesomeIcon icon={faInstagram}  />
                    <StyledFontAwesomeIcon icon={faWhatsapp}  />
                </FooterSocial>
                <FooterLogo>
                    <img src={Logo} alt="logo" />
                </FooterLogo>
                <FooterDesign>
                    <span>TP N° 1 React - NUCBA</span>
                    <span>Diseño por Leonel Gironella</span>
                    <span>Año 2024</span>
                </FooterDesign>
            </FooterContainer>
        </>
    );
};

export default Footer;