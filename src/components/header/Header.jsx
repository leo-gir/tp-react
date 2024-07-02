import { NavLogo, NavContainer, NavLinks, NavIcons, FontAwesomeBars, FontAwesomeCart } from "./HeaderStyles";
import logo from "../../assets/img/logoHoriz.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';




function Header(){
    return (
        <div>
            <NavContainer>
                <NavLogo>
                    <img src={logo} alt="logo" />
                </NavLogo>

                <NavLinks>
                    <a href="#">INICIO</a>
                    <a href="#">NOSOTROS</a>
                    <a href="#">PRODUCTOS</a>
                    <a href="#">CONTACTO</a>
                </NavLinks>

                <NavIcons>
                    <FontAwesomeCart icon={faCartShopping}  />
                    <FontAwesomeBars icon={faBars} /> 
                </NavIcons>

            </NavContainer>
        </div>
    );
};

export default Header;