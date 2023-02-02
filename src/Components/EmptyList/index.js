import React from 'react'
import './EmptyList.css'

const EmptyList = () => {
    return (
        <>
            <section className='secEmpty'>
                <div>
                    <h1>
                        Try to add more<br />
                        people here!
                    </h1>
                    <img src='./images/Geometry-forms.png' alt='Geometry forms' draggable='false'></img>
                </div>

            </section>
            <span className='divisor' />
        </>
    )
}

export default EmptyList