import { useEffect, useState } from 'react';
import api from '../../../api';

export default function useContacts() {
    
    const [list, setList] = useState([])
    const [modal, setModal] = useState(false)

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

    function toggleModal() {
        setModal(!modal)
    }

    return {
        list,
        modal,
        deleteItem,
        createItem,
        toggleModal,
    };
}