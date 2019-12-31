import React from 'react';
import Logo from '../../assets/logo.svg';


const Navbar = () => (
    <nav className="navbar">
        <p className="navbar__brand">

            <img className="navbar__brand--logo" src={Logo} alt="logo" />
            <span className="navbar__brand--name">Intugine</span>

        </p>
        <ul className="navbar-list">

            <li className="navbar-item">Home</li>
            <li className="navbar-item">Brands</li>
            <li className="navbar-item">Transporters</li>
            <li className="navbar-item navbar-item--profile">
                <i className="profile-icon fa fa-user-o" aria-hidden="true"></i>
                <i className="profile-action fa fa-chevron-down" aria-hidden="true"></i>
            </li>
        </ul>
    </nav>

)

export default Navbar;