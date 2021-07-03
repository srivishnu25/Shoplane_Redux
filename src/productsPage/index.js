import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './index.css'
import {ProductsApi} from "../Apis/index"
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux'
import { addProduct } from "../actions/actions";



const ProductsPage = ({addProToCart}) => {
  const [product, setProduct] = useState({});
  const [loader, setloader] = useState(true)
    const [photo,setPhoto]=useState('')
    const [clickPic,setClickPic]= useState(false)
    let { id }= useParams();

    const {
      brand = "",
      description = "",
      id: productId = null,
      isAccessory = null,
      name = "",
      photos = [],
      preview = "",
      price = null,
      size = [],
    } = product;

    useEffect(() => {
      axios(`${ProductsApi}/${id}`).then((res) => {
        setProduct(res.data);
        setloader(false);
      });
    }, []);
     
   const photoClick=(a)=>{
      setPhoto(a) 
      setClickPic(a)
   }
    return (<>
    {loader?<CircularProgress id="loader"/>:(
      <div className="product-wrapper">
        <div className="previewDiv"><img id="preview" src={photo===''?preview:photo} alt="product-image"/></div>
        <div className="products-details-div">
        <h1>{name}</h1>
        <h3>Price: {price}</h3>
        <p><b>Description: </b><i>{description}</i></p>
       {photos.map((item)=><img onClick={()=>photoClick(item)} className={clickPic===item?"photos activee":"photos"} src={item} alt="photos"/>)}
       <div><button id="cart" onClick={()=>addProToCart(product)}>ADD TO CART</button></div>
      </div>
  </div>)}</>);
}
 

  
  const mapDispatchToProps = (dispatch)=>({
    addProToCart:(payload)=>dispatch(addProduct(payload))
  })
  
  export default connect(null, mapDispatchToProps)(ProductsPage)