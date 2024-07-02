import { FeaturedSectionContainer, ProductCardsContainer} from "./FeaturedStyles2";
import ProductCard from "./ProductCard2";


function Featured (){
    return(
        <>
            <FeaturedSectionContainer>
                <h2>Productos destacados</h2>
                <ProductCardsContainer>
                    <ProductCard cardImg={"https://i.imgur.com/cSytoSD.jpeg"} cardName="Classic Black Hooded Sweatshirt" cardPrice={15000} />
                    <ProductCard cardImg={"https://i.imgur.com/QkIa5tT.jpeg"} cardName="Majestic Mountain Graphic T-Shirt" cardPrice={10000} />
                    <ProductCard cardImg={"https://i.imgur.com/KeqG6r4.jpeg"} cardName="Classic Black Baseball Cap" cardPrice={8000} />
                    <ProductCard cardImg={"https://i.imgur.com/YaSqa06.jpeg"} cardName="Stylish Red & Silver Over-Ear Headphones" cardPrice={18000} />
                    <ProductCard cardImg={"https://i.imgur.com/OKn1KFI.jpeg"} cardName="Sleek Modern Laptop with Ambient Lighting" cardPrice={1200000} />
                    <ProductCard cardImg={"https://i.imgur.com/BG8J0Fj.jpg"} cardName="Sleek Futuristic Electric Bicycle" cardPrice={1300000} />
                </ProductCardsContainer>
            </FeaturedSectionContainer>
        </>
    );
} 

export default Featured;