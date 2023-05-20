import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getAllPizzasReducer} from '../reducers/pizzaReducers'
// import pizzas from '../pizzaData'
import Pizza from '../components/pizza'
// import {getAllPizzas} from '../actions/pizzaActions'


export default function Homescreen() {

const {pizzas,error,loading} = useSelector(state=>state.pizzas)


  const dispatch = useDispatch()
  
  useEffect(()=>{
   dispatch(getAllPizzasReducer())
  },[dispatch])

  return (
    <div>
       <div className='row justify-content-center'>


       { loading ? (<h1>loading...</h1>): error ? (<h1>something went wrong</h1>): 
        (pizzas.map(pizza=>{
        return <div className = 'col-md-3 m-3' key = {pizza._id}> 
           <div>
          <Pizza pizza={pizza}/>
           </div>
        </div>
      }))  
      
      }

       </div>
    </div>
  )
}


