import React from 'react';
import UsersListItem from './UsersListItem';
import { Button, Box} from '@material-ui/core';
import { Link } from 'react-router-dom';


export default function UsersList({users, deleteUser}) {
    return (
        <>
            <Box my={3}>
                <Button size="small" variant="contained" color="primary">
                    <Link to="/users/add" color="inherit" size="small" component={Button}> ADD USER </Link>
                </Button>
            </Box>
            <Box my={1}>
                <ol>
                {users.map((item) => (
                    <UsersListItem
                        key={item.id}
                        item={item}
                        deleteUser={deleteUser}
                    />
                ))}
                </ol>
            </Box>
        </>
    )
}
