import React from 'react';
import { Button } from '@material-ui/core';

export default function UserTableRow({
    item,
    item: { id, name, surname, phone, email },
    removeUser,
    toggleModal,
    setCurContact}) {
    
    function onDelClick(e) {
        e.stopPropagation();
        removeUser(id);
    }

    function onRowClick() {
        setCurContact(item);
        toggleModal();
    }

    return (
        <>
            <tr onClick={onRowClick}>
                <td>{name}</td>
                <td>{surname}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td>
                    <Button onClick={onDelClick} size="small" variant="outlined" color="secondary">
                        Delete
                    </Button>
                </td>
            </tr>
        </>
    )
}
