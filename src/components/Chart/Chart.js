import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';


const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);//transform dataPoint object to number
    //returns a brand new array, array of numbers
    const totalMaximum = Math.max(...dataPointValues);
    //pull out all the elemnets and add them as stand alone arguments, 
    //because max wants an array of numbers

    return (<div className='chart'>
        {props.dataPoints.map((dataPoint) => (
            < ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label}
            />
        ))}
    </div>
);
}; 

export default Chart;