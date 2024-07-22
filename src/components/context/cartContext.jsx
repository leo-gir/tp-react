import { createContext, useState } from "react";
import { useContext } from "react";
import { OpenMenuContext } from "../context/menuContext";



export const CartContext = createContext ();

export function CartProvider ({children}){
    const [openCart, setOpenCart] = useState(false);
    const toggleCart = () => {
        setOpenCart(prevOpenCart => !prevOpenCart)
    };
    return(
        <CartContext.Provider value={{openCart, toggleCart, setOpenCart}}>
            {children}
        </CartContext.Provider>

    );
};

