import React from 'react'
import Button from '../Button'
import './Formulario.css'

const Formulario = () => {
    return (
        <form className="formulario">
            <div>
                <label htmlFor='fName'>First Name</label>
                <input id='fName' type="text" required />
            </div>
            <div>
                <label htmlFor='lName'>Last Name</label>
                <input id='lName' type="text" required />
            </div>
            <div>
                <label htmlFor='percent'>Percent</label>
                <input id='percent' type="number" required />
            </div>
            <Button type="Submit" text="Add" />
        </form>
    )
}

export default Formulario