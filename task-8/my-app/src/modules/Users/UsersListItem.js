import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

export default function UsersListItem({ item, deleteItem, toggleModal, setContact }) {

    function onDelClick() {
        deleteItem(item.id)
    }

    function onEditClick() {
        setContact({ ...item })
        toggleModal();
    }

    return (
        <li>
            <div>Name: {item.name}</div>
            <div>email: {item.email}</div>
            <div>Phone: {item.phone}</div>
            <Button onClick={onEditClick} size="small" color="primary">
                EDIT
            </Button>
            <IconButton onClick={onDelClick} aria-label="delete" color="secondary">
                <DeleteIcon />
            </IconButton>
        </li>
    )
}
