import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import AlbumPage from './AlbumPage';
import AlbumsListPage from './AlbumsListPage';

function Albums() {
    const { path, url } = useRouteMatch();

    return (
        <>
            <h1>Albums Module</h1>
            <Switch>
                <Route path={path} exact component={AlbumsListPage} />
                <Route path={path + '/:albumId'} component={AlbumPage} />
            </Switch>
        </>
    );
}

export default Albums;
