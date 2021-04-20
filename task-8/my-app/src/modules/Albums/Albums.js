import React from 'react';
import AlbumsList from './AlbumsList';
import api from './albumsApi';
import useGetCrud from '../common/hooks/useGetCrud';

export default function Albums() {

    const { list } = useGetCrud(api);

    return (
        <div>
            <AlbumsList list={list}></AlbumsList>
        </div>
    )
}
