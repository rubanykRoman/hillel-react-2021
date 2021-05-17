import React from 'react';
import { Box } from '@material-ui/core';
import { UserEditForm } from './UserForm';
import { Switch, Route, useRouteMatch } from 'react-router';
import UsersPage from './UsersPage';

export default function Users() {

    const { path } = useRouteMatch();

    return (
        <Box my={3} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Switch>
                <Route path={path} exact component={UsersPage} />
                <Route path={path + '/add'} exact component={UserEditForm} />
                <Route path={path + '/:userId'} component={UserEditForm} />
            </Switch>
        </Box> 
    )
}
