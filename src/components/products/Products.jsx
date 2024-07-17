import heroProductsImg from "../../assets/img/productsHero.png";
import { faList } from "@fortawesome/free-solid-svg-icons/faList";
import {
    CardsContainer,
    CategoriesContainer,
    CatItemsContainer,
    HeroProducts,
    ProductSectionContainer,
    StyledFontAwesomeIcon,
} from "./ProductStyles";
import ProductCard from "../cards/ProductCard";

function Products() {
    return (
        <>
            <HeroProducts>
                <img src={heroProductsImg} alt="" />
            </HeroProducts>
                <h2>Productos</h2>

            <ProductSectionContainer>
                <CategoriesContainer>
                    <h4>
                        <StyledFontAwesomeIcon icon={faList} /> Categorías
                    </h4>
                    <CatItemsContainer>
                        <span>Ropa de mujer</span>
                        <span>Ropa de hombre</span>
                        <span>Electrónicos</span>
                    </CatItemsContainer>

                </CategoriesContainer>
                <CardsContainer>
                    <ProductCard
                        cardImg={"https://i.imgur.com/cSytoSD.jpeg"}
                        cardName="Buzo Canguro Clásico"
                        cardPrice={15000}
                    />
                    <ProductCard
                        cardImg={"https://i.imgur.com/QkIa5tT.jpeg"}
                        cardName="Remera estampada"
                        cardPrice={10000}
                    />
                    <ProductCard
                        cardImg={"https://i.imgur.com/KeqG6r4.jpeg"}
                        cardName="Gorra negra clásica"
                        cardPrice={8000}
                    />
                    <ProductCard
                        cardImg={"https://i.imgur.com/YaSqa06.jpeg"}
                        cardName="Auriculares supraaurales"
                        cardPrice={18000}
                    />
                    <ProductCard
                        cardImg={"https://i.imgur.com/OKn1KFI.jpeg"}
                        cardName="Notebook con RGB"
                        cardPrice={1200000}
                    />
                    <ProductCard
                        cardImg={"https://i.imgur.com/BG8J0Fj.jpg"}
                        cardName="Bicicleta eléctrica"
                        cardPrice={1300000}
                    />
                </CardsContainer>
            </ProductSectionContainer>
        </>
    );
}

export default Products;
