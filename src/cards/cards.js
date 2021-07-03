import React from 'react';
import './cards.css'
import {Link} from "react-router-dom";
import { connect } from 'react-redux'
import { addProduct } from '../actions/actions';


const Cards = ({
  brand,
  description,
  id,
  name,
  preview,
  price,
  addProduct,
  removing
}) => {
  
  
    return (<>
    <div className="card" style={{width: '14rem'}} id={id}>
    <Link to={`/product/${id}`}  style={{textDecoration:"none",color:"black"}}>
      <img className="card-img-top" src={preview} alt="Card image cap"/>
      </Link>
  <Link to={`/product/${id}`}  style={{textDecoration:"none",color:"black"}}>
  <div className="card-body">
    <p className="card-text">{name}</p>
    <p className="card-text">{brand}</p>
    <p className="card-text">{price}</p>
    </div>
    </Link>
    <div class="card-body" style={{display:"flex",justifyContent:"space-between"}} >
    <button onClick={addProduct} class="btn btn-primary" style={{backgroundColor:"#009688"}}>ADD</button>
    <button onClick={removing} class="btn btn-primary" style={{backgroundColor:"#009688"}}>REMOVE</button>
  </div>
</div>

</>);
}


export default Cards;