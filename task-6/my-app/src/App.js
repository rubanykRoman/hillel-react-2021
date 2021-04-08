import React from 'react';
import './App.scss';
import Contacts from './modules/contacts/components/Contacts/Contacts';
import ThemeProvider from './modules/common/contexts/themeContext';

export default function App() {
    return (
        <ThemeProvider>
            <Contacts />
        </ThemeProvider>
    )
}