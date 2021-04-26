import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Button, Toolbar, Box} from '@material-ui/core';

export default function Header() {
    return (
        <AppBar position="static">
            <Box display="flex" justifyContent="center" alignItems="center">
                <Toolbar>
                    <Link to="/" component={Button} color="inherit">
                        Dashboard
                    </Link>
                    <Link to="/users" component={Button} color="inherit">
                        Users
                    </Link>
                    <Link to="/users/edit" component={Button} color="inherit">
                        Edit User
                    </Link>
                    <Link to="/albums"  component={Button} color="inherit">
                        Albums
                    </Link>
                </Toolbar>
            </Box>
        </AppBar>
    )
}
