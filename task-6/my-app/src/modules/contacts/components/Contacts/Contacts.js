import React from 'react';
import ContactsTable from '../ContactsTable';
import ContactsAddForm from '../ContactsAddFormModal/ContactsAddFormModal';
import useContacts from '../../hooks/useContacts';
import useModal from '../../hooks/useModal';
import './Contacts.css';

export default function Contacts() {

    const { list, deleteItem, createItem } = useContacts();
    const { modal, toggleModal} = useModal();

    return (
        <>
            <ContactsTable
                list={list}
                onDelete={deleteItem}
                toggleModal={toggleModal}>          
            </ContactsTable>
            <ContactsAddForm
                onSave={createItem}
                isOpened={modal}
                toggleModal={toggleModal}>       
            </ContactsAddForm>
        </>
    )
}
