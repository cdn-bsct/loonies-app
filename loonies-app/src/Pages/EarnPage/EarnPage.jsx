import React from "react";
import { Component } from "react"
import '../App/App.css'

import Dashboard from "../../components/dashboard/dashboard";
import Earn from '../../components/earn/earn'

export default class EarnPage extends Component {
    state = {
        income: [],
    }

    handleAddCashflow = async (res) => {
        let responseIncome = res.cashflow.filter(el => el.type === "Income")
        this.setState({income: responseIncome})
    }

    handleDeleteCashflow = async (res) => {
        let responseIncome = res.cashflow.filter(el => el.type === "Income")
        this.setState({income: responseIncome})
    }

    async componentDidMount() { 
        try {
            let jwt = localStorage.getItem('token')
            let fetchResponse = await fetch('/api/cashflows/income', {headers: {"Authorization": 'Bearer '+ jwt}})

            if(!fetchResponse.ok) throw new Error('Could not fetch goals')
            let user = await fetchResponse.json()
            let responseIncome = user.cashflow.filter(el => el.type === "Income")
            this.setState({ income: responseIncome })
        } catch(err) {
            console.log('Get Income Error', err)
        }
     }
    render() {
        return (
            <main className='HomePage'>
                <aside>
                    <Dashboard 
                        user={this.props.user} 
                        handleLogout={this.props.logout}
                    />
                </aside>
                    <Earn 
                        user={this.props.user}
                        handleAddCashflow={this.handleAddCashflow}
                        handleDeleteCashflow={this.handleDeleteCashflow}
                        income={this.state.income}
                    />
            </main> 
        )
    }
}