import {
    TODOS_SET_TODOS,
    TODOS_UPDATE_TODOS,
    TODOS_TOGGLE_TODO,
    TODOS_REMOVE_TODO,
    TODOS_ADD_TODO,
} from '../actions/actions';

const INITIAL_STATE = {
    list: [],
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case TODOS_SET_TODOS:
            return {
                ...state,
                list: payload,
            };
        case TODOS_UPDATE_TODOS:
            return {
                list: state.list.map((todo) =>
                todo.id !== payload.id ? todo : payload
                ),
            };
        case TODOS_TOGGLE_TODO:
            return {
                ...state,
                items: state.items.map((todo) =>
                    todo.id !== payload
                        ? todo
                        : { ...todo, isDone: !todo.isDone }
                ),
            };
        case TODOS_REMOVE_TODO:
            return {
                ...state,
                list: state.list.filter((user) => user.id !== payload),
            };
        case TODOS_ADD_TODO:
            return {
                ...state,
                list: [...state.list, payload],
            };
        default:
            return state;
    }
}