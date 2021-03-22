import { NOTEBOARD_URL } from '../constants';

export function getNoteBoard() {
    return fetch(NOTEBOARD_URL).then((res) => res.json());
}

export function createItem(newItem) {
    return fetch(NOTEBOARD_URL, {
        method: 'POST',
        body: JSON.stringify(newItem),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}

export function deleteItem(id) {
    return fetch(NOTEBOARD_URL + id, {
        method: 'DELETE',
    }).then((res) => res.json());
}

export function updateItem(newItem) {
    return fetch(NOTEBOARD_URL + newItem.id, {
        method: 'PUT',
        body: JSON.stringify(newItem),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}


