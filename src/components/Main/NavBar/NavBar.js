import React from 'react';
import './NavBar.css';
import logo from '../../../images/logo.png';

const NavBar = () => {
    return (
        <div>
            <div className="nav-container">
                <div className="icon-div">
                    <img src={logo} alt="" />
                    <input type="search" name="" id="" placeholder='Search Facebook'/>
                </div>
                <div className="nav-links">

                </div>
                <div className="profile-div">
                    dsfqwe
                </div>
            </div>
        </div>
    );
};

export default NavBar;