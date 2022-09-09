 
import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';

const film = {
    id: 4, 
    image: "https://i.pinimg.com/564x/68/eb/c6/68ebc6b818166fa460878add04a8c90b.jpg",
    title: "Disor",
    price: '0,32 ETH'
};

export const ItemDetailContainer = () => {
    const [data, setData] = useState ([])
    
    useEffect(() => {
        const getData = new Promise(resolve => {
        setTimeout(() => {
            resolve(film);
        }, 2000);
    });

   getData.then(res => setData(res))
   .catch(error => console.log(error));
},[])

    return (
    <>
    <ItemDetail data={data}/>
    </>
    );
    
}

export default ItemDetailContainer; 