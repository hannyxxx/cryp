 import './ItemDetail.css';
export const ItemDetail = ({data}) => {
return(

<div className="detail">
<img  width={'200px'} src={data.image} alt="" />


<div className="conteni">
<h2>{data.title}</h2>
</div>

<div className="pri">
<button><h3 className='pri1'>{data.price}</h3></button>
</div>
</div>



);

}


export default ItemDetail;