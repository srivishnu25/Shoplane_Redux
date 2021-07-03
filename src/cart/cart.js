
import React, { useEffect,useState} from 'react';
import {connect} from 'react-redux'
import "./cart.css";
import { clearCart } from "../actions/actions";
import { Redirect } from "react-router-dom";

const Cart = ({cart,clearAll}) => {
      const counts =
        (cart.map((item)=>item.name).reduce(function(acc,itemName){
            acc[itemName]= (acc[itemName]||0)+1;
            return acc;
          },{}))
          const [home, setHome] = useState(false);


    return (<div style={{marginTop:"7%"}}>
        {home && <Redirect to="/" />}
        
        <div className="leftSec">
        <h1>- Cart - </h1>
        {cart.length && Object.keys(counts).map((countItem)=><div className="cartDiv">
       <p>{countItem}</p>
       <div className="imageContainer">
       <img src={(cart.filter((item)=>item.name== countItem))[0].preview} className="cartImages" alt="photo"/>
       <div>
       <h6>Price: {(cart.filter((item)=>item.name== countItem))[0].price}</h6>
       <h6>Quantity:{counts[countItem]} </h6></div>
       </div>
        </div>)}</div>

        <div className="rightSec">
          <h3>Total:{cart.length &&cart.reduce((acc, item) => acc + item.price, 0)}</h3>
          <button
        onClick={() => {
          clearAll();
          setHome(true);
        }}
        
      >
        Place Order
      </button>
        </div>
        
        </div>
    )}
 

const mapStateToProps = (state) => ({
    cart:state.cart
  })
  const mapDispatchToProps = (dispatch) => ({
    clearAll: () => dispatch(clearCart()),
  });
 export default connect(mapStateToProps, mapDispatchToProps)(Cart)