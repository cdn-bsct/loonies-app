import './App.css';

import React from 'react'
import { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import EarnPage from '../EarnPage/EarnPage'
import SpendPage from '../SpendPage/SpendPage'
import SavePage from '../SavePage/SavePage'
import RefsPage from '../RefsPage/RefsPage'
import AuthPage from '../AuthPage/AuthPage';

class App extends Component {
  state = {
    user: null,
  }

  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData})
  }

  componentDidMount() { 
    let token = localStorage.getItem('token')
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]))
      if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem('token')
        token= null;
      } else {
        let userDoc = payload.user
        this.setState({ user: userDoc })
      }
    }
   }

  
  render() {
    return (
      <main className="App">
        {this.state.user ?
        <Routes>
         <Route path='/spend' element ={<SpendPage user={this.state.user}/>} />
         <Route path='/save' element ={<SavePage user={this.state.user}/>} />
         <Route path='/refs' element ={<RefsPage user={this.state.user}/>} /> 
         <Route path='/*' element ={<EarnPage user={this.state.user}/>} /> 
        </Routes>
        :
        <AuthPage setUserInState={this.setUserInState}/>
        }

      </main>
    );
  }
}

export default App;
