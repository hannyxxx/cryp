 
import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import {getFirestore, doc, getDoc} from 'firebase/firestore';



const nft = {
    id: 4, 
    image: "https://i.pinimg.com/564x/68/eb/c6/68ebc6b818166fa460878add04a8c90b.jpg",
    title: "Disor",
    price: '0,32 ETH'
};



export const ItemDetailContainer = () => {
    const { detailId } = useParams();
    const [data,  setData] = useState ([]);
    
    const db = getFirestore();

    const getProduct = () => {
    const queryDoc = doc(db, 'items', detailId);
    getDoc(queryDoc)
    .then(res => {
        setData({id:res.id, ...res.data()});
    })
    .catch((err) => console.log(err));
};
    /* const { detailId } = useParams();
 */

    useEffect(() => {
        getProduct();
    }, [detailId]);
    
  /*   useEffect(() => {
        const getData = new Promise(resolve => {
        setTimeout(() => {
            resolve(nft);
        }, 2000);
    });
    getData.then(res => setData(res.find(nft => nft.id === parseInt(detailId))));
},[]) */
  /*  getData.then(res => setData(res))
   .catch(error => console.log(error)); */
/* },[]) */

    return (
    <>
   { data ? <ItemDetail data={data}/> : 'Cargando...'}
    </>
    );
    
}

export default ItemDetailContainer; 