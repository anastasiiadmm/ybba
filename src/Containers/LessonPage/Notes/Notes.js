import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Notes = (props) => {

    const {
        lessonId
    } = props

    const [notes, setNotes] = useState('')

    const localStorageKey = `${lessonId}-notes`

    const notesChangeHandler = e => {
        console.log(1342234241234241243)
        setNotes(e.target.value)
        localStorage.setItem(localStorageKey, e.target.value)
    }

    useEffect(() => {
        setNotes(localStorage.getItem(localStorageKey))
    }, [])

    return (
        <div className='gamef__remark'>
            <h4 className='gamef__remark-title'>Заметки</h4>
            <textarea
                className='gamef__remark-area'
                onChange={notesChangeHandler}
                value={notes}
            />
            <p className='gamef__remark-note'>Заметки сохраняются автоматически</p>
        </div>
    );
}

Notes.propTypes = {
    lessonId: PropTypes.string.isRequired
}

export default Notes;