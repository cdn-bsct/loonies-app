import './App.css';

import React from 'react'
import { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Routes>
        <Route path='/home' element ={<HomePage />} />
       </Routes>
      </div>
    );
  }
}

export default App;
