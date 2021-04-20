import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Loading from '../../common/components/Loading';
import useAlbums from '../hooks/useAlbums';
import AlbumsList from './AlbumsList';

function AlbumsListPage() {
    const { albums, isLoading } = useAlbums();
    const match = useRouteMatch();

    console.log(match);
    return (
        <div>
            <h1>Albums</h1>
            {isLoading ? <Loading /> : <AlbumsList list={albums} />}
        </div>
    );
}

export default AlbumsListPage;
