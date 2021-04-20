import {useState} from 'react';

export default function useModal() {

    const [modal, setModal] = useState(false);

    const [contact, setContact] = useState({
            name: '',
            email: '',
            phone: '',
    })

    function toggleModal() {
        setModal(!modal)
    }

    return {
        modal,
        toggleModal,
        contact,
        setContact
    };
}
