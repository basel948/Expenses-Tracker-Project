import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  // dataPoints is an Object {label , value}, and here we assign a new array that will contains only the values from that Object
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  // Math.max() recieves only a list so we convert our dataPointsValues Array by using the spread operator to have a list of values and not an array of values
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
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
