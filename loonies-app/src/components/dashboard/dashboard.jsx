import React from 'react'
import LogOut from '../LogOut/LogOut';

export default function Dashboard(props) {
    return (
        <div className="dashboard-menu">
            <h1>Dashboard</h1>
            <hr />
            <h1>Monthly income</h1>
            <h1>Monthly Expenses</h1>
            <h1>Monthly Savings</h1>
            <hr />
            <h1>Net Cashflow</h1>
            <hr />
            <LogOut user={props.user}/>
        </div>
    );
}