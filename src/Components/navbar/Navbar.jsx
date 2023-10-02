import { useState } from 'react';
import './Navbar.css';
import LOGO from './Images/logo.png';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav>
            <div className="logo">
                <img src={LOGO} alt="" />
                Gopali Youth Welfare Society
            </div>
            <div
                className={`menu-toggle ${showMenu ? 'open' : ''}`}
                onClick={toggleMenu}
            >
                ☰
            </div>
            <ul className={`nav-links ${showMenu ? ' show' : ''}`}>
                <li><a href="/">About</a></li>
                <li><a href="/">Initiatives</a></li>
                <li><a href="/">Media</a></li>
                <li><a href="/">Members</a></li>
                <li className='donatebtn'><a href='/'>Donate</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;