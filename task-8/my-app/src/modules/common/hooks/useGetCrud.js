import { useEffect, useState } from 'react';

export default function useGetCrud(api) {

    const [list, setList] = useState([])

    useEffect(() => {
        api.get().then(({ data }) => setList(data));
    }, [api]);

    function deleteItem(id) {
        api.delete(id);

        setList(list.filter((item) => item.id !== id));
    }

    function createItem(newItem) {
        
        api.post('', newItem).then(({ data }) =>
            setList((list) => [...list, data])
        );
    }

    function updateItem(updItem) {
        const item = list.find((l) => l.id === updItem.id);
        const newItem = { ...item, name: updItem.name, phone: updItem.phone, email: updItem.email };

        api.put(updItem.id, updItem).then(() => {
            setList(list.map((item) => item.id !== updItem.id ? item : newItem))
        });

    };

    return {
        list,
        deleteItem,
        createItem,
        updateItem,
    }
}
