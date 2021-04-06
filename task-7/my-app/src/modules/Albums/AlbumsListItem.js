import React from 'react'

export default function AlbumsListItem({item}) {
    return (
        <li>
            <div>userId: {item.userId}</div>
            <div>id: {item.id} </div>
            <div>title: {item.title}</div>
        </li>
    )
}
