import React from 'react';
import UsersList from './UsersList';
import api from './usersApi';
import ModalPage from './ModalPage';
import useModal from '../common/hooks/useModal';
import './Users.scss';
import useGetCrud from '../common/hooks/useGetCrud';

export default function Users() {

    const { list, deleteItem, createItem, updateItem } = useGetCrud(api);
    const { modal, toggleModal, contact, setContact } = useModal();

    return (
        <div className="users">
            {modal ?
                <ModalPage
                    // className="modal-page"
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
        </div>
    )
}
