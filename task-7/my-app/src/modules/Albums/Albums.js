import React, { useState, useEffect } from 'react';
import AlbumsList from './AlbumsList'
import api from './albumsApi';

export default function Albums() {

    const [list, setList] = useState([])

    useEffect(() => {
        api.get().then(({ data }) => setList(data));
    }, []);

    return (
        <div>
            <AlbumsList list={list}></AlbumsList>
        </div>
    )
}
