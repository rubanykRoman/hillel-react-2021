import React, { useState } from 'react';
import {
    Box,
    Button,
    Container,
    FormControl,
    Input,
    InputLabel,
} from '@material-ui/core';
import { useHistory, withRouter } from 'react-router-dom';
import { removeUser, saveContact } from '../store/actions';
import { connect } from 'react-redux';

function ModalPage({
    curContact,
    removeUser,
    saveContact
    }) {

    const initialState = {
        name: '',
        surname: '',
        phone: '',
        email: '',
    }
    
    const [contact, setContact] = useState(curContact)
    const history = useHistory();

    // const onSubmit = async (contact) => {
    //     const { id } = await saveContact(contact);

    //     history.push(`/form/${id}`);
    // };
    
    async function onFormSubmit(e) {
        e.preventDefault();

        // if (contact.id) {
        //     updateContact(contact)
        // } else {
        //     addContact(contact)
        // }

        const { id } = await saveContact(contact);
        history.push(`/form/${id}`);
    }

    // const onSubmit = async (contact) => {
    //     const { id } = await saveContact(contact);

    //     history.push(`/form/${id}`);
    // };

    function onInputChange(e) {
        setContact({...contact, [e.target.name]: e.target.value })
    }

    return (
        <Container maxWidth="md">
            <Box my={5} display="flex" flexDirection="column" justifyContent="center">
                <form onSubmit={onFormSubmit}>
                    <Box display="flex" flexDirection="column">
                        <FormControl>
                            <InputLabel htmlFor="name">Name</InputLabel>
                            <Input
                                id="name"
                                name= "name"
                                value={contact.name}
                                onChange={onInputChange}/>
                        </FormControl>
                        <FormControl >
                            <InputLabel htmlFor="surname">Surname</InputLabel>
                            <Input
                                id="surname"
                                name="surname"
                                value={contact.surname}
                                onChange={onInputChange} />
                        </FormControl>
                        <FormControl >
                            <InputLabel htmlFor="phone">Phone</InputLabel>
                            <Input
                                id="phone"
                                name="phone"
                                value={contact.phone}
                                onChange={onInputChange} />
                        </FormControl>
                        <FormControl >
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input
                                id="email"
                                name="email"
                                value={contact.email}
                                onChange={onInputChange}/>
                        </FormControl>
                    </Box>
                    <Box my={4} display="flex" justifyContent="space-between" alignItems="center">
                        <Button type="submit" size="small" variant="outlined" color="primary">
                            Save
                        </Button>
                        <Button onClick={removeUser} size="small" variant="outlined" color="secondary">
                            Delete
                        </Button>
                    </Box>
                </form>
            </Box>
        </Container>
    )
}

const mapStateToProps = ({ list }, { match: { params } }) => {
    let curContact = list.find((el) => el.id === params.id);

    curContact = curContact || {
        name: '',
        surname: '',
        phone: '',
        email: '',
    };

    return { curContact };
};

const mapDispatchToProps = {
    removeUser,
    saveContact
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ModalPage)
);