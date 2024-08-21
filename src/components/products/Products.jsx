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
 import RenderProducts from "./RenderProducts";

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
                        <span>Ropa</span>
                        <span>Calzado</span>
                        <span>Electrónicos</span>
                        <span>Varios</span>
                    </CatItemsContainer>

                </CategoriesContainer>
                <CardsContainer>

                <RenderProducts/>

                </CardsContainer>
            </ProductSectionContainer>
        </>
    );
}

export default Products;
