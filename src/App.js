/* eslint-disable no-unused-vars */
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
       <p>I am a React</p>
       <Person></Person>
       <Person></Person>
       <Person></Person>
      </header>
    </div>
  );
}
function Person(){
  return (
    // Multiple compoonent
  <div style={{
      border: '2px solid red', 
      margin: '10px'
    }}>
    <h1>Name: Sakib Al Hasan</h1>
    <h3>Hero of the year</h3>
    </div>
  )
}

export default App;
