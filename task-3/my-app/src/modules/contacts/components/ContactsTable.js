import React, { Component } from 'react'
import ContactsRow from './ContactsRow'

export default class ContactsTable extends Component {
    render() {
        return (
            <>
                <h2>Contacts book</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.list.map((item) => (
                            <ContactsRow key={item.id} item={item} onDelete={this.props.onDelete}></ContactsRow>
                        ))}
                    </tbody>
                </table>
                <button className="add-contact" onClick={this.props.toggleModal}>ADD Contact</button>
             </>
        )
    }
}
