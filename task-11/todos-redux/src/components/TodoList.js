import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { Box, List } from '@material-ui/core';
import TodoListItem from './TodoListItem';
import { setTodos, removeTodo, toggleTodo } from '../store/actions/actions';
import { Link } from 'react-router-dom';
import {Button} from '@material-ui/core';

function TodoList({ todos, setTodos, removeTodo, toggleTodo }) {

    useEffect(() => {
        setTodos();
    }, [setTodos]);

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <h2>Todo list</h2>
            <List>
                {todos.map((todo) => (
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                        />
                ))}
            </List>
            <Box m={2}>
                <Link to='/form' component={Button} color="primary" variant="contained">Add todo</Link>
            </Box>
        </Box>
    );
}

function mapsStateToProps(state) {
    return { todos: state.list };
}

const mapDispatchToProps = {
    setTodos,
    removeTodo,
    toggleTodo
};

export default connect(mapsStateToProps,mapDispatchToProps)(TodoList);