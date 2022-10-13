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
            let fetchSaveGoalResponse = await fetch('/api/savinggoals/index', {
                method: "GET",
                headers: {"Authorization": 'Bearer '+ jwt},
                body: {
                    user: this.props.user[0]._id
                }
            })
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
                    <Dashboard user={this.props.user} handleLogout={this.props.logout}/>
                </aside>
                    <Save user={this.props.user} goals={this.state.goals}/>
            </main> 
        )

    }
}