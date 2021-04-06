import React from 'react'
import UsersListItem from './UsersListItem'

export default function UsersList({list}) {
    return (
        <ul>
            {list.map((item) => (
                <UsersListItem
                    key={item.id}
                    item={item}
                />
            ))}
        </ul>
    )
}
