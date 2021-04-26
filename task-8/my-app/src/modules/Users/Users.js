import React from 'react';
import UsersList from './UsersList';
import api from './usersApi';
import ModalPage from './ModalPage';
import useModal from '../common/hooks/useModal';
import useGetCrud from '../common/hooks/useGetCrud';
import { Box } from '@material-ui/core';

export default function Users() {

    const { list, deleteItem, createItem, updateItem } = useGetCrud(api);
    const { modal, toggleModal, contact, setContact } = useModal();

    return (
        <Box my={5} display="flex" flexDirection="column" justifyContent="center" alignItems="center"> 
            {modal ?
            <ModalPage
                toggleModal={toggleModal}
                createItem={createItem}
                curContact={contact}
                setCurContact={setContact}
                updateItem={updateItem}>
            </ModalPage>
            :
            <UsersList
                list={list}
                deleteItem={deleteItem}
                toggleModal={toggleModal}
                updateItem={updateItem}
                setContact={setContact}>
                </UsersList>}
        </Box> 
    )
}
