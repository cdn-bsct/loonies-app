import React from "react";
import { Component } from 'react'

export default class Signup extends Component{
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        })
    }

    handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const fetchResponse = await fetch('/api/users/signup', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: this.state.name, 
                    email: this.state.email, 
                    password: this.state.password,
                })
            })

        if (!fetchResponse.ok) throw new Error('Fetch Failed - Bad Request')

        let token = await fetchResponse.json()
        localStorage.setItem('token', token);

        const userDoc = JSON.parse(atob(token.split('.')[1])).user;
        this.props.setUserInState(userDoc)

        } catch (err) {
            console.log("signup form error", err)
            this.setState({error: 'Sign Up Failed - Try Again'})
        }
    }

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
            <div>  
                <div className="form-container">
                    <form action="" autoComplete="off" onSubmit={this.handleSubmit}>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name...." required />
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email...." required />
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password...." required />
                        <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} placeholder="Confirm Password...." required />
                        <button type="submit" disabled={disable}>SIGN UP</button>
                    </form>
                </div> 
                <p className="error-message">{this.state.error}</p>
            </div>
        )
    }
}