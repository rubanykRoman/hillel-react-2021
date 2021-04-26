import React from 'react';
import UsersListItem from './UsersListItem';
import { Button, Box } from '@material-ui/core';

export default function UsersList({ list, deleteItem, toggleModal, updateItem,setContact}) {
    return (
        <>
            <Button onClick={toggleModal} size="small" variant="contained">
                ADD USER
            </Button>
            <Box my={3}>
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
            </Box>
        </>
    )
}
