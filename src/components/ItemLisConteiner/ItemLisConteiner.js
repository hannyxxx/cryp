import data from "../MockData";
import { useEffect, useState } from "react";
import  ItemList  from "../ItemList/ItemList";
import { Link, useParams } from "react-router-dom";
import {getFirestore, getDocs, collection, query} from 'firebase/firestore';


const ItemLisConteiner = () => {
    const [productList, setProductList] = useState ([])
    const { categoryName } = useParams();
    console.log(categoryName);
    
const getProducts = () => {
const db = getFirestore();
const querySnapshot = collection(db, 'product');

/* const queryFilter = query(querySnapshot, 
  where("categoryId", "===", categoryName)
  ); */
  if (categoryName) {
    const queryFilter = query(
      querySnapshot, 
      ("categoryId", "===", categoryName)
      );
    getDocs(queryFilter).then((response) => {
      const data = response.docs.map((product) => {
        console.log(product.data)
        return { id: product.id, ...product.data()};
      });
     setProductList (data);
    });
  }else{
    getDocs(querySnapshot).then((response) => {
      const data = response.docs.map((product) => {
        return { id: product.id, ...product.data()};
      });
     setProductList (data);
    });
  }

/* getDocs(queryFilter).then((response) => {
  const data = response.docs.map((doc) => {
    return { id: doc.id, ...doc.data()};
  });
 setProductList (data);
}); */

};

 /*    useEffect(() => {
        getProducts.then((response) => {
        setProductList(response);
        })
        .catch(error => console.log(error));
    }, []); */

  /*   const getProducts =  new Promise ((resolve) => {
          setTimeout (() => {
            resolve(data);
          }, 2000)
    }); */

    return (
    <>
    <Link style={{color:'whithe'}} to="/cart">Carrito</Link>
    <ItemList lista={productList}/>
    </>
    );
    
}

export default ItemLisConteiner;