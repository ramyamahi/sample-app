import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar">
            <div class="nav-container">
                <div class="nav-header">
                    <h4 className="nav-title">Lotto 60</h4>
                    <ul className="nav-links">                
                        <Link to="/" className="nav-link"><li className="nav-list">Home</li></Link>
                        <Link to="/funds" className="nav-link"><li className="nav-list">Funds</li></Link>
                        <Link to="/activity" className="nav-link"><li className="nav-list">Activity</li></Link>
                        <Link to="/about" className="nav-link"><li className="nav-list">About</li></Link>
                        <Link to="/support" className="nav-link"><li className="nav-list">Support</li></Link>
                        <Link to="/profile" className="nav-link"><li className="nav-list">Profile</li></Link>
                    </ul>
                </div>
                <div className="navbtn-group"> 
                    <button className="nav-btn">Play for Jackpot</button>
                    <button className="nav-btn">Play for Fun</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar