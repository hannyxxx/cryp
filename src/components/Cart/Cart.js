import { useContext } from "react"
import { CartContext } from "../Context/CartProvider"
import { Link } from "react-router-dom";


const Cart = () => {
    const { cart, addToCart, eliminarItem } = useContext (CartContext);
  return (
    <div>
        <h1>Cart</h1>
        {cart.length === 0 ? (
            <>
            <h2>No hay productos en tu carrito</h2>
            <Link to={'/'}>Volver a comprar</Link>
            </>
            
        ) : (
            <>
            
            {cart.map((item) => (
          <div key={item.id}>
           <h3>{item.title}</h3>
        <p>{item.price}</p>
        <img src={item.image} alt={item.title} />
        <p>{item.quantify}</p>
        <button onClick={() => eliminarItem(item.id)}> Eliminar producto </button>
    </div>
))}
            </>
        )
    }
      
    </div>
  );
};

export default Cart;