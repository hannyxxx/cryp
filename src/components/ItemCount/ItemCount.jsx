import './ItemCount.css';
import '../ItemDetail/ItemDetail';


import React, {useState} from 'react';

export const ItemCount = ({inicial, stock, onAdd}) => {
    const [count, setCount] = useState(inicial);

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

  /*   useEffect(() => {
        setCount(parseInt(inicial));
    }, [inicial]) */

    return (
        <div  className='counter'>
            <button enable={count <= 1} onClick={decrease}>-</button>
            <span>{count}</span>
            <button enable={count <= stock} onClick={increase}>+</button>
            <div>
            <button enable={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;
