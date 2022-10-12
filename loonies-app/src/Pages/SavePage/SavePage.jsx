import React from "react";
import { Component } from "react"
import '../App/App.css'

import Dashboard from "../../components/dashboard/dashboard";
import Save from "../../components/save/save";

export default class SavePage extends Component {
    state = {
        goals: [],
    }

    async componentDidMount() { 
        try {
            let jwt = localStorage.getItem('token')
            let fetchSaveGoalResponse = await fetch('/api/savinggoals/index', {headers: {"Authorization": 'Bearer '+ jwt}})
            if(!fetchSaveGoalResponse.ok) throw new Error('Could not fetch goals')

            let goals = await fetchSaveGoalResponse.json()
            this.setState({ goals: goals})
        } catch(err) {
            console.log('Get Goals Error', err)
        }
     }

    render() {
        return (
            <main className='HomePage'>
                <aside>
                    <Dashboard user={this.props.user}/>
                </aside>
                    <Save user={this.props.user} goals={this.state.goals}/>
            </main> 
        )

    }
}