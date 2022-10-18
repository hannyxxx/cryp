 import './ItemDetail.css';
import  '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';





const rutaInicial = '../img/'

export const ItemDetail = ({data}) => {
  const[goToCard, setGoToCard] = useState(false);
 
 

    const onAdd = (quantify) => {
        setGoToCard(true);
    }

return(
    
<div className="detail">
<img  width={'200px'} src={rutaInicial+data.image} alt="" />


<div className="conteni">
<h2>{data.title}</h2>
{
    goToCard
    ? <Link to='/cart'>Terminar Compra</Link>
    : <ItemCount inicial={0} stock={10} onAdd={onAdd}/>
}
</div>

<div className="pri">
<button><h3 className='pri1'>{data.price}</h3></button>

</div>
</div>



);

}


export default ItemDetail;