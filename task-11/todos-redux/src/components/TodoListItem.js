import React from 'react';
import { Box, IconButton, ListItem, Divider} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

export default function TodoListItem({ todo,toggleTodo,removeTodo}) {

    function getItemStyle({ isDone}) {
        return {
            cursor: 'pointer',
            backgroundColor: isDone ? 'green' : 'yellow',
        };
    }
    
    function handleDeleteTodo(id,e) {
        e.stopPropagation();
        removeTodo(id);
    }

    function onItemClick(id) {
        toggleTodo(id);
    };

    return (
        <>
            <ListItem onClick={() => onItemClick(todo.id)} style={getItemStyle(todo)}>
                <Box display="flex" alignItems="center">
                    {todo.title}
                    <IconButton onClick={(e) => handleDeleteTodo(todo.id,e)} aria-label="delete" color="secondary" size="small">
                        <DeleteIcon />
                    </IconButton>
                </Box>
            </ListItem>
            <Divider />
        </>
    )
}