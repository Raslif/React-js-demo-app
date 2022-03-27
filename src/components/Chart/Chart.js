import React from "react";

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    let dataPointValues = props.dataPoints.map((datapoint) => datapoint.value);
    let maximumValue = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint, index) => (
                <ChartBar
                    key={index}
                    value={dataPoint.value}
                    maxValue={maximumValue}
                    label={dataPoint.label} />
            ))}
        </div>
    );
}

export default Chart;