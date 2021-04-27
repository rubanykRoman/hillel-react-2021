import { connect } from 'react-redux';
import React from 'react';
import { Box } from '@material-ui/core';
import ListItem from './ListItem';

function List({ todos }) {

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <h3>Todo list</h3>
            <ul>
                {todos.map((todo) => (
                    <ListItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </Box>
    );
}

function mapsStateToProps(state) {
    return { todos: state.list };
}

export default connect(mapsStateToProps)(List);