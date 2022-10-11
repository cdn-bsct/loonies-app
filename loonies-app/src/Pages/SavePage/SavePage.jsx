import React from "react";
import '../App/App.css'

import Dashboard from "../../components/dashboard/dashboard";
import Save from "../../components/save/save";

export default function SavePage(props) {
    return (
        <main className='HomePage'>
            <aside>
                <Dashboard />
            </aside>
                <Save />
        </main> 
    )
}