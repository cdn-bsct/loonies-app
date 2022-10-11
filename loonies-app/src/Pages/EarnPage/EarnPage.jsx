import React from "react";
import '../App/App.css'

import Dashboard from "../../components/dashboard/dashboard";
import Earn from '../../components/earn/earn'

export default function EarnPage(props) {
    return (
        <main className='HomePage'>
            <aside>
                <Dashboard />
            </aside>
                <Earn />
        </main> 
    )
}