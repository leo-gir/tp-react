import { FeaturedContainer, CardsContainer, FeaturedCards, BtnContainer,ProductBtn } from "./FeaturedStyles";
import ProductCard from "./ProductCard";


function Featured (){
    return(
        <>
            <FeaturedContainer>
                <h3>Productos destacados</h3>
                <ProductCard cardImg={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd3ugyf2ht6aenh.cloudfront.net%2Fstores%2F001%2F268%2F672%2Fproducts%2Fnegro1-be2c9fcafec64f6a2216463391373553-480-0.jpg&f=1&nofb=1&ipt=f6672b1b12573c0fcd19e9f98969d452a6191e3104c0e24711e00e2946587e50&ipo=images"} cardName="Buzo" cardPrice={5000} />
            </FeaturedContainer>
        </>
    );
} 

export default Featured;