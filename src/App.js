import logo from '../src/components/multimedia/icon.png';
import './App.css';
import NavBar from './components/NavBar';
import ItemLisConteiner from './components/ItemLisConteiner/ItemLisConteiner';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ItemCount inicial={0}/>
   {/*  <ItemLisConteiner /> */}
   {/*   <ItemDetailContainer/>  */} 
   
     <BrowserRouter>
     <NavBar/>
     <Routes>
     <Route path="/" element={<ItemLisConteiner/>} />
      <Route path="/datail/:detailId" element={<ItemDetailContainer/>} />
      <Route path="/Diseños" element={<div>Diseños</div>} />
      <Route path="/Quienes Somos?" element={<div>Quienes Somos?</div>} />
      <Route path="/Contacto" element={<div>Contacto</div>} />
     </Routes>
     </BrowserRouter>
        <div>
        {/* <ItemLisConteiner greeting='Hola'/> */}
          </div>
      </header>
    </div>
  );
}

export default App;
