/* eslint-disable no-unused-vars */
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['anwar', 'apurbo', 'alomgir', 'salman shah']
  return (
    <div className="App">
      <header className="App-header">
       <p>I am a React</p>
       <Person name={nayoks[0]}></Person>
       <Person name="Mousumi"></Person>
       <Person name="bapparaz"></Person>
       <Person name="Arefin Nisho"></Person>
      </header>
    </div>
  );
}
function Person(props){
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
