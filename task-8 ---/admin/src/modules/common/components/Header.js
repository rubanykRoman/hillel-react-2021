import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/dashboard">Home</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="/albums">Albums</Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;
