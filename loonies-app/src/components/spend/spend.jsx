import React from "react";
import { Component } from "react"
import { Link } from "react-router-dom";

import CashFlowForm from "../CashFlowForm/CashFlowForm";
import ExpenseListItem from "../ExpenseListItem/ExpenseListItem";

export default class Spend extends Component {
    
    handleSubmit = async (evt, user) => {
        evt.preventDefault();
        try {
            const fetchResponse = await fetch('/api/cashflows/create', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: evt.target.name.value,
                    category: evt.target.category.value,
                    amount: evt.target.amount.value,
                    type: evt.target.type.value,
                    user: user
                })
            })

            if (!fetchResponse.ok) throw new Error('Fetch Failed - Bad Request')
            let response = await fetchResponse.json()
            this.props.handleAddCashflow(response)

        } catch (err) {
            console.log('Add Cashflow error', err)
        }
    }

    handleDelete = async (evt, expense, user) => {
        evt.preventDefault();
        const fetchResponse = await fetch('/api/cashflows/expense/delete', {
            method: 'DELETE',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                expense: expense,
                user: user
            })
        })
        let response = await fetchResponse.json()
        this.props.handleDeleteCashflow(response)
    }

    render() {
        let totalCashOut = 0
        this.props.expense.forEach((el) => {
            totalCashOut += el.amount
        })
        return (
        <div className="details-menu">
            <nav>
                <ul className='details-nav'>
                    <Link to='/earn' className='details-navlinks'>Earn</Link>
                    <Link to='/spend' className='details-navlinks'>Spend</Link>
                    <Link to='/save' className='details-navlinks'>Save</Link>
                    <Link to='/refs' className='details-navlinks'>Refs</Link>
                </ul>
            </nav>
            <div>
               <div className='titlebox'>
                        <h1>Total Cash Out</h1>
                        <h2>${totalCashOut} / mo</h2>
                    </div>
                    <hr /> <br />
                    <div className='listbox'>
                        {this.props.expense.length > 0 ?
                            this.props.expense.map(el => <ExpenseListItem 
                                expense={el} 
                                handleDelete={this.handleDelete}
                                user={this.props.user[0]}
                            />)
                            :
                            <span className="No Expenses">You have no expenses...</span> 
                        }
                    </div>
                <br /><hr />
                <footer className='earn-footer'>
                    <CashFlowForm 
                        user={this.props.user}
                        handleSubmit={this.handleSubmit}
                    />
                </footer>
            </div>
        </div>
        )
    }
}