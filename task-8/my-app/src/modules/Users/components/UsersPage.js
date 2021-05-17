import React from 'react';
import Loading from '../../common/components/Loading';
import useUsers from '../hooks/useUsers';
import UsersList from './UsersList';
import { Typography } from '@material-ui/core';
import useUser from '../hooks/useUser';

function UsersPage() {
    const { users, isLoading } = useUsers();
    const { deleteUser } = useUser();
    return (
        <>
            <Typography variant="h4">Users</Typography>
            {isLoading ? <Loading /> :
                <UsersList
                    users={users}
                    deleteUser={deleteUser}
                />}
        </>
    );
}

export default UsersPage;
