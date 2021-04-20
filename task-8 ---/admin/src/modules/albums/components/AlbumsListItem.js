import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

function AlbumsListItem({ item }) {
    const { url } = useRouteMatch();

    return (
        <li>
            <Link to={url + '/' + item.id}>{item.title}</Link>
        </li>
    );
}

export default AlbumsListItem;
