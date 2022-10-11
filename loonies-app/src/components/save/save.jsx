import React from "react";
import { Link } from "react-router-dom";
import './save.css'

export default function Save(props) {
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

            <div className="titlebox">
                <h1>Saving title</h1>
                <Link to="/save/detail" className="details-navlinks">Detail View</Link>
                <div className="save-dropdown">
                    <button className="dropbtn">Saving goal name</button>
                    <div className="dropdown-content">
                        <li>Link 1</li>
                        <li>Link 2</li>
                    </div>
                </div>
            </div>
            <hr />
            <div className="progress-tracker">
                <div className="progress-bar">
                    <div className="progress"></div>
                </div> 
                <div className="progress-numbers">
                    <h3>Current Saved</h3>
                    <h3>Saving Goal</h3>
                </div>
            </div>

            <div className='listbox'>
              <div className='listbox-cards'>
                  <h5>Save deposit at - timestamp</h5>
                  <h5>$$$$$$</h5>
              </div>
              <div className='listbox-cards'>
                  <h5>Save deposit at - timestamp</h5>
                  <h5>$$$$$$</h5>
              </div>
              <div className='listbox-cards'>
                  <h5>Save deposit at - timestamp</h5>
                  <h5>$$$$$$</h5>
              </div>
              <div className='listbox-cards'>
                  <h5>Save deposit at - timestamp</h5>
                  <h5>$$$$$$</h5>
              </div>
            </div>
            <hr />
            <footer className='earn-footer'>
                <h1>Add Save Deposit</h1>
            </footer>
        </div>
    )
}