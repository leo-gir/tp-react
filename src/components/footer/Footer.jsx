import { FooterContainer, FooterSocial, FooterLogo, FooterDesign } from "./FooterStyles";
import Logo from "../../assets/img/logo.png"
function Footer(){
    return(
        <>
            <FooterContainer>
                <FooterSocial>
                    <img src="#" alt="instagram" />
                    <img src="#" alt="facebook" />
                    <img src="#" alt="mail" />
                    <img src="#" alt="whatsapp" />
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