import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    return (
        <div>
            <Link to="users">Users</Link>
            <br></br>
            <Link to="albums">Albums</Link>
        </div>
    )
}
