import React from 'react'
import './TrSocio.css'

const TrSocio = ({ firstName, lastName, percent }) => {
    return (
        <tr className='tableLine'>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{percent}%</td>
        </tr>

    )
}

export default TrSocio