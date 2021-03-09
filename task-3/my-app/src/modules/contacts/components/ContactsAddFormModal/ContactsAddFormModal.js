import React, { Component } from 'react'
import './ContactsAddFormModal.css';

export default class ContactsAddFormModal extends Component {

    state = {
        contact: {
            name: '',
            surname: '',
            phone: '',
        }
    }

    onFormSubmit = (e) => {
        e.preventDefault();
    
        this.props.onSave(this.state.contact);
        this.setState({ contact: {name: '', surname: '', phone: '',} });
    } 

    onInputChange = (e) => {
        this.setState({contact:{...this.state.contact, [e.target.name]: e.target.value }})
    }

    onCancelClick = (e) => {
        e.preventDefault();

        this.setState({ contact: { name: '', surname: '', phone: '', } });
        this.props.toggleModal();
    } 

    render() {
        return (
            <form className={`modal__wrapper ${this.props.isOpened ? 'open' : 'close'}`} onSubmit={this.onFormSubmit}>
                <div className='modal__body'>
                    <div className='modal__inputs'>
                    <p>Name:</p>
                <input
                    type="text"
                    name= "name"
                    value={this.state.contact.name}
                    onChange={this.onInputChange}    
                />
                    <p>Surname:</p>
                <input
                    type="text"
                    name="surname"
                    value={this.state.contact.surname}
                    onChange={this.onInputChange}   
                />
                    <p>Phone:</p>   
                <input
                    type="text"
                    name="phone"
                    value={this.state.contact.phone}
                    onChange={this.onInputChange}    
                    />
                    </div>
                    <div className='modal__btns'>
                        <button className="save" onClick={this.props.toggleModal}>Save</button>
                        <button className="cancel" onClick={this.onCancelClick}>Cancel</button>
                    </div>
                </div>
            </form>
        )
    }
}
