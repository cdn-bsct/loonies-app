import React from "react";
import { Component } from "react"
import '../App/App.css'

import Dashboard from "../../components/dashboard/dashboard";
import Save from "../../components/save/save";

export default class SavePage extends Component {
    state = {
        goals: [],
        savings: []
    }
    
    handleAddSave = async (res) => {
        let saved = res.savings
        this.setState({savings: saved})
    }

    async componentDidMount() { 
        try {
            let jwt = localStorage.getItem('token')
            let fetchSaveGoalResponse = await fetch('/api/savinggoals/index', {headers: {"Authorization": 'Bearer '+ jwt}})
            if(!fetchSaveGoalResponse.ok) throw new Error('Could not fetch goals')

            let goals = await fetchSaveGoalResponse.json()
            let savings = goals[0].savings
            this.setState({ 
                goals: goals,
                savings: savings
            })
        } catch(err) {
            console.log('Get Goals Error', err)
        }
     }

    render() {
        return (
            <main className='HomePage'>
                <aside>
                    <Dashboard user={this.props.user} handleLogout={this.props.logout}/>
                </aside>
                    <Save user={this.props.user} goals={this.state.goals} savings={this.state.savings} handleAddSave={this.handleAddSave}/>
            </main> 
        )

    }
}