import { FeaturedContainer, CardsContainer, FeaturedCards, BtnContainer,ProductBtn } from "../FeaturedStyles";
import ProductCard from "../ProductCard";


function Featured (){
    return(
        <>
            <FeaturedContainer>
                <h3>Productos destacados</h3>
                <ProductCard cardImg={"https://i.imgur.com/cSytoSD.jpeg"} cardName="Classic Black Hooded Sweatshirt" cardPrice={15000} />
                <ProductCard cardImg={"https://i.imgur.com/QkIa5tT.jpeg"} cardName="Majestic Mountain Graphic T-Shirt" cardPrice={10000} />
                <ProductCard cardImg={"https://i.imgur.com/KeqG6r4.jpeg"} cardName="Classic Black Baseball Cap" cardPrice={8000} />
                <ProductCard cardImg={"https://i.imgur.com/YaSqa06.jpeg"} cardName="Stylish Red & Silver Over-Ear Headphones" cardPrice={18000} />
                <ProductCard cardImg={"https://i.imgur.com/OKn1KFI.jpeg"} cardName="Sleek Modern Laptop with Ambient Lighting" cardPrice={1200000} />
                <ProductCard cardImg={"https://i.imgur.com/BG8J0Fj.jpg"} cardName="Sleek Futuristic Electric Bicycle" cardPrice={1300000} />
            </FeaturedContainer>
        </>
    );
} 

export default Featured;