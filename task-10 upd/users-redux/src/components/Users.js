import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import UserTableRow from './UserTableRow';
import { removeUser,toggleModal,addContact,getCurContact,updateContact,getUsers} from '../store/actions';
import { Box, Button } from '@material-ui/core';
import ModalPage from './ModalPage';
import { Switch, Route, useRouteMatch } from 'react-router';

function Users({
    list,
    removeUser,
    modal,
    toggleModal,
    addContact,
    contact,
    getCurContact,
    updateContact,
    getUsers }) {
    
    const { path } = useRouteMatch();

    useEffect(() => {
        getUsers();
    }, [getUsers]);


    return (
        <>

        <Box my={5} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            {modal ?
                <ModalPage
                    toggleModal={toggleModal}
                    addContact={ addContact}
                    curContact={contact}
                    getCurContact={getCurContact}
                    updateContact={updateContact}
                >
                </ModalPage>
                :
                <>
                    <Box my={2} display="flex" justifyContent="space-between" alignItems="center">
                        <Button onClick={toggleModal} type="submit" size="medium" variant="outlined" color="primary">
                            add contact
                        </Button>
                    </Box>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Phone</th>
                                <th>email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((item) => (
                                <UserTableRow
                                    key={item.id}
                                    item={item}
                                    removeUser={removeUser}
                                    toggleModal={toggleModal}
                                    getCurContact={getCurContact}
                                >
                                </UserTableRow>
                            ))}
                        </tbody>
                    </table>
                </>}
            </Box>
        </>   
    )
}

function mapsStateToProps(state) {
    return {
        list: state.list,
        modal: state.modal,
        contact: state.contact
    };
}

const mapDispatchToProps = {
    removeUser,
    toggleModal,
    addContact,
    getCurContact,
    updateContact,
    getUsers,
};

export default connect(mapsStateToProps, mapDispatchToProps)(Users);