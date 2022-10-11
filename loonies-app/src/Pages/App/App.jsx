import './App.css';

import React from 'react'
import { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import EarnPage from '../EarnPage/EarnPage'
import SpendPage from '../SpendPage/SpendPage'
import SavePage from '../SavePage/SavePage'
import RefsPage from '../RefsPage/RefsPage';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Routes>
        <Route path='/earn' element ={<EarnPage />} />
        <Route path='/spend' element ={<SpendPage />} />
        <Route path='/save' element ={<SavePage />} />
        <Route path='/refs' element ={<RefsPage />} />
        <Route path='*' element ={<SavePage />} />
       </Routes>
      </div>
    );
  }
}

export default App;
