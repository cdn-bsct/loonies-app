import React from "react";
import { Component } from "react"
import { Link } from "react-router-dom";
import './save.css'

import SaveForm from "../SaveForm/SaveForm";
import Savings from "../Savings/savings";
import SaveListItem from "../SaveListItem/SaveListItem";

export default class Save extends Component {
    state = {
        savings: [],
    }


    handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(evt.target[0].value)
        try {
            const fetchResponse = await fetch('api/savinggoals/savings/create', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    amount: evt.target[0].value,
                    goal: this.state.goal
                }) 
            })

            if (!fetchResponse.ok) throw new Error('Fetch Failed - Bad Request')
            let response = await fetchResponse.json()
            this.setState({...this.state, savings: response})
        } catch (err) {
            console.log('Add Saving Form Failed', err)
            this.setState({ error : 'Add Save Failed - Try Again'})
        }
    }

    render () {
        let goals = this.props.goals
        let dropMenu =[]
        let savingsArr = this.state.savings.map(saving => 
            <SaveListItem saving={saving}/>)

        goals.forEach((el, idx) => {
            if (!(idx == 0)) dropMenu.push(el)
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
                { goals.length > 0 ?
                <>
                
                    <div className="titlebox">
                        <h1>{goals[0].name}</h1>
                        <div className="save-dropdown">
                            <button className="dropbtn">Other Goals</button>
                            <div className="dropdown-content">
                                {dropMenu.map(goal =>
                                <li>{goal.name}</li>
                                )}
                            </div>
                        </div>
                    </div>
                    <hr /> <br />
                    <div className="progress-tracker">
                        <div className="progress-bar">
                            <div className="progress"></div>
                        </div> 
                        <div className="progress-numbers">
                            <h3>Current Saved</h3>
                            <h3>${goals[0].amount}</h3>
                        </div>
                    </div>

                    <div className='listbox'>
                      {savingsArr.length > 0 ?
                        savingsArr
                        :
                        <span className="No Savings">You haven't saved toward your goal...</span>  
                        }
                    </div>
                    <br /><hr />
                    <footer className='save-footer'>
                        <Savings goal={this.props.goals[0]} handleSubmit={this.handleSubmit}/>
                    </footer>
                </>
                :
                <div className="noSaveGoals">
                    <h1>You don't have any saving goals...</h1>
                    <h4>You should add one!</h4>
                    <hr /><br />
                    <SaveForm user={this.props.user} />
                </div>
                }
            </div>
        )
    }
}