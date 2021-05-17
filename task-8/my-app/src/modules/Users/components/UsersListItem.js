import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { Link, useRouteMatch } from 'react-router-dom';
import {Box} from '@material-ui/core';

export default function UsersListItem({ item, deleteUser }) {
    
    const { url } = useRouteMatch();

    function onDelClick() {
        deleteUser(item.id).then(()=>(window.location.href = "http://localhost:3000/users"));
    }

    return (
        <li>
            <Box my={2}>
            <div>Name: {item.name}</div>
            <div>Phone: {item.phone}</div>
            <div>email: {item.email}</div>
            <div>website: {item.website}</div>
            <Link to={url + '/' + item.id} component={Button} color="primary">
                Edit
            </Link>
            <IconButton onClick={onDelClick} aria-label="delete" color="secondary">
                <DeleteIcon />
                </IconButton>
            </Box>
        </li>
    )
}
