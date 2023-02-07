import React, { useState } from 'react'
import Button from '../Button'
import CampoTexto from '../CampoTexto';
import './Formulario.css'

const Formulario = ({ onCloseModal, aoSocioCadastrado }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [value, setValue] = useState('');

    var randomColor = "#000000".replace(/0/g, function () {
        return (~~(Math.random() * 16)).toString(16);
    });

    const aoSalvar = (event) => {
        event.preventDefault()
        aoSocioCadastrado({
            firstName,
            lastName,
            value,
            color: randomColor
        })
        onCloseModal()
    }

    return (
        <form className="formulario" onSubmit={aoSalvar}>
            <CampoTexto
                id='fName'
                obrigatorio={true}
                label='First Name'
                placeholder='Angela'
                valor={firstName}
                aoAlterar={valor => setFirstName(valor)}
            />
            <CampoTexto
                id='lName'
                obrigatorio={true}
                label='Last Name'
                placeholder='Stones'
                valor={lastName}
                aoAlterar={valor => setLastName(valor)}
            />
            <CampoTexto
                id='percentage'
                type='number'
                obrigatorio={true}
                label='Percentage'
                placeholder='Partner percentage'
                valor={value}
                aoAlterar={valor => setValue(parseInt(valor))}
            />
            <Button type="Submit" text="Add" />
        </form>
    )
}

export default Formulario