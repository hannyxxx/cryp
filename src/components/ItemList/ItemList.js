import Item from "../Item/Item";

export const ItemList = ({lista}) => {
  

    return (
    <div>
        {
            lista.map((product) => (
                
                <Item 
                key={product.id}
                id={product.id}
                title={product.title} 
                price={product.price} 
                image={product.image} 
                />
               
            ))
        }
     </div>
     );
  
};

export default ItemList;
