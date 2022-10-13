import React from "react";
import '../App/App.css'

import Dashboard from "../../components/dashboard/dashboard";
import Refs from "../../components/Refs/refs";

export default function RefPage(props) {
    return (
        <main className='HomePage'>
            <aside>
            <Dashboard user={this.props.user} handleLogout={this.props.logout}/>
            </aside>
                <Refs />
        </main> 
    )
}