import { HeroContaniner } from "./HeroStyles";
import heroImg from "../../assets/img/homeHero.png"
import { HeroBtn } from "./HeroStyles";

function Hero(){
    return(
        <>
            <HeroContaniner>
                <img src={heroImg} alt="hero" />
                <HeroBtn>Ir a la tienda</HeroBtn>
            </HeroContaniner>
        </>
    );
};

export default Hero;