import React from 'react';
import AlbumsList from './AlbumsList';
import api from './albumsApi';
import useGetData from '../common/hooks/useGetData';

export default function Albums() {

    const { list } = useGetData(api);

    return (
        <div>
            <AlbumsList list={list}></AlbumsList>
        </div>
    )
}
