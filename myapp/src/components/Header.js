import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav style={{ backgroundColor: 'grey' }}>
            <ul style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 0, padding: 20 }}>
                <li>
                    <Link to="/" style={{ fontSize: 24, color: 'white', textDecoration: 'none' }}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/tracking" style={{ fontSize: 24, color: 'white', textDecoration: 'none' }}>
                        Tracking
                    </Link>
                </li>
                <li>
                    <Link to="/news" style={{ fontSize: 24, color: 'white', textDecoration: 'none' }}>
                        News
                    </Link>
                </li>
                <li>
                    <Link to="/contact" style={{ fontSize: 24, color: 'white', textDecoration: 'none' }}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;


