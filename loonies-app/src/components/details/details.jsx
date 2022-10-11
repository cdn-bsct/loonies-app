import React from 'react'
import { Link } from 'react-router-dom';
import './details.css'

export default function Details(props) {
    return (
        <div className="details-menu">
            <nav>
                <ul className='details-nav'>
                    <Link to='/home/earn' className='details-navlinks'>Earn</Link>
                    <Link to='/home/spend' className='details-navlinks'>Spend</Link>
                    <Link to='/home/save' className='details-navlinks'>Save</Link>
                    {/* <Link to='/home/refs' className='details-navlinks'>Refs</Link> */}
                </ul>
            </nav>
                <div className='details-titlebox'>
                    <h1>Total Cash In</h1>
                    <h2>$$$$$$</h2>
                </div>
                <hr />
                <div className='details-listbox'>
                    <div className='listbox-cards'>
                        <h5>Name of Income</h5>
                        <h5>$$$$$$</h5>
                    </div>
                </div>

            <footer className='details-footer'>
                <h1>New Income Form</h1>
            </footer>
        </div>
    );
}