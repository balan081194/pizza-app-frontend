import {configureStore} from '@reduxjs/toolkit'
import pizzaReducers from './reducers/pizzaReducers'
import { cartReducer } from './reducers/cartReducers'
import { registerUserReducer, loginUserReducer } from './reducers/userReducer';


  
  const cartItems = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [];
  
  const currentUser = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser'))
    : null;
  
  const initialState = {
    cartReducer: {
      cartItems: cartItems,
     
    },
    loginUserReducer: {
      currentUser: currentUser,
    },
  };


  const store = configureStore({
    reducer:{
    initialState:initialState,
    pizzas : pizzaReducers,
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    }

  })
  
  export default store;

