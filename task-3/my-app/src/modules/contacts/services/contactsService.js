import { CONTACTS_URL } from '../constants'

export function getContacts() {
    return fetch(CONTACTS_URL).then((res) => res.json());
}

export function createContact(newItem) {
    return fetch(CONTACTS_URL, {
        method: 'POST',
        body: JSON.stringify(newItem),
        headers: {
            'Content-Type': 'application/json'
        },
    })
}

export function deleteContact(id) {
    return fetch(CONTACTS_URL + id, {
        method: 'DELETE',
    })
}