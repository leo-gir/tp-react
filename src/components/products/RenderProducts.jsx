import { products } from "../../assets/data/Products"
import ProductCard from "../cards/ProductCard"

export default function RenderProducts() {

    return (
        products.map(product=>(
            <ProductCard 
                key={product.id}
                title={product.title}
                images={product.images[0]}
                price={product.price}
            />
        ))
    )
}
