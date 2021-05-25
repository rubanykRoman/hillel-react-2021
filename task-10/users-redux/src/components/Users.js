import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import UserTableRow from './UserTableRow';
import { removeUser, toggleModal, saveContact, setCurContact, setUsers} from '../store/actions';
import { Box, Button } from '@material-ui/core';
import ModalPage from './ModalPage';

function Users({
    list,
    removeUser,
    modal,
    toggleModal,
    saveContact,
    contact,
    setCurContact,
    setUsers }) {

    useEffect(() => {
        setUsers();
    }, [setUsers]);


    return (
        <>

        <Box my={5} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            {modal ?
                <ModalPage
                    toggleModal={toggleModal}
                    saveContact={saveContact}
                    curContact={contact}
                    setCurContact={setCurContact}
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
                                    setCurContact={setCurContact}
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
    saveContact,
    setCurContact,
    setUsers,
};

export default connect(mapsStateToProps, mapDispatchToProps)(Users);