import React from 'react';
import logo from "../../assets/images/logo-application.png";
import MyInput from "../UI/MyInput/MyInput";
import classes from './Navagation.module.css';

const Navigation = () => {
    return (
        <nav>
            <ul className={classes.header__menu}>
                <li className={classes.header__menuItem}>
                    <img src={logo} alt="Logo Application"/>
                </li>
                <li className="header__menu-item header__menu-item--file">File
                    <ul className="header__submenu">
                        <li>
                            <label id="open-file">Open</label>
                            <MyInput type="file" name="open-file" id="open-file" className="header__submenu-open"/>
                        </li>
                        <li>Close</li>
                        <li>All</li>
                    </ul>
                </li>
                <li className="header__menu-item">Edit</li>
                <li className="header__menu-item">View</li>
            </ul>
        </nav>
    );
};

export default Navigation;