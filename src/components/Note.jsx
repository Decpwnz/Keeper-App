import React from 'react';

function Note(props) {
    return (
        <div className='note'>
            <h1>{props.title}</h1>
            <h1>{props.content}</h1>
        </div>
    )
}

export default Note;
