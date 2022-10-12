import React from 'react';
import { Component } from "react"

class LogOut extends Component {

    handleLogout = () => {
        localStorage.removeItem('token')
    }
  
    render() {
        return (
            <div className='UserLogOut'>
              <div>Name: {this.props.user.name}</div>
              <div>Email: {this.props.user.email}</div>
              <button className="btn" onClick={this.handleLogout}>Logout</button>
            </div>
        );
  }
}

export default LogOut;