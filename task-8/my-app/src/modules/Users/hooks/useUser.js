import { useEffect, useState } from 'react';
import {
    createUser,
    getUser,
    updateUser,
    deleteUser as deleteUserFromServer,
} from '../services/users';

const EMPTY_USER = {
    name: '',
    phone: '',
    email: '',
    website: '',
};

export default function useUser(id) {

    const [user, setUser] = useState(EMPTY_USER);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (id) {
            setIsLoading(true);
            getUser(id).then(({ data }) => {
                setIsLoading(false);
                setUser(data);
            });
        } else {
            setUser(EMPTY_USER);
        }
    }, [id, getUser]);

    function saveUser(data) {
        if (data.id) {
            return updateUser(data);
        } else {
            return createUser(data);
        }
    }

    function deleteUser(id) {
        if (id) {
            return deleteUserFromServer(id);
        }
    }

    return {
        user,
        isLoading,
        saveUser,
        deleteUser,
    };
}
