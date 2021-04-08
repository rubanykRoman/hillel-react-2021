import React from 'react';

export default function UsersListItem({item}) {
    return (
        <li>
            <div>Name: {item.name}</div>
            <div>Username: {item.username} </div>
            <div>email: {item.email}</div>
            <div>Phone: {item.phone}</div>
        </li>
    )
}
