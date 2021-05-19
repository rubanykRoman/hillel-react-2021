import React, { useState } from 'react';
import {
    Box,
    Button,
    Container
} from '@material-ui/core';
import { addTodo } from '../store/actions/actions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import FormikTextField from "../common/components/form/FormikTextField";
import FormikButton from "../common/components/form/FormikButton";
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import FormikSelect from '../common/components/form/FormikSelect';

const initialState = {
        title: '',
        isDone: false,
    }

    const options = [
        { value: false, label: "Not completed" },
        { value: true, label: "Completed" }
    ];

function TodoForm({ addTodo }) {

    const [todo, setTodo] = useState(initialState)
    const history = useHistory();

    function closeForm() {
        setTodo(initialState);
        history.push(`/todos`);
    }

    const onSubmit = async (todo) => {
        await addTodo(todo);

        closeForm()
    };

    function onFormCancel() {
        closeForm()
    };

    const validate = (values) => {
        const errors = {};
        if (!values.title) {
            errors.title = 'Title  is required';
        } else if (values.title.length > 255) {
            errors.title = 'Title is too long';
        }
        return errors;
    }

    return (
        <Container maxWidth="lg">
            <Grid container justify="center" align="center">
                <Grid item xs={12}>
                    <Box my={5}>
                        <Formik
                            initialValues={todo}
                            enableReinitialize
                            onSubmit={onSubmit}
                            validate={validate}>
                            <Form>
                                <Grid container spacing={3} align="center">
                                    <Grid item xs={12} md={6}>
                                        <FormikTextField
                                            name="title"
                                            label="Title"
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <FormikSelect
                                                name="isDone"
                                                label="Status"
                                                options={options}>
                                            </FormikSelect>
                                        </Grid>
                                    </Grid>
                                <Grid
                                    container
                                    spacing={3}
                                    justify="center"
                                >
                                    <Grid item xs={12} md={6} align="center">
                                        <Box my={25} display="flex" justifyContent="space-around" alignItems="center">
                                        <FormikButton
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            startIcon={<SaveIcon />}
                                        >
                                                Save
                                        </FormikButton>
                                            <Button
                                                type="button"
                                                variant="contained"
                                                color="secondary"
                                                startIcon={<DeleteIcon />}
                                                onClick={onFormCancel}
                                            >
                                                Cancel
                                            </Button>
                                        </Box>     
                                    </Grid>
                                </Grid>
                            </Form>
                        </Formik>
                    </Box>
                </Grid>
            </Grid>
        </Container>    
        )
    }

const mapDispatchToProps = {
        addTodo
    };
    
export default connect(null, mapDispatchToProps)(TodoForm)