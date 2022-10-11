import React from "react";
import { Link } from "react-router-dom";

export default function Earn(props) {
    return (
        <div className="details-menu">
        <nav>
            <ul className='details-nav'>
                <Link to='/earn' className='details-navlinks'>Earn</Link>
                <Link to='/spend' className='details-navlinks'>Spend</Link>
                <Link to='/save' className='details-navlinks'>Save</Link>
                <Link to='refs' className='details-navlinks'>Refs</Link>
            </ul>
        </nav>
        <div>
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
    </div>
    )
}