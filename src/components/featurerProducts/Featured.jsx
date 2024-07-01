import { FeaturedContainer, fetchData } from "./FeaturedStyles";
import { CardsContainer } from "./FeaturedStyles";
import { FeaturedCards } from "./FeaturedStyles";
import { BtnContainer } from "./FeaturedStyles";
import { ProductBtn } from "./FeaturedStyles";


function Featured (){
    return(
        <>
            <FeaturedContainer>
                <h2>Productos destacados</h2>
                <CardsContainer>
                    <FeaturedCards>
                        <img src="https://ximg.es/312x312/fff/000" alt="" />
                        <span>Precio: $$$</span>
                            <BtnContainer>
                                <ProductBtn>Agregar al carrito</ProductBtn>
                                
                        </BtnContainer>
                    </FeaturedCards>
                    <FeaturedCards>{}</FeaturedCards>
                    <FeaturedCards>asdsada</FeaturedCards>
                    <FeaturedCards>asdsada</FeaturedCards>
                </CardsContainer>
            </FeaturedContainer>
        </>
    );
} 

export default Featured;