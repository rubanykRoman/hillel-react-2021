import React from 'react'

export default function TodoListItem({ item, onToggle, onDelete }) {
    
    function onItemClick () {
        onToggle(item.id);
    };

    function getItemStyle({ completed }) {
        return {
            cursor: 'pointer',
            backgroundColor: completed ? 'green' : 'yellow',
        };
    }

    function onDeleteBtnClick(e) {
        e.stopPropagation();

        onDelete(item.id);
    };

    return (
        <li onClick={onItemClick} style={getItemStyle(item)}>
            {item.title}
            <span onClick={onDeleteBtnClick}>X</span>
        </li>
    )
}
