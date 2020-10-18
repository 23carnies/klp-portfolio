import React, { Component } from 'react';
import './NavBar.css';

const NavBar = () => {
    return ( 
        <header>
            <nav>
                <ul>
                    <li id="logo">Karen Lobin Perkins</li>
                    <li className="item" id="left"><a href="#">About Me</a></li>
                    <li className="item"><a href="#">Projects</a></li>
                    <li className="item"><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
     );
}
 
export default NavBar;