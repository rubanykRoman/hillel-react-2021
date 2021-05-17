import api from '../usersApi';
import { USERS_API_URI } from '../constants';

export function getUsersList() {
    return api.get(USERS_API_URI);
}

export function getUser(id) {
    return api.get(USERS_API_URI + id);
}

export function deleteUser(id) {
    return api.delete(USERS_API_URI + id);
}

export function createUser(data) {
    return api.post(USERS_API_URI, data);
}

export function updateUser(data) {
    return api.put(USERS_API_URI + data.id, data);
}
