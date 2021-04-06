import React, { useState, useEffect } from 'react';
import UsersList from './UsersList';
import api from './usersApi';

export default function Users() {

    const [list, setList] = useState([])

    useEffect(() => {
        api.get().then(({ data }) => setList(data));
    }, []);

    return (
        <UsersList list={list}></UsersList>
    )
}
