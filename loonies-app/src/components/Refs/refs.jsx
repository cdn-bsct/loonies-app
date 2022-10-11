import React from "react";
import { Link } from "react-router-dom";

export default function Refs(props) {
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
            <div className='titlebox'>
                <h1>Articles on budgeting</h1>
                <p>courtesy of BudgetMom</p>
            </div>
            <hr />
            <div className='listbox'>
                <div className='listbox-cards'>
                    <h5>WEBSCRAPED ARTICLES</h5>
                </div>
            </div>
        </div>
    )
}