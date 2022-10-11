import React from "react";
import { Component } from 'react'
import '../App/App.css'
import './AuthPage.css'
import Login from "../../components/auth/LoginForm";
import Signup from "../../components/auth/SignupForm";

export default class AuthPage extends Component {
    state = {
        showLogin: true,
    }
    render(){
        return (
            <main className='AuthPage'>
                <div className="form-box">
                    <div className="login-signup">
                        <h3 onClick={() => this.setState({ showLogin: !this.state.showLogin })} className='authtype'>
                            {this.state.showLogin ? 'Login' : 'Sign Up'}
                        </h3>
                    </div>
                    <hr />
                    {this.state.showLogin ?
                    <Login setUserInState={this.props.setUserInState}/>
                    :
                    <Signup setUserInState={this.props.setUserInState}/>
                    }
                </div>
            </main> 
        )
    }
}