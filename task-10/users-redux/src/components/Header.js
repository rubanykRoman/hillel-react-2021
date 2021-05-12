import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Button, Toolbar, Box} from '@material-ui/core';

export default function Header() {
    return (
        <AppBar position="static">
            <Box display="flex" justifyContent="center" alignItems="center">
                <Toolbar>
                    <Link to="/users" component={Button} color="inherit">Users</Link>
                </Toolbar>
            </Box>
        </AppBar>
    )
}
