import React, { useState } from 'react';
import useUsers from '../hooks/useUsers';

function UserListItem({ item }) {

    const { deleteItem, createItem } = useUsers();

    const [contact, setContact] = useState({
            name: 'a',
            surname: 'a',
            phone: '1',
    })

    function onDelClick() {
        deleteItem(item.id)
        console.log(item.id)
    }

    function onAddClick() {
        createItem(contact)
    }    

    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            <td>{item.website}</td>
            <td><button onClick={onAddClick}>add</button></td>
            <td><button onClick={onDelClick}>del</button></td>
        </tr>
    );
}

export default UserListItem;
