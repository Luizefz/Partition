import React from 'react'
import './CampoTexto.css'

const CampoTexto = ({ id, type, valor, label, placeholder, aoAlterar, obrigatorio }) => {

    const placeholderModificada = `${placeholder}...`

    const aoDigitar = (evento) => {
        aoAlterar(evento.target.value)
    }

    return (
        <div className='campoTexto'>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} value={valor} onChange={aoDigitar} required={obrigatorio} placeholder={placeholderModificada} />
        </div>
    )
}

export default CampoTexto