import '../Item/Item.css';
import { NavLink } from 'react-router-dom';

const rutaInicial ='../img/';
export const Item = ({title, price, image, id}) => {
  return (
    <div>
      
    <img className='img1' 
    width={'200px'} 
    src={rutaInicial + image} 
    alt={title}/> 
    <NavLink to={`/detail/${id}`}>
         <h2 className="itu">{title}</h2>
         </NavLink>
        <button className='itub'> <h3 className='itu'>{price}</h3></button>
    </div>
  )
}

export default Item;

