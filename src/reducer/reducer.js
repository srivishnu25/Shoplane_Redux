import { ADDING, GET_PRODUCTS,SEARCH,UPDATE_CART,CLEAR_CART, REMOVE } from "../actionTypes/actionTypes"


const initialState = {
     products: [],
     originalData:[],
     cart:[]
}

const Reducers=  (state = initialState, { type, payload }) => {
    
    switch (type) {
    
    case GET_PRODUCTS:
        return {...state , products:payload, originalData:payload }
    case ADDING:{
        
        return {...state , cart:[...state.cart,payload]  }
    }
    case REMOVE:{
        return {...state , cart:state.cart.filter(({id})=>payload.id!=id)}
    }
    case SEARCH:{
        const filterData = state.originalData.filter(({name})=>name&&name.toLowerCase().includes(payload&&payload.toLowerCase()))
        return {...state , products:filterData  }
    }
    case CLEAR_CART:
      return { ...state, cart: [] };


    default:
        return state
    }
}
export default Reducers;