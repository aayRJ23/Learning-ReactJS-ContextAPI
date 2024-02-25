import React from 'react'
import "./App.css"
import Item from './components/Item'
import Cart from './components/Cart'

const App = () => {
  return (
    <div className='App'>
        <h1>Learning Context API</h1>
        <br />
        <hr />
        <Item name={"MacBook Pro"} price={100000}/>
        <Item name={"Pendrive"} price={4000}/>
        <Item name={"Shirt"} price={2000}/>
        <hr /><hr />
        <Cart/>

    </div>
  )
}

export default App
