import data from "../MockData";
import { useEffect, useState } from "react";
import  ItemList  from "../ItemList/ItemList";


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
    <ItemList lista={productList}/>
    </>
    );
    
}

export default ItemLisConteiner;