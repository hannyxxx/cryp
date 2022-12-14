import logo from '../src/multimedia/icon.png';
import './App.css';
import NavBar from './components/NavBar';
import ItemLisConteiner from './components/ItemLisConteiner/ItemLisConteiner';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetail from './components/ItemDetail/ItemDetail';

import CartProvider from './components/Context/CartProvider';
import Cart from './components/Cart/Cart';
import QuienesSomos from './components/QuienesSomos/QuienesSomos';



function App() {
  return (
    <div className="App">
     {/*  <NavBar /> */}
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <ItemCount inicial={0}/> */}
  <CartProvider >

  <BrowserRouter>
     <NavBar/>
    
     <Routes>
     <Route path="/" element={<ItemLisConteiner/>} />
     <Route path="category/:catgoriaId" element={<ItemLisConteiner/>} />
      <Route path="/detail/:detailId" element={<ItemDetailContainer/>} />
      <Route path="/card" element={<ItemDetail/>} />
      <Route path="/Quienes Somos?" element={<div>Quienes Somos?</div>} />
      <Route path="/Contacto" element={<div>Contacto</div>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/Quienes Somos?" element={<QuienesSomos/>} />
     </Routes>
     </BrowserRouter>

  </CartProvider>
     

     <img src={logo} className="App-logo" alt="logo" />
        <ItemCount inicial={0}/>
        <div>
        {/* <ItemLisConteiner greeting='Hola'/> */}
          </div>
      </header>
    </div>
  );
}

export default App;
