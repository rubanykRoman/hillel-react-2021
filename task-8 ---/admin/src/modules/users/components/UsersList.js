import React from 'react';
import UserListItem from './UserListItem';

function UsersList({ list }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>
                {list.map((user) => (
                    <UserListItem key={user.id} item={user} />
                ))}
            </tbody>
        </table>
    );
}

export default UsersList;
