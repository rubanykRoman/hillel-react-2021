import React, { useState } from 'react';
import {
    Box,
    Button,
    Container,
    FormControl,
    Input,
    InputLabel,
} from '@material-ui/core';

export default function ModalPage({
    toggleModal,
    curContact,
    setCurContact,
    saveContact}) {

    const initialState = {
        name: '',
        surname: '',
        phone: '',
        email: '',
    }
    
    const [contact, setContact] = useState(curContact)
    
    function onFormSubmit(e) {
        e.preventDefault();

        saveContact(contact);

        // if (contact.id) {
        //     updateContact(contact)
        // } else {
        //     addContact(contact)
        // };

        setCurContact(initialState);
        toggleModal();
    }

    function onInputChange(e) {
        setContact({...contact, [e.target.name]: e.target.value })
    }
    
    function onCancelClick(e) {
        e.preventDefault();

        setCurContact(initialState);
        toggleModal();
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
                        <Button onClick={onCancelClick} size="small" variant="outlined" color="secondary">
                            Cancel
                        </Button>
                    </Box>
                </form>
            </Box>
        </Container>
    )
}