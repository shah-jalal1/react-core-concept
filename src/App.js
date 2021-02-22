/* eslint-disable no-unused-vars */
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  var person = {
    name: "dr. Mahfuz",
    job: 'singer'
  }
  var style = {
    color: 'red',
    backgroundColor: 'yellow'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        {/* <h1>{2+3}</h1> */}
        <h1 style={style}>{person.name + " " + person.job}</h1>
       

        <p style={{backgroundColor:"cyan", color:'red'}}>My first react paragraph</p>
      </header>
    </div>
  );
}

export default App;
