import React from 'react'
import './Button.css'

const Button = ({ icon, text }) => {
    return (
        <button className='button'>
            {icon}
            <h1>{text}</h1>
        </button>
    )
}

export default Button