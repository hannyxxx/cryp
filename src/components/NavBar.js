import logo from '../multimedia/icon.png';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    return(
        <div className="navbar-contenedor">
<img src={logo} className="App-logo" alt="logo" />
{<ul ClassName="nav-menu">
<li>
    <NavLink 
    to={'/'}
    style={{ textDecoration:'none'}}>
        Inicio
        </NavLink>
    


    <NavLink 
    to={'/Diseños'}
    style={{ textDecoration:'none'}}>
        Diseños
        </NavLink>
    


    <NavLink 
    to={'/Quienes Somos?'}
    style={{ textDecoration:'none'}}>
    Quienes Somos?
    </NavLink>
    


    <NavLink to={'/Contacto'}className='btn'><button>Contacto</button></NavLink>
    </li>
</ul>
}

        </div>

        
    )
}

export default NavBar;