import logo from '../src/multimedia/icon.png';
import './App.css';
import NavBar from './components/NavBar';
import ItemLisConteiner from './components/ItemLisConteiner/ItemLisConteiner';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetail from './components/ItemDetail/ItemDetail';



function App() {
  return (
    <div className="App">
     {/*  <NavBar /> */}
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <ItemCount inicial={0}/> */}
  
     <BrowserRouter>
     <NavBar/>
    
     <Routes>
     <Route path="/" element={<ItemLisConteiner/>} />
      <Route path="/detail/:detailId" element={<ItemDetailContainer/>} />
      <Route path="/card" element={<ItemDetail/>} />
      <Route path="/Diseños" element={<div>Diseños</div>} />
      <Route path="/Quienes Somos?" element={<div>Quienes Somos?</div>} />
      <Route path="/Contacto" element={<div>Contacto</div>} />
     </Routes>
     </BrowserRouter>

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
