import {
    USERS_REMOVE_CONTACT,
    USERS_MODAL_TOGGLE,
    USERS_GET_CONTACTS,
    USERS_ADD_CONTACT,
    USERS_CURRENT_CONTACT,
    USERS_UPDATE_CONTACT
} from './actions';

const initialState = {
    list: [],
    modal: false,
    contact: {
        name: '',
        surname: '',
        phone: '',
        email: '',
    }
};

export default function todosReducer(state = initialState, { type, payload }) {
    switch (type) {

        case USERS_GET_CONTACTS:
            return {
                ...state,
                list: payload,
            };
        
        case USERS_REMOVE_CONTACT:
            return {
                ...state,
                list: state.list.filter((user) => user.id !== payload),
            };
        
        case USERS_ADD_CONTACT:
            return {
                ...state,
                list: [...state.list, payload],
            };

        case USERS_UPDATE_CONTACT:
            return {
                ...state,
                list: state.list.map((item) =>
                    item.id !== payload.id ? item : payload
                ),
            };
        
        case USERS_MODAL_TOGGLE:
            return {
                ...state,
                modal: !state.modal,
            };
        
        case USERS_CURRENT_CONTACT:
            return {
                ...state,
                contact: payload,
            };

        default:
            return state;
    }
}