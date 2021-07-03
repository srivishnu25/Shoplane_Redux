import React, { useEffect,useState} from 'react';
import Carousell from '../carousel/carousel';
import Cards from "../cards/cards";
import { ProductsApi } from "../Apis/index";
import axios from 'axios';
import { connect } from 'react-redux'
import {addProduct, getProduct,removing} from "../actions/actions"
import './home.css'

const Home = ({products,sendProducts,addProToCart,remove}) => {
  
    useEffect(()=>{
        axios(ProductsApi).then(res=>sendProducts(res.data))
        
    },[])
    return (<>
    <Carousell/>
    <div className="card-wrapper">{products?.map((item)=><Cards {...item} addProduct={() => addProToCart(item)} removing={()=>remove(item)} />)}</div>
    </>  );
}
 
const mapStateToProps = (state) => ({
    products:state.products,
    cart:state.cart
  })
  
  const mapDispatchToProps = (dispatch)=>({
    sendProducts:(payload)=>dispatch(getProduct(payload)),
    addProToCart:(payload)=>dispatch(addProduct(payload)),
    remove:(payload)=>dispatch(removing(payload))
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home)