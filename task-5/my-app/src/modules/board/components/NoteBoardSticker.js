import React, {useState} from 'react'

export default function NoteBoardSticker({ item, onDelete, onUpdate }) {

    const [sticker, setSticker] = useState({ ...item })
    
    function onDeleteBtnClick(e) {
        onDelete(item.id);
    };

    function onInputChange(e) {
        setSticker({...sticker, description: e.target.value })
    }

    function onBlur(e) {
        onUpdate(sticker);
    }

    return (
        <div className="sticker">
            <h3 onClick={onDeleteBtnClick}>х</h3>
            <form >
                <textarea
                onChange={onInputChange}
                onBlur={onBlur}
                value={sticker.description}>
                </textarea>
            </form>
        </div>
    )
}
