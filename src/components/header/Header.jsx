import {
    NavLogo,
    NavContainer,
    NavLinks,
    NavIcons,
    FontAwesomeBars,
    FontAwesomeCart,
    Overlay,
    CartContainer
} from "./HeaderStyles";
import logoImg from "../../assets/img/logoHoriz.png";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


import { useContext } from "react";
import { OpenMenuContext } from "../context/menuContext";
import { CartContext } from "../context/cartContext";

function Header() {
    const { openMenu, toggleMenu } = useContext(OpenMenuContext);
    const { openCart, toggleCart } = useContext(CartContext);

    
    const toggleOverlay = (e) => {
        if(e.target.id === "faBars" || e.target.closest("#faBars")){
            console.log("click");
            toggleMenu();
            console.log(openMenu);
            console.log(e.target);
            if(openCart){
                toggleCart();
            };
        };
        
        if(e.target.id === "faCart" || e.target.closest("#faCart")){
            console.log("click");
            toggleCart();
            console.log(openMenu);
            console.log(e.target);
            if(openMenu){
                toggleMenu();
            };
        };
    };
    
    
    return (
        <>
            <NavContainer>
                <Overlay className={openMenu  || openCart? "showOverlay" : ""} />
                    <NavLogo>
                        <img src={logoImg} alt="logo" />
                    </NavLogo>

                    <NavLinks className={openMenu ? "active" : ""}>
                        <Link to="/">INICIO</Link>
                        <Link to="/sobre-nosotros">NOSOTROS</Link>
                        <Link to="/productos">PRODUCTOS</Link>
                        <Link to="/contacto">CONTACTO</Link>
                    </NavLinks>
                    <CartContainer className={openCart ? "active" : ""} ></CartContainer>

                    <NavIcons>
                        <FontAwesomeCart icon={faCartShopping} onClick={toggleOverlay} id="faCart"/>
                        <FontAwesomeBars icon={faBars} onClick={toggleOverlay} id="faBars" />
                    </NavIcons>
                
            </NavContainer>

        </>
    );
}

export default Header;
