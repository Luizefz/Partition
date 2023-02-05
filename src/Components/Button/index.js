import React from 'react'
import './Button.css'

const Button = ({ icon, text, onOpenModal, type }) => {
    return (
        <button className='button' onClick={onOpenModal} type={type}>
            {icon}
            <h1>{text}</h1>
        </button>
    )
}

export default Button