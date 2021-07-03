import React, { useState } from 'react';
import './App.css'
import TopBar from './topBar/topBar';
import {BrowserRouter as Router,Switch,Link,Redirect,Route} from "react-router-dom";
import Home from './Home/home'
import ProductsPage from './productsPage/index';
import Cart from './cart/cart';


const App = () => {
  
  return (<>
  <Router> 
 <TopBar /> 
 
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/product/:id" component={ProductsPage}/>
    <Route path="/cart" component={Cart}/>
    <Route component={()=><><h1>404</h1><h1>404</h1></>}/>
  </Switch>
  </Router>
  </>);
}
export default App;


