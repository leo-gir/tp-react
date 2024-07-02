import { HeroContaniner } from "./HeroStyles";
import hero from "../../assets/img/hero2.png"
import { HeroBtn } from "./HeroStyles";

function Hero(){
    return(
        <>
            <HeroContaniner>
                <img src={hero} alt="hero" />
                <HeroBtn>Ir a la tienda</HeroBtn>
            </HeroContaniner>
        </>
    );
};

export default Hero;