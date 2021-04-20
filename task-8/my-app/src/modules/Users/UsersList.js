import React from 'react';
import UsersListItem from './UsersListItem';
import Button from '@material-ui/core/Button'

export default function UsersList({ list, deleteItem, toggleModal, updateItem,setContact}) {
    return (
        <>
            <Button onClick={toggleModal} size="small" variant="contained" color="primary">
                ADD USER
            </Button>
            <ol>
            {list.map((item) => (
                <UsersListItem
                    key={item.id}
                    item={item}
                    deleteItem={deleteItem}
                    updateItem={updateItem}
                    toggleModal={toggleModal}
                    setContact = {setContact}
                />
            ))}
            </ol>
        </>
    )
}
