import React from 'react';
import { Component } from "react"
import "./LogOut.css"

class LogOut extends Component {

    render() {
        return (
            <div className='UserLogOut'>
              <div>{this.props.user[0].name}</div>
              <div>{this.props.user[0].email}</div>
              <hr />
              <button className="btn" onClick={this.props.handleLogout}>Logout</button>
            </div>
        );
  }
}

export default LogOut;