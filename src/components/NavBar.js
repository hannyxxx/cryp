import logo from '../components/multimedia/icon.png';
const NavBar = () => {
    return(
        <div className="navbar-contenedor">
<img src={logo} className="App-logo" alt="logo" />
<ul ClassName="nav-menu">
<li>
    <a href="/">Inicio</a>
    </li>

<li>
    <a href="/">Diseños</a>
    </li>

<li>
    <a href="/">Quienes Somos?</a>
    </li>

<li>
    <a href="/"className='btn'><button>Contacto</button></a>
    </li>
</ul>

        </div>
    )
}

export default NavBar;