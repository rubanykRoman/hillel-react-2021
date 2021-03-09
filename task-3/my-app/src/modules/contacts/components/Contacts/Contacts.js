import React, { Component } from 'react'
import { CONTACTS_URL } from '../../constants'
import ContactsTable from '../ContactsTable'
import ContactsAddForm from '../ContactsAddFormModal/ContactsAddFormModal'
import './Contacts.css'

export default class Contacts extends Component {

    state = {
        list: [],
        modal: false,
    }

    componentDidMount() {
        fetch(CONTACTS_URL)
            .then((res) => res.json())
            .then((list) => this.setState({ list }));
    }

    deleteItem = (id) => {
        fetch(CONTACTS_URL + id, {
            method: 'DELETE',
        });

        this.setState({
            list: this.state.list.filter((item) => item.id !== id),
        });
    };

    createItem = (newItem) => {
        fetch(CONTACTS_URL, {
            method: 'POST',
            body: JSON.stringify(newItem),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => res.json())
            .then(data => {
                this.setState({list: [...this.state.list, data]})
            })
    }

    toggleModal = () => {
        this.setState({modal:!this.state.modal})
    }

    render() {
        return (
            <>
                <ContactsTable
                    list={this.state.list}
                    onDelete={this.deleteItem}
                    toggleModal={this.toggleModal}>
                  </ContactsTable>
                <ContactsAddForm
                    onSave={this.createItem}
                    isOpened={this.state.modal}
                    toggleModal={this.toggleModal}>
                </ContactsAddForm>
            </>
        )
    }
}
