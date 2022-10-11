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
                    <Link to='/home/refs' className='details-navlinks'>Refs</Link>
                </ul>
            </nav>
        </div>
    )
}