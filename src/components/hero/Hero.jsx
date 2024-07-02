import { HeroContaniner } from "./HeroStyles";
import hero from "../../assets/img/hero2.png"
import { HeroBtn } from "./HeroStyles";
import { Btn } from "./HeroStyles";

function Hero(){
    return(
        <>
            <HeroContaniner>
                <img src={hero} alt="hero" />
                <Btn>Ir a la tienda</Btn>
            </HeroContaniner>
        </>
    );
};

export default Hero;