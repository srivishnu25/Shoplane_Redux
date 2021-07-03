import React, { Component , useState  } from 'react'
import { connect , useSelector } from 'react-redux'
import { addToProduct, deleteProduct } from '../actions/actions';




const Products = ({products ,addProduct,deleteProduct}) => {
    const abc = useSelector(state=> state.products)
    const [productName,setProduct] = useState('')
    return (<>
     <div>
                {console.log(abc)}
                { products.length && products.map((item)=><>
               <div className="product-wrapper">
                <h5>{item.name}</h5>
                <h5>{item.id}</h5>
                <button onClick={(()=>deleteProduct(item.id))}>DELETE</button><br/>
                </div></>)} 
                
                <input onChange={(e)=>setProduct(e.target.value)} value={productName}/> 
                <button onClick={(()=>{addProduct({id:parseInt(Math.random()*10), name:productName})
                setProduct('')})}>ADD</button>
              </div>
    </>  );
}
 
// export default Products;


const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps =(dispatch)=>({
    addProduct : (data)=> dispatch(addToProduct(data)), 
    deleteProduct:(proItem)=> dispatch(deleteProduct(proItem))
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)