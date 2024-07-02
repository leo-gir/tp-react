import { BtnContainer, CardContainer, ProductBtn } from "./FeaturedStyles2";


function ProductCard ({cardName, cardImg, cardPrice}){

    return (
            <CardContainer>
                <h3>{cardName}</h3>
                <img src={cardImg} alt={cardName} />
                <span>Precio: ${cardPrice}</span>
                <BtnContainer>
                    <ProductBtn>Agregar al carrito</ProductBtn>
                </BtnContainer>
        </CardContainer>
    )
};

export default ProductCard;
