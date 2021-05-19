import api from '../components/usersApi';

export const USERS_GET_CONTACTS = 'USERS_GET_CONTACTS';
export function getUsers() {
    return function (dispatch) {
        api.get().then(({ data }) => {
            dispatch(({
                type: USERS_GET_CONTACTS,
                payload: data,
            }));
        });
    };
}

export const USERS_REMOVE_CONTACT = 'USERS_REMOVE_CONTACT';
export function removeUser(payload) {
    return function (dispatch) {
            api.delete(payload).then(() => {
                dispatch({
                type: USERS_REMOVE_CONTACT,
                payload,
            });
        })
    };
}

// export const USERS_ADD_CONTACT = 'USERS_ADD_CONTACT';
// export function addContact(contact) {
//     return function (dispatch) {
//         api.post('', contact).then(({ data }) => {
//             dispatch(({
//                 type: USERS_ADD_CONTACT,
//                 payload: data,
//             }));
//         });
//     }
// }

// export const USERS_UPDATE_CONTACT = 'USERS_UPDATE_CONTACT';
// export function updateContact(contact) {
//     return function (dispatch) {
//         api.put(contact.id, contact).then(() => {
//             dispatch(({
//                 type: USERS_UPDATE_CONTACT,
//                 payload: contact,
//             }))
//         })
//     }
// }

export const USERS_ADD_CONTACT = 'USERS_ADD_CONTACT';
const addContact = (contact, dispatch) => {
    const { data } = await api.post('', contact);
    dispatch({
        type: USERS_ADD_CONTACT,
        payload: data,
    });
    return data;
}

export const USERS_UPDATE_CONTACT = 'USERS_UPDATE_CONTACT';
const updateContact = async (contact, dispatch) => {
    const { data } = await api.put(contact.id, contact);
        dispatch({
            type: USERS_UPDATE_CONTACT,
            payload: data,
        })
    return data;
}
export const saveContact = (contact) => (dispatch) => {
    return contact.id
        ? updateContact(contact, dispatch)
        : addContact(contact, dispatch);
};
























export const USERS_MODAL_TOGGLE = 'USERS_MODAL_TOGGLE';
export const toggleModal = () => ({
    type: USERS_MODAL_TOGGLE,
});

export const USERS_CURRENT_CONTACT = 'USERS_CURRENT_CONTACT';
export const getCurContact = (contact) => ({
    type: USERS_CURRENT_CONTACT,
    payload: contact,
});