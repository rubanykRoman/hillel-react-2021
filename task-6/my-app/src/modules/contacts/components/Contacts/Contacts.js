import React from 'react';
import ContactsTable from '../ContactsTable';
import ContactsAddForm from '../ContactsAddFormModal/ContactsAddFormModal';
import useContacts from '../../hooks/useContacts';
import './Contacts.css';

export default function Contacts() {

    const { list, modal, deleteItem, createItem, toggleModal } = useContacts();

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
