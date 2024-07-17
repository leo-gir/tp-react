import { HeroContaniner } from "./HeroStyles";
import heroImg from "../../assets/img/homeHero.png"
import { HeroBtn } from "./HeroStyles";
import { Link } from "react-router-dom";

function Hero(){
    return(
        <>
            <HeroContaniner>
                <img src={heroImg} alt="hero" />
                <Link to="/productos"><HeroBtn>Ir a la tienda</HeroBtn></Link>
            </HeroContaniner>
        </>
    );
};

export default Hero;