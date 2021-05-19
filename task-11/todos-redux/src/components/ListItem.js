import React from 'react';
import { Box, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

export default function ListItem({ todo,toggleTodo,removeTodo}) {

    function getItemStyle({ isDone}) {
        return {
            cursor: 'pointer',
            backgroundColor: isDone ? 'green' : 'yellow',
        };
    }
    
    function handleDeleteTodo(id) {
        removeTodo(id);
    }

    function onItemClick(id) {
        toggleTodo(id);
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" m={1}>
            <Box m={1}>
                <li onClick={() => onItemClick(todo.id)} style={getItemStyle(todo)}>{todo.title}</li>
            </Box>
            <IconButton onClick={() => handleDeleteTodo(todo.id)} aria-label="delete" color="secondary" size="small">
                <DeleteIcon />
            </IconButton>
        </Box>
    )
}