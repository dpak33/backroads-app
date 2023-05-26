import React from 'react';
import logo from '../images/logo.svg'
import { pageLinks, socialLinks } from '../data';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <img src={logo} className="nav-logo" alt="backroads" />
                        <button type="button" className="nav-toggle" id="nav-toggle">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <ul className="nav-links" id="nav-links">
                        {pageLinks.map((link) => {
                            return (
                                <li key={link.id}>
                                    <a href={link.href} className="nav-link">
                                        {link.text}
                                    </a>
                                </li>
                            );
                        })}

                    </ul>
                    <ul className="nav-icons" id="nav-icons">
                        {socialLinks.map((link) => {
                            const { href, icon, id } = link;
                            return (
                                <li key={id}>
                                    <a href={href} className='nav-icon' target="_blank" rel="noreferrer">
                                        <i className={icon}></i>
                                    </a>
                                </li>
                            )
                        })}

                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;