import React from "react";
import { Component } from "react"

export default class Savings extends Component {
    state = {
        amount: 0,
        goal: '',
        error: ''
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            goal: this.props.goal._id
        })
    }

    render() {
        return (
            <div className="form-container">
                <form action="" autoComplete="off" onSubmit={e => this.props.handleSubmit(e, this.state.goal)}>
                    <input type="Number" step="any" name="amount" value={this.state.amount} onChange={this.handleChange} className="saving-input" placeholder={this.state.amount}/>
                    <button type="Submit">Add Savings!</button>
                </form>
            </div>
        )
    }
}