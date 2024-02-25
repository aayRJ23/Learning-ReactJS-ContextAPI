import React from 'react'
import { CartContext } from '../context/Cart'
import { useContext } from 'react'


const Item = (props) => {
  
    const cart=useContext(CartContext);
    console.log("Cart",cart);
  
    return (
    <div>
      <h3>Name : {props.name}</h3>
      <h4>Price : ${props.price}</h4>
      <button type="button" onClick={()=>cart.setItem([...cart.item,{name:props.name,price:props.price},])}>Add To Cart</button>
      <hr />
    </div>
  )
}

export default Item
