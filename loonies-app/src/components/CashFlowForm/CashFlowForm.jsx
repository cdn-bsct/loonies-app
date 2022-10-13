import React from "react";
import { Component } from "react"

export default class CashFlowForm extends Component {
    state = {
        name: '',
        category: '',
        amount: '',
        type: '',
        user: ''
    }


    handleChange = async (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            user: this.props.user[0]._id
        })
    }

    render () {
        return (
            <div className="form-container">
                <form action="" autoComplete="off" onSubmit={e => this.props.handleSubmit(e, this.state.user)}>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="saving-input" placeholder="Title/Name"/>
                        <input type="text" name="category" placeholder="ex; Entertainment" onChange={this.handleChange}/>
                        <input type="text" name="type" placeholder="Expense or Income" onChange={this.handleChange}/>
                        <input type="Number" step="any" name="amount" value={this.state.amount} onChange={this.handleChange} className="saving-input" placeholder="0"/>
                        <button type="Submit">Add Cashflow</button>
                    </form>
            </div>
        )
    }
}