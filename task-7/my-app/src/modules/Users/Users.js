import React from 'react';
import UsersList from './UsersList';
import api from './usersApi';
import useGetData from '../common/hooks/useGetData';

export default function Users() {

    const { list } = useGetData(api);

    return (
        <UsersList list={list}></UsersList>
    )
}
