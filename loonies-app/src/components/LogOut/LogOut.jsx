import React from 'react';
import { Component } from "react"
import "./LogOut.css"

class LogOut extends Component {
    render() {
        return (
          <div className='UserLogOut'>
              {this.props.user ?
              <>
                <div>Welcome!</div>
                <hr />
                <button className="btn" onClick={this.props.handleLogout}>Logout</button>
              </>
              :
                <div> what user? </div>
              }
          </div>
        );
  }
}

export default LogOut;