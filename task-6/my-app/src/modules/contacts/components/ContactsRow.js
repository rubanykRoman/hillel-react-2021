import React from 'react'

export default function ContactsRow({ item, onDelete }) {
    
    function onDelBtnClick(e) {
        e.stopPropagation();

        onDelete(item.id)
    }

    return (
        <tr>
            <td>
                {item.name}
            </td>
            <td>
                {item.surname}
            </td>
            <td>
                {item.phone}
            </td>
            <td>
                <button onClick={onDelBtnClick}>del</button>
            </td>
        </tr>
    )
}
