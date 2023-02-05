import React from 'react'

const TrSocio = ({ firstName, lastName, percent }) => {
    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{percent}%</td>
        </tr>

    )
}

export default TrSocio