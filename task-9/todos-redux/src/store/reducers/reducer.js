import { ACTION_DELETE_TODO, ACTION_SAVE_TODO, ACTION_TOGGLE } from '../actions/actions';

const INITIAL_STATE = {
    list: [
        { id: 1, title: 'todo-1', isDone: true },
        { id: 2, title: 'todo-2', isDone: false },
        { id: 3, title: 'todo-3', isDone: true },
        { id: 4, title: 'todo-4', isDone: false },
        { id: 5, title: 'todo-5', isDone: true },
        { id: 6, title: 'todo-6', isDone: false },
        { id: 7, title: 'todo-7', isDone: false },
    ],
    filtet: 'all',
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case ACTION_DELETE_TODO:
            return {
                ...state,
                list: state.list.filter((item) => item.id !== payload),
            };
        case ACTION_TOGGLE:
            const item = state.list.find((l) => l.id === payload);
            const newItem = { ...item, isDone: !item.isDone }
            return {
                ...state,
                list: state.list.map((item) => item.id !== payload ? item : newItem),
                
            };
        case ACTION_SAVE_TODO:
            //это конечно не очень хороший код, но в случае со статичными данными избавляет от постоянных ошибок в key
            const dataForId = new Date();
            payload.id = payload.title + dataForId;
            return {
                ...state,
                list: [...state.list, payload],
            };
        default:
            return state;
    }
}