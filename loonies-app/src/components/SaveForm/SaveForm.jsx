import React from "react";
import { Component } from "react"

export default class SaveForm extends Component {
    state = {
        name:'',
        amount: 0,
        user: '',
        error: ''
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            user: this.props.user._id
        })
    }

    render() {
        return (
            <div className="form-container">
                <form action="" autoComplete="off" onSubmit={e => this.props.handleCreate(e, this.state.user)}>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="saving-input" placeholder="Goal Title"/>
                    <input type="Number" step="any" name="amount" value={this.state.amount} onChange={this.handleChange} className="saving-input" placeholder={this.state.amount}/>
                    <button type="Submit">Create New Goal!</button>
                </form>
            </div>
        )
    }
}