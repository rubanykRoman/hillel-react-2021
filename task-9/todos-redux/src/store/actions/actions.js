export const ACTION_DELETE_TODO = 'ACTION_DELETE_TODO';
export function deleteTodo(id) {
    return { type: ACTION_DELETE_TODO, payload: id };
}

export const ACTION_TOGGLE = 'ACTION_TOGGLE';
export function onToggle(id) {
    return { type: ACTION_TOGGLE, payload: id };
}

export const ACTION_SAVE_TODO = 'ACTION_SAVE_TODO';
export function onSave(newTodo) {
    return { type: ACTION_SAVE_TODO, payload: newTodo };
}
