
import React, { useState, useContext } from 'react';
import ArrayProducts from "./data/productos.json"

const CartContext = React.createContext([]);


export const useCartContext = () => useContext(CartContext);



export const CartProvider = ({ Children }) => {
    const [cart, setCart] = useState([])

   

    const clearCart = () => setCart([])  // funcion para limpiar el carrito

    const isInCart = (id) => { return cart.find(producto => producto.id === id) ? true : false } // busca el objeto y si lo encuentra devuelve el objeto o false

    const removeProduct = (id) => setCart(cart.filter(producto => producto.id !== id))  //remover productos 


    return (
        <CartContext.Provider value={{
            clearCart: clearCart,
            isInCart: isInCart,
            removeProduct: removeProduct
        }}>
    //        {Children}
     //   </CartContext.Provider>)
}

export default CartContext