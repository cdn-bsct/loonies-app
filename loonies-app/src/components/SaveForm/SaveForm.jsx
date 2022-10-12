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

    handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const fetchResponse = await fetch('api/savinggoals/create', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: this.state.name,
                    amount: this.state.amount,
                    user: this.state.user
                }) 
            })

            if (!fetchResponse.ok) throw new Error('Fetch Failed - Bad Request')

        } catch (err) {
            console.log('Add Saving Form Failed', err)
            this.setState({ error : 'Add Save Failed - Try Again'})
        }
    }

    render() {
        return (
            <div className="save-form">
                <form action="" autoComplete="off" onSubmit={this.handleSubmit}>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="saving-input" placeholder="Goal Title"/>
                    <input type="Number" step="any" name="amount" value={this.state.amount} onChange={this.handleChange} className="saving-input" placeholder={this.state.amount}/>
                    <button type="Submit">Create New Goal!</button>
                </form>
            </div>
        )
    }
}