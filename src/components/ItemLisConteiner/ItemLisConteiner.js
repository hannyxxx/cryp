import data from "../MockData";
import { useEffect, useState } from "react";
import  ItemList  from "../ItemList/ItemList";
import { Link } from "react-router-dom";


const ItemLisConteiner = () => {
    const [productList, setProductList] = useState ([])
    
    useEffect(() => {
        getProducts.then((response) => {
        setProductList(response);
        })
        .catch(error => console.log(error));
    }, []);

    const getProducts =  new Promise ((resolve) => {
          setTimeout (() => {
            resolve(data);
          }, 2000)
    });

    return (
    <>
    <Link style={{color:'whithe'}} to="/cart">Carrito</Link>
    <ItemList lista={productList}/>
    </>
    );
    
}

export default ItemLisConteiner;