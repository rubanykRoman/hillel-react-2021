import React, { useState } from 'react';
import {
    Box,
    Button,
    FormControl,
    Input,
    InputLabel,
} from '@material-ui/core';
import { onSave } from '../store/actions/actions';
import { connect } from 'react-redux';

function Form({ dispatch }) {

    const [todo, setTodo] = useState({ title: ''})
    
    function onInputChange(e) {
        setTodo({ ...todo, title: e.target.value})
    };

    function onFormSubmit(e) {
        e.preventDefault();

        dispatch(onSave(todo));
        setTodo({ title: ''})
    };

    return (
        <form
            onSubmit={onFormSubmit}
        >
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Box m={2}>
                    <FormControl >
                        <InputLabel htmlFor="todo">Create Todo</InputLabel>
                        <Input
                        id="todo"
                        name="todo"
                        value={todo.title}
                        onChange={onInputChange} 
                        />
                    </FormControl>
                </Box>
                <Button onClick={onFormSubmit} size="small" variant="outlined" color="primary">Save</Button>
            </Box>
        </form>
    )
}

export default connect()(Form);