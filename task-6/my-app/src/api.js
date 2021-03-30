import axios from 'axios';
import { CONTACTS_URL } from './modules/contacts/constants';

export default axios.create({
    baseURL: CONTACTS_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
