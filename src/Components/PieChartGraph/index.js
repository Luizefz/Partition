import React from 'react'
import './PieChartGraph.css'
import { PieChart } from "react-minimal-pie-chart";
import MapLegend from '../MapLegend';

const PieChartGraph = ({ data }) => {

    let positionLabel = 0;

    (data.length > 1) ? positionLabel = 120 : positionLabel = 0

    return (
        <div className="chart-container">
            <PieChart
                animate
                animationDuration={500}
                animationEasing="ease-out"
                center={[50, 50]}
                data={data}
                lengthAngle={360}
                lineWidth={15}
                paddingAngle={15}
                radius={50}
                rounded
                startAngle={100}
                viewBoxSize={[100, 100]}
                labelPosition={positionLabel}
            />
            <MapLegend data={data} />
        </div>
    )
}

export default PieChartGraph