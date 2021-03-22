import React from 'react'
import './NoteBoardHeader.scss'

export default function NoteBoardHeader({ createNote }) {
    
    function onAddBtnClick(e) {
        createNote({ description: ''});
    };


    return (
        <header className='note-board-header'>
            <button onClick={onAddBtnClick}>Add sticker</button>
        </header>
    )
}
