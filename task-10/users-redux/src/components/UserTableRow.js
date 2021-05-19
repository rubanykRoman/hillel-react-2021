import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

export default function UserTableRow({item: { id, name, surname, phone, email }}) {
    return (
        <tr>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{phone}</td>
            <td>{email}</td>
            {/* <td><Link color="primary" to={`/form/${id}`}>Edit</Link></td> */}
            <td><Link color="primary" to={'/form/' + id}>Edit</Link></td>
        </tr>
    )
}
