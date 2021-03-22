import React from 'react'
import NoteBoardSticker from './NoteBoardSticker'

export default function NoteBoardContainer({ list, onDelete, onUpdate}) {
    return (
        <div className="note-board-container" >
            {list.map((item) => (
                <NoteBoardSticker key={item.id} item={item} onDelete={onDelete} onUpdate={onUpdate}/>
            ))}
        </div>
    )
}
