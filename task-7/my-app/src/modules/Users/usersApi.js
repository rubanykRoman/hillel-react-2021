import axios from 'axios';

export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',
    headers: {
        'Content-Type': 'application/json',
    },
});
