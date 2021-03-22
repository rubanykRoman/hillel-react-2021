import React from 'react'
import NoteBoardContainer from '../NoteBoardContainer'
import NoteBoardHeader from '../NoteBoardHeader/NoteBoardHeader'
import useNoteBoard from '../../hooks'
import './NoteBoard.scss';


export default function NoteBoard() {

    const {list, createNote, deleteNote, updateNote } = useNoteBoard();

    return (
        <>
            <NoteBoardHeader createNote={createNote}></NoteBoardHeader>
            <NoteBoardContainer list={list}  onDelete = {deleteNote} onUpdate={updateNote}></NoteBoardContainer>
        </>
    )
}
