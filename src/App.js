import logo from '../src/components/multimedia/icon.png';
import './App.css';
import NavBar from './components/NavBar';
import ClassComponents from './ClassComponents/ClassComponent';
import FunctionalComponents from './functionalcomponents/FunctionalComponents';
import ItemLisConteiner from './components/ItemLisConteiner/ItemLisConteiner';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClassComponents />
        <FunctionalComponents />
        <ItemCount />
    <ItemLisConteiner />
        <div>
        {/* <ItemLisConteiner greeting='Hola'/> */}
          </div>
      </header>
    </div>
  );
}

export default App;
