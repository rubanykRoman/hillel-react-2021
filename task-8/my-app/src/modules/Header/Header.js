import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <Link to="/">Dashboard</Link>
            <br></br>
            <Link to="users">Users</Link>
            <br></br>
            <Link to="albums">Albums</Link>
        </header>
    )
}
