import React from 'react'
import './Header.css'
import Button from '../Button'
import { FiPlus } from "react-icons/fi";

const Header = ({ onOpenModal }) => {
    return (
        <header className='header'>
            <ul>
                <li>
                    <a href='.'>
                        <img src='./images/pie-chart.svg' alt='Logo Partition' />
                        <h1>Partition</h1>
                    </a>
                </li>
                <li>
                    <Button
                        onOpenModal={onOpenModal}
                        icon={<FiPlus size={'1.2rem'} style={{ color: '#FFFFFF' }} />}
                        text={'Add'}
                    />
                </li>
            </ul>
        </header>
    )
}

export default Header