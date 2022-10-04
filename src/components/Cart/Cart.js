import { useContext } from "react"
import { CartContext } from "../Context/CartProvider"
import { Link } from "react-router-dom";
import { collection, addDoc, getFirestore, updateDoc, doc } from "firebase/firestore";
import moment from "moment/moment";


const Cart = () => {
    const { cart, addToCart, eliminarItem } = useContext (CartContext);
    const db = getFirestore();
const createOrder = () => {

const order = {
  buyer: {
    name: 'han',
    phone: '123456789',
    email: 'han@han.com'
  },
  items: cart,
  total: cart.reduce(
    (valorPasado, valorActual) => 
    valorPasado + (valorActual.price * valorActual.quantify), 
    0
    ),
    date: moment(). format('DD/MM/YYYY, h:mm:ss a'),
};
const query = collection(db, 'orders');
addDoc(query, order)
.then(({id})=> {
  console.log(id);
  updateOrder(cart);
  alert('Felicidades por tu compra');
}) 
.catch(() => 
alert('Tu compra no pudo ser completada, intentalo mas tarde')
);
};

const updateOrder = () => {
  const idOrder = '5maApNftPbxeJwYzfc61';
  const order = {
  buyer: {
    name: 'han',
    phone: '123456789',
    email: 'han@han.com'
  },
  items: cart.pop(),
  total: cart.reduce(
    (valorPasado, valorActual) => 
    valorPasado + (valorActual.price * valorActual.quantify), 
    0
    ),
    date: moment(). format(),
};

const queryUpdate =  doc(db, 'orders');
updateDoc(queryUpdate, order)
.then((response) =>{
  console.log(response);
})
.catch((error) =>{
  console.log(error);
});
};

  return (
    <div style={{}}>
        <h1>Cart</h1>
        {cart.length === 0 ? (
            <>
            <h2>No hay productos en tu carrito</h2>
           <button > <Link to={'/'}>Volver a comprar</Link></button>
            </>
            
        ) : (
            <>
            
            {cart.map((item) => (
          <div key={item.id}>
           <h3>{item.title}</h3>
        <p>{item.price}</p>
        <img src={'../img/' + item.image} width={"200px"} alt={item.title} />
        <p>{item.quantify}</p>
        <button onClick={() => eliminarItem(item.id)}> Eliminar producto </button>
    </div>
     

))}
            </>

        ) }
    <div>
      <button onClick={createOrder}>Crear orden de compra</button>
    </div>

      </div>


    
  );
};

export default Cart;