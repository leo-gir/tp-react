import { BtnContainer, CardContainer, DetailsBtn, AddBtn } from "./ProductCardStyles";


function ProductCard ({cardName, cardImg, cardPrice}){

    return (
            <CardContainer>
                <img src={cardImg} alt={cardName} />
                <h4>{cardName}</h4>
                <span>Precio: ${cardPrice}</span>
                <BtnContainer>
                    
                    <DetailsBtn>Detalles</DetailsBtn>
                    <AddBtn>Agregar</AddBtn>
                </BtnContainer>
        </CardContainer>
    )
};

export default ProductCard;
