import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, onToggle } from '../store/actions/actions';
import { Box, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

function ListItem({ todo, dispatch }) {

    function getItemStyle({ isDone}) {
        return {
            cursor: 'pointer',
            backgroundColor: isDone ? 'green' : 'yellow',
        };
    }
    
    function handleDeleteTodo(id) {
        dispatch(deleteTodo(id));
    }

    function onItemClick(id) {
        dispatch(onToggle(id));
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

export default connect()(ListItem);