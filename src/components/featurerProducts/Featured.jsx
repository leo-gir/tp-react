import { FeaturedSectionContainer, ProductCardsContainer} from "./FeaturedStyles";
import ProductCard from "./ProductCard";


function Featured (){
    return(
        <>
            <FeaturedSectionContainer>
                <h2>Productos destacados</h2>
                <ProductCardsContainer>
                    <ProductCard cardImg={"https://i.imgur.com/cSytoSD.jpeg"} cardName="Buzo Canguro Clásico" cardPrice={15000} />
                    <ProductCard cardImg={"https://i.imgur.com/QkIa5tT.jpeg"} cardName="Remera estampada" cardPrice={10000} />
                    <ProductCard cardImg={"https://i.imgur.com/KeqG6r4.jpeg"} cardName="Gorra negra clásica" cardPrice={8000} />
                    <ProductCard cardImg={"https://i.imgur.com/YaSqa06.jpeg"} cardName="Auriculares supraaurales" cardPrice={18000} />
                    <ProductCard cardImg={"https://i.imgur.com/OKn1KFI.jpeg"} cardName="Notebook con RGB" cardPrice={1200000} />
                    <ProductCard cardImg={"https://i.imgur.com/BG8J0Fj.jpg"} cardName="Bicicleta eléctrica" cardPrice={1300000} />
                </ProductCardsContainer>
            </FeaturedSectionContainer>
        </>
    );
} 

export default Featured;