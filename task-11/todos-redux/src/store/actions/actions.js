import api from '../../api';

export const TODOS_GET_TODOS = 'TODOS_GET_TODOS';
export function getTodos() {
    return function (dispatch) {
        api.get().then(({ data }) => {
            dispatch(({
                type: TODOS_GET_TODOS,
                payload: data,
            }));
        });
    };
}

export const TODOS_TOGGLE_TODO = 'TODOS_TOGGLE_TODO';
export const toggleTodo = (id) => {
    return function (dispatch, getState) {
        const state = getState();
        const todo = state.list.find((todo) => todo.id === id);

        const updatedTodo = { ...todo, isDone: !todo.isDone };
        api.put(id, updatedTodo);

        dispatch(updateTodos(updatedTodo));
    };
};

export const TODOS_UPDATE_TODOS = 'TODOS_UPDATE_TODOS';
export const updateTodos = (payload) => ({
    type: TODOS_UPDATE_TODOS,
    payload,
});

export const TODOS_REMOVE_TODO = 'TODOS_REMOVE_TODO';
export function removeTodo(payload) {
    return function (dispatch) {
            api.delete(payload).then(() => {
                dispatch({
                type: TODOS_REMOVE_TODO,
                payload,
            });
        })
    };
}

export const TODOS_ADD_TODO = 'TODOS_ADD_TODO';
export function addTodo(todo) {
    return function (dispatch) {
        api.post('', todo).then(({ data }) => {
            dispatch(({
                type: TODOS_ADD_TODO,
                payload: data,
            }));
        });
    }
}