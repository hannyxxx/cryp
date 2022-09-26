import { createContext, useEffect, useState } from "react"

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

const addToCart = (item, title, image, price, id, quantify) =>{
    if (isInCart(item.id)){
        alert('Se agrego al carrito!');
    } else {
   setCart([...cart] , { item, title, image, price, id, quantify }); 
}
};

const isInCart = (id) => {
    return cart.some ((item) => item.id === id);
};

useEffect(() => {
console.log(cart);
}, [cart]);

const vaciarCart = () => {
    setCart([]);
}

const eliminarItem = (productId) => {
let nuevoArreglo = [];
cart.forEach((product) => {
    if (product.id === productId) {
        console.log(product);
    } else{
        nuevoArreglo.push(product);
    }
});
setCart(nuevoArreglo);
};

  return (
    <CartContext.Provider value={{cart, addToCart, eliminarItem}}>

{children}

    </CartContext.Provider>
  );
};

export default CartProvider;