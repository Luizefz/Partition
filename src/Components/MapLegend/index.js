import React from 'react'
import './MapLegend.css'

const MapLegend = ({ data }) => {
    return (
        <div className='legend'>
            <ul>
                {data.map(legendItem => (
                    <li>
                        <div style={{ backgroundColor: `${legendItem.color}` }} />
                        <h3>{legendItem.firstName}</h3>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MapLegend