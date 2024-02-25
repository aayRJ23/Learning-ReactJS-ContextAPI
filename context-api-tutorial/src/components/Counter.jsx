import React from 'react'
import { CounterContext } from '../context/Counter'
import { useContext } from 'react'

const Counter = () => {

    const counterContext=useContext(CounterContext);

  return (
    <div>
      <button type="button" onClick={()=> {counterContext.setCount(counterContext.count+1)}}>Increment</button>
      <button type="button" onClick={()=> {counterContext.setCount(counterContext.count-1)}}>Decrement</button>
    </div>
  )
}

export default Counter
