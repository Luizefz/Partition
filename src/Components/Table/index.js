import React from 'react'
import TrSocio from '../TrSocio'
import './Table.css'

const Table = (props) => {
    return (
        <section className='secTable'>
            <table>
                <tbody>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>%</th>
                    </tr>
                    {props.socios.map(socio => <TrSocio
                        key={socio.firstName + socio.lastName}
                        firstName={socio.firstName}
                        lastName={socio.lastName}
                        percent={socio.percent}
                    />
                    )}
                </tbody>
            </table>
        </section>
    )
}

export default Table