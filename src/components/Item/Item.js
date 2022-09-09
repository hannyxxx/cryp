import '../Item/Item.css';
const Item = ({title, price, image}) => {
  return (
    <div>
        <img width={'200px'} src={image} alt={title}/>
         <h2 className="itu">{title}</h2>
        <button className='itub'> <h3 className='itu'>{price}</h3></button>
    </div>
  )
}

export default Item;

