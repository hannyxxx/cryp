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

const eliminarItem = (title) => {
    const nArr = cart.filter((item)=>item.filter!==title);
    setCart(nArr);
}

  return (
    <CartContext.Provider value={{cart, addToCart}}>

{children}

    </CartContext.Provider>
  );
};

export default CartProvider;