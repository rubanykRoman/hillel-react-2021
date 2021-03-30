import React,{useContext} from 'react';
import { themeContext } from '../../common/contexts/themeContext';
import ContactsRow from './ContactsRow';

export default function ContactsTable({ list, onDelete, toggleModal }) {
    
    const {theme, changeTheme} = useContext(themeContext)

    return (
            <>
                <h2>Contacts book</h2>
                <table cellSpacing="10px">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item) => (
                            <ContactsRow
                                key={item.id}
                                item={item}
                                onDelete={onDelete}
                            ></ContactsRow>
                        ))}
                    </tbody>
                </table>
                <button className="add-contact" onClick={toggleModal}>ADD Contact</button>
                <button onClick={changeTheme} className="change-theme" > Change theme</button>
                <p>Current theme: {theme}</p>
            </>
        )
}

