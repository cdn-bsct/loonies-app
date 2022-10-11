import React from "react";
import '../App/App.css'

import Dashboard from "../../components/dashboard/dashboard";
import Spend from "../../components/spend/spend";

export default function SpendPage(props) {
    return (
        <main className='HomePage'>
            <aside>
                <Dashboard />
            </aside>
                <Spend />
        </main> 
    )
}