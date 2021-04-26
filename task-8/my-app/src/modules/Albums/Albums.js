import React from 'react';
import AlbumsList from './AlbumsList';
import api from './albumsApi';
import useGetCrud from '../common/hooks/useGetCrud';
import { Box } from '@material-ui/core';

export default function Albums() {

    const { list } = useGetCrud(api);

    return (
        <Box my={3} display="flex" flexDirection="column" alignItems="center">
            <h3>Albums:</h3>
            <AlbumsList list={list}></AlbumsList>
        </Box>
    )
}
