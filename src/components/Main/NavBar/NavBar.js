import React from 'react';
import './NavBar.css';
import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faHouse, faFontAwesomeFlag, faTv} from '@fortawesome/free-solid-svg-icons'
import user from '../../../images/icons/user2.png';
import menu from '../../../images/icons/menu.png';
import messenger from '../../../images/icons/messenger.png';
import notification from '../../../images/icons/notification.png';
import downArrow from '../../../images/icons/down-arrow.png';

const NavBar = () => {
    return (
        <div>
            <div className="nav-container">
                <div className="icon-div">
                    <img src={logo} alt="" />
                    <input className='search-box' type="search" name="" id="" placeholder="&#61442; Search Facebook"/>
                </div>
                <div className="nav-links">
                    <a href=""><FontAwesomeIcon icon={faHouse} /></a>
                    <a href=""><FontAwesomeIcon icon={faFontAwesomeFlag} /></a>
                    <a href=""><FontAwesomeIcon icon={faTv} /></a>
                    <a href=""><FontAwesomeIcon icon={faUserGroup} /></a>
                </div>
                <div className="menu-div">
                    <div className="profile-div">
                        <img src={user} alt="" />
                        <p>username</p>
                    </div>
                    <a href=""><img src={menu} alt="" /></a>
                    <a href=""><img src={messenger} alt="" /></a>
                    <a href=""><img src={notification} alt="" /></a>
                    <a href=""><img src={downArrow} alt="" /></a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;