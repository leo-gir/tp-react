import { NavLogo, NavContainer, NavLinks, NavIcons } from "./HeaderStyles";
import logo from "../../assets/img/logoHoriz.png"

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
                    <img src="./img/logo1.png" alt="carrito" />
                    <img src="#" alt="menu" />
                </NavIcons>

            </NavContainer>
        </div>
    );
};

export default Header;