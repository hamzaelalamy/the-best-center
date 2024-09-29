import React from 'react'
import './buttonService.css'
import { FaArrowRight } from 'react-icons/fa';

function Button({ id, text, style }) {
    return (
        <button id={id} className={`${style}`}>
            {text} <FaArrowRight className="arrow-icon" />

            
        </button>
    )
}

export default Button