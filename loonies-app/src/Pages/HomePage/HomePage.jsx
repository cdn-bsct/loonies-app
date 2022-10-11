import './HomePage.css';
import React from 'react'
import Details from '../../components/details/details'
import Dashboard from '../../components/dashboard/dashboard'

export default function HomePage(props) {
    return(
        <main className='HomePage'>
            <aside>
                <Dashboard />
            </aside>
            <Details />
        </main>
    )
}