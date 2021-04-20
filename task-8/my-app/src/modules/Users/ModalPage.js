import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

export default function ModalPage({toggleModal, createItem, curContact, setCurContact, updateItem}) {

    const [contact, setContact] = useState({...curContact})
    
    function onFormSubmit(e) {
        e.preventDefault();
        
        if (contact.id) {
            updateItem(contact)
        } else {
            createItem(contact);
        }
        setCurContact({ name: '', email: '', phone: '', });
        toggleModal();
    }

    function onInputChange(e) {
        setContact({...contact, [e.target.name]: e.target.value })
    }
    
    function onCancelClick(e) {
        e.preventDefault();

        setCurContact({name: '', email: '', phone: '',});
        toggleModal();
    }

    return (
        <form onSubmit={onFormSubmit} className="modal-page">
            <div>
                <p>Name:</p>
                <input
                    type="text"
                    name= "name"
                    value={contact.name}
                    onChange={onInputChange}    
                />
                <p>Email:</p>
                <input
                    type="text"
                    name="email"
                    value={contact.email}
                    onChange={onInputChange}   
                />
                <p>Phone:</p>   
                <input
                    type="text"
                    name="phone"
                    value={contact.phone}
                    onChange={onInputChange}    
                    />
            </div>
            <div className="buttons">
                <Button onClick={onFormSubmit} size="small" variant="outlined" color="primary">
                    Save
                </Button>
                <Button onClick={onCancelClick} size="small" variant="outlined" color="secondary">
                    Cancel
                </Button>
            </div>
        </form>
    )
}
