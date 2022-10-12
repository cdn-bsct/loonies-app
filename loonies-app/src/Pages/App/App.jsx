import './App.css';

import React from 'react'
import { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Switch } from 'react'
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
    console.log(incomingUserData)
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
        <Switch>
          <Route path='/earn' element ={<EarnPage />} />
          <Route path='/*' element ={<SavePage />} />
        </Switch>
        :
        <AuthPage setUserInState={this.setUserInState}/>
        }
        <Routes>
    
         <Route path='/spend' element ={<SpendPage />} />
         <Route path='/save' element ={<SavePage />} />
         <Route path='/refs' element ={<RefsPage />} /> 
    
        </Routes>
      </main>
    );
  }
}

export default App;
