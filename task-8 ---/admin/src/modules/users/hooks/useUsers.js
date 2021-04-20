import { useEffect, useState } from 'react';
import api from '../../../api';
import { getUsersList} from '../services/users';

export default function useUsers() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // useEffect(async () => {
    //     setIsLoading(true);
    //     setError(null);
    //     try {
    //         const { data } = await getUsersList();
    //         setUsers(data);
    //     } catch (err) {
    //         setError(err);
    //     }

    //     setIsLoading(false);
    // }, []);

    useEffect(() => {
        setIsLoading(true);
        setError(null);
        getUsersList()
            .then(({ data }) => setUsers(data))
            .catch((err) => setError(err))
            .finally(() => setIsLoading(false));
    }, []);

    function deleteItem(id) {
        api.delete(id);

        setUsers(users.filter((item) => item.id !== id));

        console.log('del')
    }

    function createItem(newItem) {
        api.post('', newItem).then(({ data }) =>
            setUsers((list) => [...list, data])
        );
        console.log('create')
    }
    return { users, isLoading, error, deleteItem, createItem };
}
