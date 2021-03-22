import React, { useState, useEffect } from 'react'
import { getNoteBoard, createItem, deleteItem, updateItem } from '../../services/noteBoardService'
import NoteBoardContainer from '../NoteBoardContainer'
import NoteBoardHeader from '../NoteBoardHeader/NoteBoardHeader'
import './NoteBoard.scss';


export default function NoteBoard() {

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
        deleteItem(id);

        setList(list.filter((item) => item.id !== id));
    };

    function updateNote(stiker) {
        const item = list.find((l) => l.id === stiker.id);
        const newItem = { ...item, description: stiker.description };

        updateItem(newItem).then(() => {
            setList(list.map((item) => item.id !== stiker.id ? item : newItem))
        });
    };


    return (
        <>
            <NoteBoardHeader createNote={createNote}></NoteBoardHeader>
            <NoteBoardContainer list={list}  onDelete = {deleteNote} onUpdate={updateNote}></NoteBoardContainer>
        </>
    )
}
