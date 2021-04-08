import { useEffect, useState } from 'react';
import api from '../../../api';

export default function useContacts() {
    
    const [list, setList] = useState([])

    useEffect(() => {
        api.get().then(({ data }) => setList(data));
    }, []);

    function deleteItem(id) {
        api.delete(id);

        setList(list.filter((item) => item.id !== id));
    }

    function createItem(newItem) {
        
        api.post('', newItem).then(({ data }) =>
            setList((list) => [...list, data])
        );
    }

    return {
        list,
        deleteItem,
        createItem,
    };
}