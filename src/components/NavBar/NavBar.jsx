import React, { Component } from 'react';
import './NavBar.css';

const NavBar = () => {
    return ( 
        <header>
            <nav>
                <ul>
                    <li id="logo">Karen Lobin Perkins</li>
                    <li className="item" id="left"><a href="#">About</a></li>
                    <li className="item"><a href="/projects">Projects</a></li>
                    <li className="item"><a href="/contact">Contact</a></li>
                    <div className="flag-box">
                        <li className="flag"><a href="#"><span class="flag-icon flag-icon-us"></span></a></li>
                        <li className="flag"><a href="#"><span class="flag-icon flag-icon-es"></span></a></li>
                    </div>
                </ul>
            </nav>
        </header>
     );
}
 
export default NavBar;