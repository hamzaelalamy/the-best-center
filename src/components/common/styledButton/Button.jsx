import React from 'react'
import './Button.css'

function Button({ id, text, style }) {
    return (
        <button id={id} className={`${style}`}>
            {text}
        </button>
    )
}

export default Button
