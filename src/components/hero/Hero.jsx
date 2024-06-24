import { HeroContaniner } from "./HeroStyles";
import hero from "../../assets/img/hero.png"

function Hero(){
    return(
        <>
            <HeroContaniner>
                <img src={hero} alt="hero" />
            </HeroContaniner>
        </>
    );
};

export default Hero;