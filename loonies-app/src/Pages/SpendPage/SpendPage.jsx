import React from "react";
import { Component } from "react"
import '../App/App.css'

import Dashboard from "../../components/dashboard/dashboard";
import Spend from "../../components/spend/spend";

export default class SpendPage extends Component {
    state = {
        expense: []
    }

    handleAddCashflow = async (res) => {
        let responseExpenses= res.cashflow.filter(el => el.type === "Expense")
        this.setState({ expense: responseExpenses })
    }

    handleDeleteCashflow = async (res) => {
        let responseExpenses = res.cashflow.filter(el => el.type === "Expense")
        this.setState({ expense: responseExpenses })
    }

    async componentDidMount() { 
        try {
            let jwt = localStorage.getItem('token')
            let fetchResponse = await fetch('/api/cashflows/expense', {headers: {"Authorization": 'Bearer '+ jwt}})

            if(!fetchResponse.ok) throw new Error('Could not fetch goals')
            let user = await fetchResponse.json()
            let responseExpense = user.cashflow.filter(el => el.type === "Expense")
            this.setState({ expense: responseExpense })
        } catch(err) {
            console.log('Get Expense Error', err)
        }
     }
    
    render() {
        return (
            <main className='HomePage'>
                <aside>
                <Dashboard user={this.props.user} handleLogout={this.props.logout}/>
                </aside>
                    <Spend 
                        user={this.props.user}
                        expense={this.state.expense}
                        handleAddCashflow={this.handleAddCashflow}
                        handleDeleteCashflow={this.handleDeleteCashflow}
                    />
            </main> 
        )
    }
}