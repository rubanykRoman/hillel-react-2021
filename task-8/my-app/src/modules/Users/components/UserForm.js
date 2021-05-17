import {
    Box,
    Button,
    Container,
    FormControl,
    Input,
    InputLabel,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import { useHistory } from 'react-router';
import useUser from '../hooks/useUser';

export function UserEditForm() {
    const { userId } = useParams();
    // const history = useHistory();

    const { user, saveUser, deleteUser } = useUser(
        userId === 'add' ? null : userId
    );
    const [formState, setFormState] = useState(user);

    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        saveUser(formState).then(closeForm);
    }

    function handleDelete() {
        deleteUser().then(closeForm);
    }

    function closeForm() {
        // history.goBack();
        window.location.href="http://localhost:3000/users";
    }

    useEffect(() => {
        setFormState(user);
    }, [user]);

    return (
        <Container maxWidth="sm">
            <form autoComplete="off" onSubmit={handleSubmit}>
                <FormControl fullWidth>
                    <InputLabel htmlFor="name">Name</InputLabel>
                    <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="phone">Phone</InputLabel>
                    <Input
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="website">Website</InputLabel>
                    <Input
                        id="website"
                        name="website"
                        value={formState.website}
                        onChange={handleChange}
                    />
                </FormControl>
                <Box my={4} display="flex" justifyContent="center" alignItems="center">
                    <Box>
                        <Button variant="outlined" type="submit">
                                Save
                        </Button>
                    </Box>
                    <Box m={3}>
                        <Button
                            variant="contained"
                            onClick={closeForm}
                        >
                                Cancel
                        </Button>
                    </Box>
                    {user.id ? (
                        <Box>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={handleDelete}
                            >
                                    Delete
                            </Button>
                        </Box>
                    ) : null}
                </Box>
            </form>
        </Container>
    );
}
