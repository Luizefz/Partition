import React from 'react'
import PieChartGraph from '../PieChartGraph';
import './PieChartSec.css'

const PieChartSec = ({ socios }) => {

    return (
        <>
            <section className='secEmpty'>
                {socios.length ? (
                    <>
                        <PieChartGraph data={socios} />
                    </>
                ) : (
                    <div>
                        <h1>
                            Try to add more<br />
                            people here!
                        </h1>
                        <img src='./images/Geometry-forms.png' alt='Geometry forms' draggable='false'></img>
                    </div>
                )}
            </section>
            <span className='divisor' />
        </>
    )
}

export default PieChartSec