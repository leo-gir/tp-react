import { FooterContainer, FooterSocial, FooterLogo, FooterDesign } from "./FooterStyles";
import Logo from "../../assets/img/logo.png"
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
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
                    <p>Av. Santa Fe 1560</p>
                    <p>CABA</p>
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