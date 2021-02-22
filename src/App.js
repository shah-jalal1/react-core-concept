/* eslint-disable no-unused-vars */
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['anwar', 'apurbo', 'alomgir', 'salman shah']
  const products = [
    { name: 'photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$60.99' },
    { name: 'PDF Reader', price: '$6.99' }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React</p>

        {/* <Product name={products[0].name} price={products[0].price}></Product> */}
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>

        <Person name={nayoks[0]}></Person>
        <Person name="Mousumi"></Person>
        <Person name="bapparaz"></Person>
        <Person name="Arefin Nisho"></Person>
      </header>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    widht: '200px',
    float: 'left'
  }
  // destructure
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      {/* <h2>Name: {props.name}</h2> */}
      {/* <h2>Name: {props.product.name}</h2> */}
      <h2>Name: {name}</h2>
      {/* <h5>Price: {props.price}</h5> */}
      <h5>Price: {price}</h5>
      <button>Buy now</button>
    </div>
  )
}

function Person(props) {
  console.log(props);
  return (
    // Multiple compoonent
    <div style={{
      border: '2px solid red',
      margin: '10px'
    }}>
      {/* <h1>Name: Sakib Al Hasan</h1> */}
      <h1>Name: {props.name}</h1>
      <h3>Hero of the year</h3>
    </div>
  )
}

export default App;
