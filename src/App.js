/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['anwar', 'apurbo', 'alomgir', 'salman shah', 'razzak', 'josim'];
  const products = [
    { name: 'photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$60.99' },
    { name: 'PDF Reader', price: '$6.99' },
    { name: 'Premuere El', price: '$249.99' }
  ];

  const friends = [
    {name: 'tasnim', age: '26'},
    {name: 'zamil', age: '36'},
    {name: 'poran', age: '56'},
    {name: 'rakib', age: '98'},
    {name: 'asif', age: '46'},
    {name: 'sakib', age: '54'}
  ];

  const nayokNames = nayoks.map(nayok => nayok);
  // console.log(nayokNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React</p>
        <Counter></Counter>
        <Users></Users>
        
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          <br/>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {/* <Product name={products[0].name} price={products[0].price}></Product> */}
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product> */}
        {
          products.map(pd => <Product product={pd}></Product>)
        }

        <Person name={nayoks[0]}></Person>
        <Person name="Mousumi"></Person>
        <Person name="bapparaz"></Person>
        <Person name="Arefin Nisho"></Person>

        {
          friends.map(fr => <Friend friend={fr}></Friend>)
        }

        <Posts></Posts>

      </header>
    </div>
  );
}

function Posts() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data));
  }, []);


  return(
    <div>
      <h3>Total Posts: {posts.length}</h3>
      {
        posts.map(post => <li>{post.title}</li>)
      }
      
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  return(
    <div>
        <h3>Dynamic Users: {users.length}</h3>
        <ul>
          {
            users.map(user => <li>{user.name}</li>)
          }
        </ul>
    </div>
  )
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
  // console.log(props);
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

function Counter() {
  const [count, setCount] = useState(10);
  // const handleIncrease = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  return(
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count-1)}>Decrese</button>
        <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Friend(props) {
  const {name, age} = props.friend;
  
  const friendStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: '#808000',
    height: '200px',
    widht: '200px',
    float: 'left'
  }
  
  return (
    <div style={friendStyle}>
        <h1>name: {name}</h1>
        <h5>age: {age}</h5>
    </div>
  )
}

export default App;
