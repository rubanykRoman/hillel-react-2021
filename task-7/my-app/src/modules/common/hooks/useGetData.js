import { useEffect, useState } from 'react';

export default function useGetData(api) {

    const [list, setList] = useState([])

    useEffect(() => {
        api.get().then(({ data }) => setList(data));
    }, [api]);

    return {
        list,
    }
}
