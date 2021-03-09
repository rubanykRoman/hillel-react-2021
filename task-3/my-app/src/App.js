import React, { Component } from 'react';
import './App.css';
import Contacts from './modules/contacts/components/Contacts/Contacts';

export default class App extends Component {

    render() {
        return (
            <main>
                <Contacts />
            </main>
        )
    }

}