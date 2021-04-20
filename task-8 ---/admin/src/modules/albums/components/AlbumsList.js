import { Container } from '@material-ui/core';
import React from 'react';
import AlbumsListItem from './AlbumsListItem';

function AlbumsList({ list }) {
    return (
        <Container maxWidth="sm">
            <ul>
                {list.map((album) => (
                    <AlbumsListItem key={album.id} item={album} />
                ))}
            </ul>
        </Container>
    );
}

export default AlbumsList;
