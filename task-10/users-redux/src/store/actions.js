import api from '../components/usersApi';

export const USERS_SET_CONTACTS = 'USERS_SET_CONTACTS';
export const setUsers = () => async (dispatch) => {
    const { data } = await api.get();
    dispatch({
        type: USERS_SET_CONTACTS,
        payload: data,
    });
}

export const USERS_REMOVE_CONTACT = 'USERS_REMOVE_CONTACT';
export const removeUser = (payload) => async (dispatch) => {
    dispatch({
        type: USERS_REMOVE_CONTACT,
        payload,
    });
    await api.delete(payload);
}

export const saveContact = (contact) => (dispatch) => {
    return contact.id
        ? updateContact(contact, dispatch)
        : addContact(contact, dispatch);
};

export const USERS_ADD_CONTACT = 'USERS_ADD_CONTACT';
const addContact = async (contact, dispatch) => {
    const { data } = await api.post('', contact);
        dispatch({
            type: USERS_ADD_CONTACT,
            payload: data,
        });
    return data;
};

export const USERS_UPDATE_CONTACT = 'USERS_UPDATE_CONTACT';
const updateContact = async (contact, dispatch) => {
    const { data } = await api.put(contact.id, contact);
    dispatch({
        type: USERS_UPDATE_CONTACT,
        payload: contact,
    });
    return data;
}

export const USERS_MODAL_TOGGLE = 'USERS_MODAL_TOGGLE';
export const toggleModal = () => ({
    type: USERS_MODAL_TOGGLE,
});

export const USERS_CURRENT_CONTACT = 'USERS_CURRENT_CONTACT';
export const setCurContact = (contact) => ({
    type: USERS_CURRENT_CONTACT,
    payload: contact,
});