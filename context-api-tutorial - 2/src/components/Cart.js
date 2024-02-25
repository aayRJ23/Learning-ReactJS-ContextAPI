import React from 'react'
import { CartContext } from '../context/Cart'
import { useContext } from 'react'

const Cart = () => {

    const cart=useContext(CartContext);
    
    const total=cart.item.reduce((a,b)=>a+b.price,0);

  return (
    <div className='cart'>
        <h2>Cart</h2>
        {/* <li>MacBook Pro -- $100000</li> */}
        {cart && cart.item.map((item)=>(
        <li>{item.name} -- {item.price}</li>))}

        <h5>Total Price : ${total}</h5>
    </div>
  )
}

export default Cart
