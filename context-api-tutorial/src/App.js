import React from 'react'
import "./App.css"
import Counter from './components/Counter'
import {useContext} from "react"
import { CounterContext } from './context/Counter'

const App = () => {

  const counterState=useContext(CounterContext);

  // console.log("Context" ,counterState);

  return (
    <div className='App'>
      <h1>Counter is {counterState.count}</h1>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  )
}

export default App
