import React from 'react';
import AlbumsListItem from './AlbumsListItem';

export default function UsersList({ list }) {

    return (
        <ul>
            {list.map((item) => (
                <AlbumsListItem
                    key={item.id}
                    item={item}
                />
            ))}
        </ul>
    )
}
