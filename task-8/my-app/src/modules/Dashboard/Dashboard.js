import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Box } from '@material-ui/core';

export default function Dashboard() {
    return (
        <Box my={5}>
            <Link to="users" component={Button} color='primary'>Users</Link>
            <br></br>
            <Link to="albums" component={Button} color='primary'>Albums</Link>
        </Box>
    )
}
