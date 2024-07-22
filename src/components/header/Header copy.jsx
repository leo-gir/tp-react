import {
    NavLogo,
    NavContainer,
    NavLinks,
    NavIcons,
    FontAwesomeBars,
    FontAwesomeCart,
    Overlay,
} from "./HeaderStyles";
import logoImg from "../../assets/img/logoHoriz.png";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


import { useContext } from "react";
import { OpenMenuContext } from "../context/menuContext";
import { CartContext } from "../context/cartContext";

function Header() {
    const { openMenu, handleClick } = useContext(OpenMenuContext);
    const { openCart, toggleCart } = useContext(CartContext);

    return (
        <>
            <NavContainer>
                <Overlay className={openMenu  || openCart? "showOverlay" : ""} onClick={handleClick}/>
                    <NavLogo>
                        <img src={logoImg} alt="logo" />
                    </NavLogo>

                    <NavLinks className={openMenu ? "active" : ""}>
                        <Link to="/">INICIO</Link>
                        <Link to="/sobre-nosotros">NOSOTROS</Link>
                        <Link to="/productos">PRODUCTOS</Link>
                        <Link to="/contacto">CONTACTO</Link>
                    </NavLinks>

                    <NavIcons>
                        <FontAwesomeCart icon={faCartShopping} onClick={toggleCart}/>
                        <FontAwesomeBars icon={faBars} onClick={handleClick} />
                    </NavIcons>
                
            </NavContainer>

        </>
    );
}

export default Header;
