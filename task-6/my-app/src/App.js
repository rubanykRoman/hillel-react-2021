import React, {useState} from 'react';
import './App.scss';
import Contacts from './modules/contacts/components/Contacts/Contacts';
import { themeContext } from './modules/common/contexts/themeContext';

export default function App() {

    const [theme, setTheme] = useState('dark')

    function changeTheme() {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    
    const contextValue = {
        theme,
        changeTheme,
    }

    return (
        <themeContext.Provider value={contextValue}>
            <main className={theme}>
                <Contacts />
            </main>
        </themeContext.Provider>
    )
}