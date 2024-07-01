import { CardsContainer, FeaturedCards, BtnContainer, ProductBtn } from "./FeaturedStyles";

function ProductCard ({cardName, cardImg, cardPrice}){

    return (
        <CardsContainer>
            <FeaturedCards>
                <h3>{cardName}</h3>
                <img src={cardImg} alt={cardName} />
                <span>Precio: ${cardPrice}</span>
                <BtnContainer>
                    <ProductBtn>Agregar al carrito</ProductBtn>
                </BtnContainer>
            </FeaturedCards>
        </CardsContainer>
    )
};

export default ProductCard;
