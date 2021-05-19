import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import ListItem from './ListItem';
import { getTodos, removeTodo, toggleTodo } from '../store/actions/actions';
import { Link } from 'react-router-dom';
import {Button} from '@material-ui/core';

function List({ todos, getTodos, removeTodo, toggleTodo }) {

    useEffect(() => {
        getTodos();
    }, [getTodos]);

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <h2>Todo list</h2>
            <Box m={3}>
                <Link to='/form' component={Button} color="primary" variant="contained">Add todo</Link>
            </Box>
            <ul>
                {todos.map((todo) => (
                    <ListItem
                        key={todo.id}
                        todo={todo}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                        />
                ))}
            </ul>
        </Box>
    );
}

function mapsStateToProps(state) {
    return { todos: state.list };
}

const mapDispatchToProps = {
    getTodos,
    removeTodo,
    toggleTodo
};

export default connect(mapsStateToProps,mapDispatchToProps)(List);