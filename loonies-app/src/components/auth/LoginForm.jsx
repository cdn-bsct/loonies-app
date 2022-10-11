import React from "react";
import { Component } from 'react'

export default class Login extends Component {
    state = {
        email: '',
        password: '',
        error: ''
    }

    handleChange = (evt) =>{
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        })
    }

    handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const fetchResponse = await fetch('api/users/login', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: this.state.email, 
                    password: this.state.password
                })
            })

            if (!fetchResponse.ok) throw new Error('Fetch Failed - Bad Request')

            let token = await fetchResponse.json()
            localStorage.setItem('token', token);

            const userDoc = JSON.parse(atob(token.split('.')[1])).user;
            this.props.setUserInState(userDoc)

        } catch (err) {
            console.loh('Login Form Error', err)
            this.setState({ error: 'Login Failed - Try Again'})
        }
    }

    render() {
        return (
            <div>
                <div className="form-container">
                    <form action="" autoComplete="off" onSubmit={this.handleSubmit}>
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email...." required />
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password...." required />
                        <button type="submit">LOG IN</button>
                    </form>
                </div> 
                <p className="error-message">{this.state.error}</p>
            </div>
        )
    }
}