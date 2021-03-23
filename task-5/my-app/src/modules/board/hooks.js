import { useState, useEffect } from 'react'
import { getNoteBoard, createItem, deleteItem, updateItem } from '../../modules/board/services/noteBoardService'

export default function useNoteBoard() {

    const [list, setList] = useState([])

    useEffect(() => {
        getNoteBoard().then(setList)
    }, [])
    
    function createNote (newItem)  {
        createItem(newItem).then((data) => {
            setList([...list, data]);
        });
    };

    function deleteNote(id) {

        deleteItem(id).then(() => {
            setList(list.filter((item) => item.id !== id))
        });
    };

    function updateNote(stiker) {
        const item = list.find((l) => l.id === stiker.id);
        const newItem = { ...item, description: stiker.description };

        updateItem(newItem).then(() => {
            setList(list.map((item) => item.id !== stiker.id ? item : newItem))
        });
    };

    return {
        list,
        createNote,
        deleteNote,
        updateNote
    }
}