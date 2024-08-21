import { BtnContainer, CardContainer, DetailsBtn, AddBtn } from "./ProductCardStyles";


function ProductCard ({title, images, price}){

    return (
            <CardContainer>
                <img src={images} alt={title} />
                <h4>{title}</h4>
                <span>Precio: ${price}</span>
                <BtnContainer>
                    
                    <DetailsBtn>Detalles</DetailsBtn>
                    <AddBtn>Agregar</AddBtn>
                </BtnContainer>
        </CardContainer>
    )
};

export default ProductCard;
